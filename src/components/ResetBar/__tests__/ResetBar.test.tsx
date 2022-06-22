import ResetBar from "../ResetBar";
import TestRenderer, { act } from "react-test-renderer";

describe("ResetBar - ", () => {
  it("Should call reset meeting rooms function when button is clicked", async () => {
    const resetMeetingRoomFn = jest.fn(() => {});

    const component = TestRenderer.create(
      <ResetBar resetMeetingRooms={resetMeetingRoomFn} />
    );

    const button = component.root.findByProps({
      "data-test-id": "reset-button",
    });

    act(button.props.onClick);

    expect(resetMeetingRoomFn.mock.calls.length).toBe(1);
  });
});
