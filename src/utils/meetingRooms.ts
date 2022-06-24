import { GetMeetingRoomsResponse } from "../graphql/MeetingRoom";
import { MeetingRoomWithSlots, ReservationSlot } from "../types";

export const mapToMeetingRoomSlots = (
  meetingRoomResponse: GetMeetingRoomsResponse | undefined
): MeetingRoomWithSlots[] | undefined => {
  const meetingRoomWithSlots =
    meetingRoomResponse?.getMeetingRooms.meetingRooms.map((room) => {
      const roomWithSlot = new MeetingRoomWithSlots(room);

      // keep track of slots
      const processedSlots: Record<string, ReservationSlot> = {};

      // create a slot for each reservation and add it to the room
      room.reservations.forEach((r) => {
        const key = `${r.startTimeHr}:00-${r.endTimeHr}:00`;
        const slot = new ReservationSlot({ ...r, meetingRoomId: room.id });
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

  return meetingRoomWithSlots ?? undefined;
};
