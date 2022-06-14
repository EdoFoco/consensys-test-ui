import React from "react";
import { Card, Typography } from "@mui/material";
import { Reservation } from "../../graphql/Reservation";

interface CurrentReservationCardProps {
  reservation?: Reservation;
  style?: React.CSSProperties;
}

function CurrentReservation(props: CurrentReservationCardProps) {
  const { reservation, style } = props;

  return (
    <Card style={style}>
      <Typography>hi</Typography>
    </Card>
  );
}

export default React.memo(CurrentReservation);
