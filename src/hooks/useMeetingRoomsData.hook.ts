import { MeetingRoomWithSlots, ReservationSlot } from "../types";
import {
  GetMeetingRoomsResponse,
  GET_MEETING_ROOMS,
} from "../graphql/MeetingRoom";
import { useQuery } from "@apollo/client";

export const useMeetingRoomsData = () => {
  const { loading, error, data } =
    useQuery<GetMeetingRoomsResponse>(GET_MEETING_ROOMS);

  const rooms = data?.getMeetingRooms.meetingRooms.map((room) => {
    const roomWithSlot = new MeetingRoomWithSlots(room);

    // create a slot for each reservation
    room.reservations.forEach((r) => {
      const key = `${r.startTimeHr}:00-${r.endTimeHr}:00`;
      const slot = new ReservationSlot({ ...r, roomId: room.id }, true);
      roomWithSlot.slots[key] = slot;
    });

    // check and assign fully booked
    if (
      room.reservations.length >=
      roomWithSlot.endTimeHr - roomWithSlot.startTimeHr
    ) {
      roomWithSlot.fullyBooked = true;
    }

    // calculate empty slots
    for (
      let i = roomWithSlot.startTimeHr;
      i < roomWithSlot.endTimeHr;
      i += roomWithSlot.reservationIntervalHr
    ) {
      const key = `${i}:00-${i + roomWithSlot.reservationIntervalHr}:00`;

      if (!(key in roomWithSlot.slots)) {
        roomWithSlot.slots[key] = new ReservationSlot({
          id: undefined,
          roomId: room.id,
          room: undefined,
          startTimeHr: i,
          endTimeHr: i + room.reservationIntervalHr,
        });
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
