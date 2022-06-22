import { MeetingRoomList } from "..";
import TestRenderer from "react-test-renderer";
import { MeetingRoomWithSlots } from "../../../types";
import { MeetingRoom } from "../../../graphql/MeetingRoom";
import { User } from "../../../graphql/User";

const createMeetingRooms = (): MeetingRoomWithSlots[] => {
  return [
    new MeetingRoomWithSlots({ id: "1", name: "C01" } as MeetingRoom),
    new MeetingRoomWithSlots({ id: "2", name: "P01" } as MeetingRoom),
  ];
};

describe("MeetingRoomsList - ", () => {
  it("Should display a list of meeting room cards", async () => {
    const component = TestRenderer.create(
      <MeetingRoomList
        rooms={createMeetingRooms()}
        currentUser={{ id: "1", authId: "1", reservations: [] } as User}
        createReservation={() => {}}
        deleteReservation={() => {}}
        isLoading={false}
      />
    );

    const cards = component.root.findAllByProps({
      "data-test-id": "meeting-room-card",
    });
    expect(cards.length).toBe(2);
  });
});
