import React from "react";
import { useQuery } from "@apollo/client";
import { queries } from "../../graphql";
import { CircularProgress, Container, Typography, Stack } from "@mui/material";
import MeetingRoomCard from "./MeetingRoomCard";
import { MeetingRoom } from "../../graphql/types";

function MeetingRoomList() {
  const { loading, error, data } = useQuery(queries.MEETING_ROOMS);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <Typography>There was an error.</Typography>
      </Container>
    );
  }

  return (
    <Stack>
      {data.getMeetingRooms?.meetingRooms.map((room: MeetingRoom) => {
        return <MeetingRoomCard room={room} key={room.id} />;
      })}
    </Stack>
  );
}

export default React.memo(MeetingRoomList);
