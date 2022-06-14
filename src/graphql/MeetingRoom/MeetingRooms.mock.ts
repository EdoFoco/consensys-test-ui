import { MockedResponse } from "@apollo/client/testing";
import { GetMeetingRoomsResponse } from "./MeetingRoom.type";
import { GET_MEETING_ROOMS } from "./MeetingRoom.query";

export const MockMeetingRoomsListResponse: MockedResponse<GetMeetingRoomsResponse>[] =
  [
    {
      request: {
        query: GET_MEETING_ROOMS,
        variables: {},
      },
      result: {
        data: {
          getMeetingRooms: {
            meetingRooms: [
              {
                id: "ffd924c7-0b35-49e4-9e4a-7a70f21efab1",
                name: "C01",
                reservationIntervalHr: 1,
                startTimeHr: 9,
                endTimeHr: 20,
                reservations: [],
                createdAt: "1654979320063",
                updatedAt: "1654979320063",
              },
              {
                id: "93cf8142-6926-42f1-a881-1b3e3f8cb3d6",
                name: "C02",
                reservationIntervalHr: 1,
                startTimeHr: 9,
                endTimeHr: 20,
                reservations: [],
                createdAt: "1654979320063",
                updatedAt: "1654979320063",
              },
            ],
          },
        },
      },
    },
  ];

export const MockMeetingRoomsListErrorResponse: MockedResponse<GetMeetingRoomsResponse>[] =
  [
    {
      request: {
        query: GET_MEETING_ROOMS,
        variables: {},
      },
      error: new Error("An error occurred"),
    },
  ];
