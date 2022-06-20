import { gql } from "@apollo/client";

export const GET_MEETING_ROOMS = gql`
  query GetMeetingRooms {
    getMeetingRooms {
      meetingRooms {
        id
        name
        reservationIntervalHr
        startTimeHr
        endTimeHr
        reservations {
          id
          userId
          meetingRoomId
          startTimeHr
          endTimeHr
        }
        createdAt
        updatedAt
      }
    }
  }
`;
