import { ApolloError, useQuery } from "@apollo/client";
import { GET_OR_CREATE_USER, GetCurrentUserResponse } from "../graphql/User";
import { Reservation } from "../graphql/Reservation";
import { User } from "../graphql/User";

export interface UseCurrentUserResult {
  userLoading: boolean;
  userError: ApolloError | undefined;
  user: User | undefined;
  reservation: Reservation | undefined;
}

export const useCurrentUser = (): UseCurrentUserResult => {
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
    userLoading: loading,
    userError: error,
    user: data?.getCurrentUser.user,
    reservation,
  };
};
