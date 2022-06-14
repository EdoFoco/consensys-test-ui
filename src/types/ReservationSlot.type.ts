import { MeetingRoom } from "../graphql/MeetingRoom";
import { Reservation } from "../graphql/Reservation";

export class ReservationSlot implements Reservation {
  id: string | undefined;
  roomId: string | undefined;
  room: MeetingRoom | undefined;
  startTimeHr: number | undefined;
  endTimeHr: number | undefined;
  booked: boolean | undefined;

  constructor(reservation: Reservation, booked?: boolean) {
    this.id = reservation.id;
    this.roomId = reservation.roomId;
    this.room = reservation.room;
    this.startTimeHr = reservation.startTimeHr;
    this.endTimeHr = reservation.endTimeHr;
    this.booked = booked ?? false;
  }
}
