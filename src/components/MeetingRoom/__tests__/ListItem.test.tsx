import { MeetingRoomCard } from "..";
import TestRenderer from "react-test-renderer";
import { MeetingRoomWithSlots } from "../../../types";
import { User } from "../../../graphql/User";

const createMeetingRoom = (): MeetingRoomWithSlots => {
  return {
    id: "1",
    reservations: [],
    name: "C01",
    reservationIntervalHr: 1,
    startTimeHr: 9,
    endTimeHr: 10,
    slots: [
      {
        startTimeHr: 10,
        endTimeHr: 11,
        id: "1",
        userId: "1",
        meetingRoomId: "1",
        meetingRoom: undefined,
        booked: false,
      },
      {
        startTimeHr: 9,
        endTimeHr: 10,
        id: "2",
        userId: "2",
        meetingRoomId: "1",
        meetingRoom: undefined,
        booked: false,
      },
    ],
  } as MeetingRoomWithSlots;
};

describe("MeetingRoomCard - ", () => {
  it("Should display list of slots", async () => {
    const component = TestRenderer.create(
      <MeetingRoomCard
        room={createMeetingRoom()}
        currentUser={{ id: "1", authId: "1", reservations: [] } as User}
        createReservation={() => {}}
        deleteReservation={() => {}}
        isLoading={false}
      />
    );

    const slots = component.root.findAllByProps({
      "data-test-id": "slot-button",
    });
    expect(slots.length).toBe(2);
  });
});
