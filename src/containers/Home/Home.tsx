import React from "react";
import { Container } from "@mui/material";
import { MeetingRoomsList } from "../../components";

function Home() {
  return (
    <Container>
      <MeetingRoomsList />
    </Container>
  );
}

export default React.memo(Home);
