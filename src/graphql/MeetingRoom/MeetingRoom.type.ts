import { Reservation } from "../Reservation/Reservation.type";

export interface MeetingRoom {
  id: string;
  name: string;
  reservationIntervalHr: number;
  startTimeHr: number;
  endTimeHr: number;
  reservations: Reservation[];
}

export interface GetMeetingRoomsResponse {
  getMeetingRooms: {
    meetingRooms: MeetingRoom[];
  };
}
