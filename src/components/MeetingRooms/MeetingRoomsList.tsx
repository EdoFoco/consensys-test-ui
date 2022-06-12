import React from "react";
import { useQuery } from "@apollo/client";
import { queries } from "../../graphql";
import { CircularProgress, Container, Typography, Stack } from "@mui/material";
import MeetingRoomCard from "./MeetingRoomCard";
import { MeetingRoom } from "../../graphql/types";

function MeetingRoomList() {
  const { loading, error, data } = useQuery(queries.GET_MEETING_ROOMS);

  if (error) {
    return (
      <Container>
        <Typography>{error.message}</Typography>
      </Container>
    );
  }
  if (loading) {
    return (
      <Container>
        <CircularProgress data-test-id="loader" />
      </Container>
    );
  }

  return (
    <Stack>
      {data.getMeetingRooms?.meetingRooms.map((room: MeetingRoom) => {
        return (
          <MeetingRoomCard
            room={room}
            key={room.id}
            data-test-id="meeting-card"
          />
        );
      })}
    </Stack>
  );
}

export default React.memo(MeetingRoomList);
