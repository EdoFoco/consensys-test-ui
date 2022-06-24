import { Alert, Typography, Button } from "@mui/material";
import React from "react";

interface ResetBarProps {
  resetMeetingRooms: Function;
}

function ResetBar(props: ResetBarProps) {
  const { resetMeetingRooms } = props;

  return (
    <Alert
      severity="info"
      action={
        <Button
          data-test-id="reset-button"
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
