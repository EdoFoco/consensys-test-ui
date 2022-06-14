import React from "react";
import { Card, Typography } from "@mui/material";
import { MeetingRoomWithSlots } from "../../types/MeetingRoomWithSlots.type";

interface MeetingRoomCardProps {
  room: MeetingRoomWithSlots;
  style?: React.CSSProperties;
}

function MeetingRoomCard(props: MeetingRoomCardProps) {
  const { room, style } = props;
  return (
    <Card style={style}>
      <Typography variant="h5">{room.name}</Typography>
    </Card>
  );
}

export default React.memo(MeetingRoomCard);
