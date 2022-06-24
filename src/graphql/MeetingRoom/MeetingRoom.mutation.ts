import { gql } from "@apollo/client";

export const RESET_MEETING_ROOMS = gql`
  mutation Mutation {
    resetMeetingRooms
  }
`;
