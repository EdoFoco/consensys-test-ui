import { MeetingRoom } from "../graphql/MeetingRoom";
import { Reservation } from "../graphql/Reservation";
import { ReservationSlot } from "./ReservationSlot.type";

export class MeetingRoomWithSlots implements MeetingRoom {
  id: string;
  name: string;
  reservationIntervalHr: number;
  startTimeHr: number;
  endTimeHr: number;
  reservations: Reservation[];
  slots: ReservationSlot[];
  createdAt: string;
  updatedAt: string;
  fullyBooked: boolean;

  constructor(meetingRoom: MeetingRoom) {
    this.id = meetingRoom.id;
    this.name = meetingRoom.name;
    this.reservationIntervalHr = meetingRoom.reservationIntervalHr;
    this.startTimeHr = meetingRoom.startTimeHr;
    this.endTimeHr = meetingRoom.endTimeHr;
    this.reservations = meetingRoom.reservations;
    this.slots = [];
    this.createdAt = meetingRoom.createdAt;
    this.updatedAt = meetingRoom.updatedAt;
    this.fullyBooked = false;
  }
}
