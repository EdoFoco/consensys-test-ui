import { Card, Typography } from "@mui/material";
import React from "react";
import { MeetingRoom } from "../../graphql/types";

type MeetingRoomCardProps = {
  room: MeetingRoom;
};

function MeetingRoomCard(props: MeetingRoomCardProps) {
  const { room } = props;
  return (
    <Card>
      <Typography>{room.name}</Typography>
    </Card>
  );
}

export default React.memo(MeetingRoomCard);
