import React from "react";
import { Stack } from "@mui/material";
import MeetingRoomCard from "./Card";
import { MeetingRoomWithSlots } from "../../types";

interface MeetingRoomListProps {
  rooms?: MeetingRoomWithSlots[];
  style?: React.CSSProperties;
}

function MeetingRoomList(props: MeetingRoomListProps) {
  const { rooms, style } = props;

  return (
    <Stack>
      {rooms?.map((room: MeetingRoomWithSlots) => {
        return (
          <MeetingRoomCard
            room={room}
            key={room.id}
            style={{ marginBottom: "1em" }}
            data-test-id="meeting-card"
          />
        );
      })}
    </Stack>
  );
}

export default React.memo(MeetingRoomList);
