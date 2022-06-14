import React from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import { MeetingRoomList } from "../../components/MeetingRoom";
import CurrentReservationCard from "../../components/CurrentReservation/Card";
import { useMeetingRoomsData } from "../../hooks/useMeetingRoomsData.hook";
import { useCurrentReservation } from "../../hooks/useCurrentReservation.hook";

function Home() {
  const { roomsLoading, roomsError, rooms } = useMeetingRoomsData();
  const { reservationLoading, reservationError, reservation } =
    useCurrentReservation();

  if (roomsLoading || reservationLoading) return <CircularProgress />;
  if (roomsError || reservationError)
    return (
      <Typography>
        {roomsError
          ? "Error fetching rooms data"
          : "Error fetching reservations"}
      </Typography>
    );

  return (
    <Container>
      <CurrentReservationCard
        reservation={reservation}
        style={{ marginBottom: "1em" }}
      />
      <MeetingRoomList rooms={rooms} />
    </Container>
  );
}

export default React.memo(Home);
