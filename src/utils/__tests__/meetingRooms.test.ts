import { assert } from "console";
import { meetingRoomsData } from "../../graphql/MeetingRoom/MeetingRooms.mock";
import { mapToMeetingRoomSlots } from "../meetingRooms";

describe("mapToMeetingRoomsWithSlots", () => {
  it("Should fill empty slots", () => {
    const result = mapToMeetingRoomSlots(meetingRoomsData);

    expect(result?.length).toBe(2);
    if (!result) {
      assert(false);
    }
    const res = result ?? [];
    expect(res[0].reservations.length).toBe(1);
    expect(res[0].slots.length).toBe(2);
    expect(res[0].slots.filter((s) => s.userId).length).toBe(1);
    expect(res[0].slots.filter((s) => !s.userId).length).toBe(1);
  });
});
