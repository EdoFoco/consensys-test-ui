import { Reservation } from "./Reservation.type";
import { SchedulingRule } from "./SchedulingRule.types";

export type MeetingRoom = {
  id: string;
  name: string;
  reservations: Reservation[];
  schedulingRules: SchedulingRule[];
  createdAt: string;
  updatedAt: string;
};

export type GetMeetingRoomsResponse = {
  getMeetingRooms: {
    meetingRooms: MeetingRoom[];
  };
};
