import { Reservation } from "./Reservation.type";

export type MeetingRoom = {
  id: string;
  name: string;
  reservation: [Reservation];
};
