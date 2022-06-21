import { Alert, Typography, Button, AlertTitle } from "@mui/material";
import React from "react";

interface ResetBarProps {
  resetMeetingRooms: Function;
  loading: boolean;
}

function ResetBar(props: ResetBarProps) {
  const { resetMeetingRooms, loading } = props;

  return (
    <Alert
      severity="info"
      action={
        <Button
          color="inherit"
          size="small"
          onClick={() => resetMeetingRooms()}
        >
          Reset Database
        </Button>
      }
    >
      <Typography>Click on the button to reset the database.</Typography>
    </Alert>
  );
}

export default React.memo(ResetBar);
