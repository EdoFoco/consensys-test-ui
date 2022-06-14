import { useQuery } from "@apollo/client";
import { GET_OR_CREATE_USER, GetCurrentUserResponse } from "../graphql/User";
import { Reservation } from "../graphql/Reservation";

export const useCurrentReservation = () => {
  const { loading, error, data } =
    useQuery<GetCurrentUserResponse>(GET_OR_CREATE_USER);

  let reservation: Reservation | undefined = undefined;
  if (
    data?.getCurrentUser.user.reservations &&
    data?.getCurrentUser.user.reservations.length > 0
  ) {
    reservation = data?.getCurrentUser.user.reservations[0];
  }

  return {
    reservationLoading: loading,
    reservationError: error,
    reservation,
  };
};
