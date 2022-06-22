import { gql } from "@apollo/client";

export const CREATE_RESERVATION = gql`
  mutation Mutation($reservationInput: ReservationInput!) {
    createReservationForCurrentUser(reservationInput: $reservationInput) {
      reservation {
        id
        userId
        meetingRoomId
        startTimeHr
        endTimeHr
      }
    }
  }
`;

export const DELETE_RESERVATION = gql`
  mutation Mutation($reservationId: String!) {
    deleteReservation(reservationId: $reservationId)
  }
`;
