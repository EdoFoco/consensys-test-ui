import { Reservation } from "../Reservation/Reservation.type";

export interface MeetingRoom {
  id: string;
  name: string;
  reservationIntervalHr: number;
  startTimeHr: number;
  endTimeHr: number;
  reservations: Reservation[];
  createdAt: string;
  updatedAt: string;
}

export interface GetMeetingRoomsResponse {
  getMeetingRooms: {
    meetingRooms: MeetingRoom[];
  };
}
