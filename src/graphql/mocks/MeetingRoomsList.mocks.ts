import { GET_MEETING_ROOMS } from "../queries";
import { MockedResponse } from "@apollo/client/testing";
import { GetMeetingRoomsResponse } from "../types";

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
                schedulingRules: [
                  {
                    startPeriod: "1655017200000",
                    endPeriod: "1686553200000",
                    startHour: 9,
                    endHour: 18,
                  },
                ],
                reservations: [],
                createdAt: "1654979320063",
                updatedAt: "1654979320063",
              },
              {
                id: "93cf8142-6926-42f1-a881-1b3e3f8cb3d6",
                name: "C02",
                schedulingRules: [
                  {
                    startPeriod: "1655017200000",
                    endPeriod: "1686553200000",
                    startHour: 9,
                    endHour: 18,
                  },
                ],
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
