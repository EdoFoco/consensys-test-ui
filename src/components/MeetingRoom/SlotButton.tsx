import React from "react";
import { Button } from "@mui/material";
import { MeetingRoomWithSlots, ReservationSlot } from "../../types";
import { User } from "../../graphql/User";

interface SlotButtonProps {
  room: MeetingRoomWithSlots;
  currentUser: User;
  createReservation: Function;
  deleteReservation: Function;
  isLoading: Boolean;
  slot: ReservationSlot;
}

function SlotButton(props: SlotButtonProps) {
  const {
    room,
    currentUser,
    createReservation,
    deleteReservation,
    isLoading,
    slot,
  } = props;

  const [isExecutingAction, setIsExecutingAction] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (isLoading === false) setIsExecutingAction(false);
  }, [isLoading, setIsExecutingAction]);

  const handleClick = (currentUserId: string, slot: ReservationSlot): void => {
    if (slot.userId === currentUserId) {
      setIsExecutingAction(true);
      return deleteReservation({ variables: { reservationId: slot.id! } });
    }
    if (!slot.userId) {
      setIsExecutingAction(true);
      return createReservation({
        variables: {
          reservationInput: {
            userId: currentUser.id,
            meetingRoomId: room.id,
            startTimeHr: slot.startTimeHr,
            endTimeHr: slot.endTimeHr,
          },
        },
      });
    }
  };

  const isSlotDisabled = (
    currentUserId: string,
    slot: ReservationSlot
  ): boolean => {
    if (!slot.userId) return false;
    if (slot.userId === currentUserId) return false;
    return true;
  };

  const userReserved = currentUser.id === slot.userId;
  const isDisabled = isSlotDisabled(currentUser.id, slot);
  const key = `${slot.startTimeHr}:00-${slot.endTimeHr}:00`;
  const status = isDisabled
    ? "disabled"
    : userReserved
    ? "user-reserved"
    : "free";

  return (
    <Button
      key={key}
      data-test-id={`button-${status}`}
      variant={userReserved ? "contained" : "outlined"}
      color={userReserved ? "success" : undefined}
      style={{ marginRight: "0.5em", marginBottom: "0.5em" }}
      onClick={() => handleClick(currentUser.id, slot)}
      disabled={isDisabled}
    >
      {isExecutingAction ? "Loading" : key}
    </Button>
  );
}

export default React.memo(SlotButton);
