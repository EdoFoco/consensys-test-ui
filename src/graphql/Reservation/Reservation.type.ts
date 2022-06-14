import { MeetingRoom } from "../MeetingRoom/MeetingRoom.type";

export interface Reservation {
  id: string | undefined;
  roomId: string | undefined;
  room: MeetingRoom | undefined;
  startTimeHr: number | undefined;
  endTimeHr: number | undefined;
}
