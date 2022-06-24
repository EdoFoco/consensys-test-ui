import { MockedResponse } from "@apollo/client/testing";
import { GetCurrentUserResponse } from "./User.type";
import { GET_OR_CREATE_USER } from "./User.query";

export const userData: GetCurrentUserResponse = {
  getCurrentUser: {
    user: {
      authId: "auth0|62a625c2624b9df84676059c",
      id: "6808b3c8-c7e3-4fc4-9cf3-c978da9ba607",
      reservations: [
        {
          id: "6808b3c8-c7e3-4fc4-9cf3-c978da9ba608",
          startTimeHr: 18,
          endTimeHr: 19,
          meetingRoomId: "330d8da5-01ce-4cbf-a543-2bee73d29ded",
          userId: "6808b3c8-c7e3-4fc4-9cf3-c978da9ba607",
          meetingRoom: undefined,
        },
        {
          id: "6808b3c8-c7e3-4fc4-9cf3-c978da9ba609",
          startTimeHr: 18,
          endTimeHr: 19,
          meetingRoomId: "330d8da5-01ce-4cbf-a543-2bee73d29ded",
          userId: "6808b3c8-c7e3-4fc4-9cf3-c978da9ba607",
          meetingRoom: undefined,
        },
      ],
    },
  },
};

export const MockUserResponse: MockedResponse<GetCurrentUserResponse>[] = [
  {
    request: {
      query: GET_OR_CREATE_USER,
      variables: {},
    },
    result: {
      data: userData,
    },
  },
];

// export const MockMeetingRoomsListErrorResponse: MockedResponse<GetMeetingRoomsResponse>[] =
//   [
//     {
//       request: {
//         query: GET_MEETING_ROOMS,
//         variables: {},
//       },
//       error: new Error("An error occurred"),
//     },
//   ];
