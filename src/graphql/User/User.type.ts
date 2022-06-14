import { GraphQLError } from "graphql";
import { Reservation } from "../Reservation/Reservation.type";

export interface User {
  id: string;
  authId: string;
  reservations: Reservation[];
}

export interface GetCurrentUserResponse {
  getCurrentUser: {
    user: User;
  };
  error: GraphQLError;
}
