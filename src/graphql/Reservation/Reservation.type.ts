import { MeetingRoom } from "../MeetingRoom/MeetingRoom.type";

export interface Reservation {
  id: string | undefined;
  userId: string | undefined;
  meetingRoomId: string | undefined;
  meetingRoom: MeetingRoom | undefined;
  startTimeHr: number | undefined;
  endTimeHr: number | undefined;
}

export interface ReservationInput {
  userId: string;
  meetingRoomId: string;
  startTimeHr: number;
  endTimeHr: number;
}

export interface CreateReservationResponse {
  createReservationForCurrentUser: {
    reservation: Reservation;
  };
}
