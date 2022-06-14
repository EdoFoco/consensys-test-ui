import { act } from "react-dom/test-utils";
import MeetingRoomsList from "../List";
import { MockedProvider } from "@apollo/client/testing";
import TestRenderer from "react-test-renderer";
import { mocks } from "../../../graphql";
import { wait } from "@testing-library/user-event/dist/utils";
import { GetMeetingRoomsResponse, MeetingRoom } from "../../../graphql/types";
import { MockedResponse } from "@apollo/client/testing/core/mocking/mockLink";
import { FetchResult } from "@apollo/client";

describe("MeetingRoomsList - ", () => {
  it("Should show a loader while loading", async () => {
    const mockedResponse: MockedResponse<GetMeetingRoomsResponse>[] =
      mocks.MockMeetingRoomsListResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MeetingRoomsList />
      </MockedProvider>
    );

    expect(
      component.root.findByProps({ "data-test-id": "loader" })
    ).not.toBeNull();
  });

  it("Should show an error message when an error occurs", async () => {
    const mockedResponse: MockedResponse<GetMeetingRoomsResponse>[] =
      mocks.MockMeetingRoomsListErrorResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MeetingRoomsList />
      </MockedProvider>
    );

    await act(async () => await wait(100));

    const element = component.root.findByType("p");
    expect(element.props.children).toContain(mockedResponse[0].error?.message);
  });

  it("Should show a list of rooms", async () => {
    const mockedResponse: MockedResponse<GetMeetingRoomsResponse>[] =
      mocks.MockMeetingRoomsListResponse;

    const component = TestRenderer.create(
      <MockedProvider mocks={mockedResponse} addTypename={false}>
        <MeetingRoomsList />
      </MockedProvider>
    );

    await act(async () => await wait(100));

    const elements = component.root.findAllByProps({
      "data-test-id": "meeting-card",
    });

    /* Todo: Find a better way of casting this. */
    const response = mockedResponse[0].result as FetchResult;
    const castedResponse = response.data as GetMeetingRoomsResponse;
    expect(elements.length).toBe(
      castedResponse.getMeetingRooms.meetingRooms.length
    );
  });
});
