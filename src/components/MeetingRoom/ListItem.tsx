import React from "react";
import { ListItem, Paper, Typography, Box } from "@mui/material";
import { MeetingRoomWithSlots } from "../../types";
import { User } from "../../graphql/User";
import SlotButton from "./SlotButton";

interface MeetingRoomCardProps {
  room: MeetingRoomWithSlots;
  currentUser: User;
  createReservation: Function;
  deleteReservation: Function;
  isLoading: Boolean;
  style?: React.CSSProperties;
}

function MeetingRoomCard(props: MeetingRoomCardProps) {
  const {
    room,
    currentUser,
    createReservation,
    deleteReservation,
    isLoading,
    style,
  } = props;

  const sortedSlots = room.slots.sort((a, b) => {
    if (a.startTimeHr && b.startTimeHr) return a.startTimeHr - b.startTimeHr;
    return -1;
  });

  return (
    <ListItem style={style}>
      <Paper elevation={0}>
        <Typography variant="h5" style={{ marginBottom: "0.5em" }}>
          Room - {room.name}
        </Typography>
        <Typography style={{ marginTop: "1em" }}>Reserve a slot</Typography>
        <Box style={{ marginBottom: "2em", marginTop: "1em" }}>
          {sortedSlots.map((s) => {
            return (
              <SlotButton
                data-test-id="slot-button"
                slot={s}
                room={room}
                currentUser={currentUser}
                isLoading={isLoading}
                createReservation={createReservation}
                deleteReservation={deleteReservation}
              />
            );
          })}
        </Box>
      </Paper>
    </ListItem>
  );
}

export default React.memo(MeetingRoomCard);
