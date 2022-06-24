import SlotButton from "../SlotButton";
import TestRenderer, { act } from "react-test-renderer";
import { MeetingRoomWithSlots } from "../../../types";
import { User } from "../../../graphql/User";
import { wait } from "@testing-library/user-event/dist/utils";

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
        userId: undefined,
        meetingRoomId: "1",
        meetingRoom: undefined,
        booked: false,
      },
      {
        startTimeHr: 9,
        endTimeHr: 10,
        id: "2",
        userId: "2",
        meetingRoomId: "2",
        meetingRoom: undefined,
        booked: true,
      },
      {
        startTimeHr: 11,
        endTimeHr: 12,
        id: "3",
        userId: "1",
        meetingRoomId: "2",
        meetingRoom: undefined,
        booked: true,
      },
    ],
  } as MeetingRoomWithSlots;
};

describe("SlotButton - ", () => {
  it("Should display a free slot button", async () => {
    const room = createMeetingRoom();
    const component = TestRenderer.create(
      <SlotButton
        room={room}
        slot={room.slots[0]}
        currentUser={{ id: "2", authId: "1", reservations: [] } as User}
        createReservation={() => {}}
        deleteReservation={() => {}}
        isLoading={false}
      />
    );

    const button = component.root.findByProps({
      "data-test-id": "button-free",
    });
    expect(button).not.toBe(null);
  });

  it("Should display a disabled slot button if slot has been booked by another user", async () => {
    const room = createMeetingRoom();
    const component = TestRenderer.create(
      <SlotButton
        room={room}
        slot={room.slots[1]}
        currentUser={{ id: "1", authId: "1", reservations: [] } as User}
        createReservation={() => {}}
        deleteReservation={() => {}}
        isLoading={false}
      />
    );

    const button = component.root.findByProps({
      "data-test-id": "button-disabled",
    });
    expect(button).not.toBe(null);
  });

  it("Should display a slot reserved by the current user", async () => {
    const room = createMeetingRoom();
    const component = TestRenderer.create(
      <SlotButton
        room={room}
        slot={room.slots[2]}
        currentUser={{ id: "1", authId: "1", reservations: [] } as User}
        createReservation={() => {}}
        deleteReservation={() => {}}
        isLoading={false}
      />
    );

    const button = component.root.findByProps({
      "data-test-id": "button-user-reserved",
    });
    expect(button).not.toBe(null);
  });

  it("Should call delete reservation", async () => {
    const room = createMeetingRoom();
    const deleteReservation = jest.fn(() => {});
    const createReservation = jest.fn(() => {});

    const component = TestRenderer.create(
      <SlotButton
        room={room}
        slot={room.slots[2]}
        currentUser={{ id: "1", authId: "1", reservations: [] } as User}
        createReservation={createReservation}
        deleteReservation={deleteReservation}
        isLoading={false}
      />
    );

    const button = component.root.findByType("button");
    act(button.props.onClick);

    expect(deleteReservation.mock.calls.length).toBe(1);
    expect(createReservation.mock.calls.length).toBe(0);
  });

  it("Should call create reservation", async () => {
    const room = createMeetingRoom();
    const deleteReservation = jest.fn(() => {});
    const createReservation = jest.fn(() => {});

    const component = TestRenderer.create(
      <SlotButton
        room={room}
        slot={room.slots[0]}
        currentUser={{ id: "1", authId: "1", reservations: [] } as User}
        createReservation={createReservation}
        deleteReservation={deleteReservation}
        isLoading={false}
      />
    );

    const button = component.root.findByType("button");
    act(button.props.onClick);

    expect(createReservation.mock.calls.length).toBe(1);
    expect(deleteReservation.mock.calls.length).toBe(0);
  });
});
