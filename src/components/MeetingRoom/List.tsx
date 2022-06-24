import React from "react";
import { List, Divider } from "@mui/material";
import MeetingRoomCard from "./ListItem";
import { MeetingRoomWithSlots } from "../../types";
import { User } from "../../graphql/User";
import { CreateReservationResponse } from "../../graphql/Reservation";

interface MeetingRoomListProps {
  rooms?: MeetingRoomWithSlots[];
  currentUser: User;
  createReservation(): CreateReservationResponse;
  deleteReservation(): void;
  isLoading: Boolean;
  style?: React.CSSProperties;
}

function MeetingRoomList(props: MeetingRoomListProps) {
  const {
    rooms,
    currentUser,
    createReservation,
    deleteReservation,
    isLoading,
    style,
  } = props;

  return (
    <List
      style={style}
      sx={{ width: "100%", maxWidth: "800px", bgcolor: "background.paper" }}
    >
      {rooms?.map((room: MeetingRoomWithSlots) => {
        return (
          <div key={room.name}>
            <MeetingRoomCard
              room={room}
              style={{ marginTop: "0.5em" }}
              data-test-id="meeting-room-card"
              currentUser={currentUser}
              isLoading={isLoading}
              createReservation={createReservation}
              deleteReservation={deleteReservation}
            />
            <Divider component="li" />
          </div>
        );
      })}
    </List>
  );
}

export default React.memo(MeetingRoomList);
