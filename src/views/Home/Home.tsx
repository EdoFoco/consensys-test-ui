import React from "react";
import { Alert, CircularProgress, Container, Typography } from "@mui/material";
import { MeetingRoomList } from "../../components/MeetingRoom";
import { useMeetingRooms } from "../../hooks/useMeetingRooms.hook";
import { useCurrentUser } from "../../hooks/useCurrentUser.hook";
import {
  useCreateReservation,
  useDeleteReservation,
} from "../../hooks/useReservation.hook";

function Home() {
  const { roomsLoading, roomsError, rooms } = useMeetingRooms();
  const { userLoading, userError, user } = useCurrentUser();
  const { createReservation, creating, createError } = useCreateReservation();
  const { deleteReservation, deleting, deleteError } = useDeleteReservation();

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (roomsError || userError || createError || deleteError) {
      if (roomsError) setErrorMessage(roomsError.message);
      if (userError) setErrorMessage(userError.message);
      if (createError) setErrorMessage(createError.message);
      if (deleteError) setErrorMessage(deleteError.message);
    }
  }, [roomsError, userError, createError, deleteError, setErrorMessage]);

  if (roomsLoading || userLoading) return <CircularProgress />;

  return (
    <Container>
      {errorMessage ? (
        <Alert
          severity="error"
          onClose={() => {
            setErrorMessage(undefined);
          }}
        >
          <Typography>{errorMessage}</Typography>
        </Alert>
      ) : null}

      {user && (
        <MeetingRoomList
          rooms={rooms}
          currentUser={user!}
          createReservation={createReservation}
          deleteReservation={deleteReservation}
          isLoading={creating || deleting}
        />
      )}
    </Container>
  );
}

export default React.memo(Home);
