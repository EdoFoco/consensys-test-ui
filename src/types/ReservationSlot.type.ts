import { MeetingRoom } from "../graphql/MeetingRoom";
import { Reservation } from "../graphql/Reservation";

export class ReservationSlot implements Reservation {
  id: string | undefined;
  userId: string | undefined;
  meetingRoomId: string | undefined;
  meetingRoom: MeetingRoom | undefined;
  startTimeHr: number | undefined;
  endTimeHr: number | undefined;

  constructor(reservation: Reservation, booked?: boolean) {
    this.id = reservation.id;
    this.userId = reservation.userId;
    this.meetingRoom = reservation.meetingRoom;
    this.startTimeHr = reservation.startTimeHr;
    this.endTimeHr = reservation.endTimeHr;
  }
}
