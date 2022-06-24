import { MeetingRoomWithSlots } from "../types";
import {
  GetMeetingRoomsResponse,
  GET_MEETING_ROOMS,
  RESET_MEETING_ROOMS,
} from "../graphql/MeetingRoom";
import { GET_OR_CREATE_USER } from "../graphql/User";
import { useQuery, ApolloError, useMutation } from "@apollo/client";
import { mapToMeetingRoomSlots } from "../utils/meetingRooms";

export interface UseMeetingRoomsResult {
  roomsLoading: boolean;
  roomsError: ApolloError | undefined;
  rooms: MeetingRoomWithSlots[] | undefined;
}

export interface UseResetMeetingRoomsResult {
  resetMeetingRooms: Function;
  resetLoading: boolean;
  resetError: ApolloError | undefined;
}

export const useMeetingRooms = (): UseMeetingRoomsResult => {
  const { loading, error, data } =
    useQuery<GetMeetingRoomsResponse>(GET_MEETING_ROOMS);

  const rooms = mapToMeetingRoomSlots(data);

  return {
    roomsLoading: loading,
    roomsError: error,
    rooms,
  };
};

export const useResetMeetingRooms = (): UseResetMeetingRoomsResult => {
  const [resetMeetingRooms, { loading, error }] = useMutation<void>(
    RESET_MEETING_ROOMS,
    {
      refetchQueries: [
        { query: GET_MEETING_ROOMS },
        { query: GET_OR_CREATE_USER },
      ],
    }
  );

  return {
    resetMeetingRooms,
    resetLoading: loading,
    resetError: error,
  };
};
