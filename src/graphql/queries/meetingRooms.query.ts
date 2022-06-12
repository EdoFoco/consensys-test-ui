import { gql } from "@apollo/client";

export const MEETING_ROOMS = gql`
  query GetMeetingRooms {
    getMeetingRooms {
      meetingRooms {
        id
        name
        schedulingRules {
          createdAt
        }
        reservations {
          id
          userId
        }
        createdAt
        updatedAt
      }
    }
  }
`;
