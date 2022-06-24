import React from "react";
import { act } from "react-dom/test-utils";
import { MockedProvider } from "@apollo/client/testing";
import TestRenderer from "react-test-renderer";
import { wait } from "@testing-library/user-event/dist/utils";
import { MockedResponse } from "@apollo/client/testing/core/mocking/mockLink";
import { useMeetingRooms, useResetMeetingRooms } from "../useMeetingRooms.hook";
import {
  meetingRoomsData,
  MockMeetingRoomsListResponse,
} from "../../graphql/MeetingRoom/MeetingRooms.mock";
import { GetMeetingRoomsResponse } from "../../graphql/MeetingRoom";

describe("UseMeetingRooms - useResetMeetingRooms()", () => {
  const MockComponent = React.memo(() => {
    const { rooms, roomsLoading } = useMeetingRooms();

    if (roomsLoading) return <div data-test-id="loader">Loading..</div>;
    return (
      <div>
        <div data-test-id="rooms-data">{JSON.stringify(rooms)}</div>
      </div>
    );
  });

  it("Should return loading state", async () => {
    const mockedResponse: MockedResponse<GetMeetingRoomsResponse>[] =
      MockMeetingRoomsListResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MockComponent />
      </MockedProvider>
    );

    expect(
      component.root.findByProps({ "data-test-id": "loader" })
    ).not.toBeNull();
  });

  it("Should return meeting rooms", async () => {
    const mockedResponse: MockedResponse<GetMeetingRoomsResponse>[] =
      MockMeetingRoomsListResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MockComponent />
      </MockedProvider>
    );

    await act(async () => await wait(100));

    const content = component.root.findByProps({
      "data-test-id": "rooms-data",
    }).props as any;

    const data = JSON.parse(content.children);

    expect(data.length).toBe(
      meetingRoomsData.getMeetingRooms.meetingRooms.length
    );
  });
});

describe("UseResetMeetingRooms - resetMeetingRooms()", () => {
  const MockComponent = React.memo(() => {
    const { resetMeetingRooms, resetLoading } = useResetMeetingRooms();

    if (resetLoading) return <div data-test-id="loader">Loading..</div>;
    return (
      <button onClick={() => resetMeetingRooms()} data-test-id="reset-button">
        Reset Button
      </button>
    );
  });

  it("Should return loading state", async () => {
    const mockedResponse: MockedResponse<GetMeetingRoomsResponse>[] =
      MockMeetingRoomsListResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MockComponent />
      </MockedProvider>
    );

    act(() => {
      component.root
        .findByProps({ "data-test-id": "reset-button" })
        .props.onClick();
    });

    expect(
      component.root.findByProps({ "data-test-id": "loader" })
    ).not.toBeNull();
  });
});
