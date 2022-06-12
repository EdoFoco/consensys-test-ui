import { gql } from "@apollo/client";

export const GET_MEETING_ROOMS = gql`
  query GetMeetingRooms {
    getMeetingRooms {
      meetingRooms {
        id
        name
        schedulingRules {
          startPeriod
          endPeriod
          startHour
          endHour
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
