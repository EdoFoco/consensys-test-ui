import { gql } from "@apollo/client";

export const GET_OR_CREATE_USER = gql`
  query Query {
    getCurrentUser {
      user {
        id
        reservations {
          id
          userId
          meetingRoomId
          startTimeHr
          endTimeHr
        }
      }
    }
  }
`;
