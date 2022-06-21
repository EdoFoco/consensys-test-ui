import { MeetingRoomWithSlots, ReservationSlot } from "../types";
import {
  GetMeetingRoomsResponse,
  GET_MEETING_ROOMS,
  MeetingRoom,
  RESET_MEETING_ROOMS,
} from "../graphql/MeetingRoom";
import { GET_OR_CREATE_USER } from "../graphql/User";
import { useQuery, ApolloError, useMutation } from "@apollo/client";

export interface UseMeetingRoomsResult {
  roomsLoading: boolean;
  roomsError: ApolloError | undefined;
  rooms: MeetingRoomWithSlots[] | undefined;
}

export interface UseResetMeetingRoomsResult {
  resetMeetingRooms: Function;
  resetLoading: boolean;
  resetError: ApolloError | undefined;
}

const isRoomFullyBooked = (room: MeetingRoom): boolean => {
  return room.reservations.length >= room.endTimeHr - room.startTimeHr;
};

export const useMeetingRoomsData = (): UseMeetingRoomsResult => {
  const { loading, error, data } =
    useQuery<GetMeetingRoomsResponse>(GET_MEETING_ROOMS);

  const rooms = data?.getMeetingRooms.meetingRooms.map((room) => {
    const roomWithSlot = new MeetingRoomWithSlots(room);

    // check and assign fully booked room
    roomWithSlot.fullyBooked = isRoomFullyBooked(room);

    // keep track of slots
    const processedSlots: Record<string, ReservationSlot> = {};

    // create a slot for each reservation and add it to the room
    room.reservations.forEach((r) => {
      const key = `${r.startTimeHr}:00-${r.endTimeHr}:00`;
      const slot = new ReservationSlot({ ...r, meetingRoomId: room.id }, true);
      roomWithSlot.slots.push(slot);
      processedSlots[key] = slot;
    });

    // create empty slots
    for (
      let i = roomWithSlot.startTimeHr;
      i < roomWithSlot.endTimeHr;
      i += roomWithSlot.reservationIntervalHr
    ) {
      const key = `${i}:00-${i + roomWithSlot.reservationIntervalHr}:00`;

      if (!(key in processedSlots)) {
        const slot = new ReservationSlot({
          id: undefined,
          userId: undefined,
          meetingRoomId: room.id,
          meetingRoom: room,
          startTimeHr: i,
          endTimeHr: i + room.reservationIntervalHr,
        });

        roomWithSlot.slots.push(slot);
        processedSlots[key] = slot;
      }
    }

    return roomWithSlot;
  });

  return {
    roomsLoading: loading,
    roomsError: error,
    rooms,
  };
};

export const useResetMeetingRooms = (): UseResetMeetingRoomsResult => {
  const [resetMeetingRooms, { loading, error }] = useMutation<void>(
    RESET_MEETING_ROOMS,
    {
      refetchQueries: [
        { query: GET_MEETING_ROOMS },
        { query: GET_OR_CREATE_USER },
      ],
    }
  );

  return {
    resetMeetingRooms,
    resetLoading: loading,
    resetError: error,
  };
};
