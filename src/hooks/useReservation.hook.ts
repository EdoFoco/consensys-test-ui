import { ApolloError, FetchResult, useMutation } from "@apollo/client";
import { CreateReservationResponse, Reservation } from "../graphql/Reservation";
import { CREATE_RESERVATION, DELETE_RESERVATION } from "../graphql/Reservation";
import { GET_MEETING_ROOMS } from "../graphql/MeetingRoom";
import { GET_OR_CREATE_USER } from "../graphql/User";

export interface useCreateReservationResult {
  createReservation(): Promise<FetchResult<CreateReservationResponse>>;
  creating: boolean;
  createError: ApolloError | undefined;
  reservation: Reservation | undefined;
}

export interface UseDeleteReservationResult {
  deleteReservation(): Promise<FetchResult<void>>;
  deleting: boolean;
  deleteError: ApolloError | undefined;
}

export const useCreateReservation = (): useCreateReservationResult => {
  const [createReservation, { data, loading, error }] = useMutation(
    CREATE_RESERVATION,
    {
      refetchQueries: [
        { query: GET_MEETING_ROOMS },
        { query: GET_OR_CREATE_USER },
      ],
    }
  );

  return {
    createReservation,
    creating: loading,
    createError: error,
    reservation: data,
  };
};

export const useDeleteReservation = (): UseDeleteReservationResult => {
  const [deleteReservation, { loading, error }] = useMutation(
    DELETE_RESERVATION,
    {
      refetchQueries: [
        { query: GET_MEETING_ROOMS },
        { query: GET_OR_CREATE_USER },
      ],
    }
  );

  return {
    deleteReservation,
    deleting: loading,
    deleteError: error,
  };
};
