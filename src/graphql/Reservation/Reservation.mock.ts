import { MockedResponse } from "@apollo/client/testing";
import { CreateReservationResponse } from ".";
import { CREATE_RESERVATION } from ".";

export const createReservationResponseData: CreateReservationResponse = {
  createReservationForCurrentUser: {
    reservation: {
      id: "xxxx30d8da5-01ce-4cbf-a543-2bee73d29",
      endTimeHr: 18,
      meetingRoom: undefined,
      meetingRoomId: "330d8da5-01ce-4cbf-a543-2bee73d29ded",
      startTimeHr: 17,
      userId: "6808b3c8-c7e3-4fc4-9cf3-c978da9ba607",
    },
  },
};

export const MockedCreateReservationResponse: MockedResponse<CreateReservationResponse>[] =
  [
    {
      request: {
        query: CREATE_RESERVATION,
        variables: {},
      },
      result: {
        data: createReservationResponseData,
      },
    },
  ];
