import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress, Container } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import Home from "../Home/Home";
import { ResetBar } from "../../components/ResetBar";
import { useResetMeetingRooms } from "../../hooks/useMeetingRooms.hook";
import Unauthenticated from "../Unauthenticated/Unauthenticated";

function Layout() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { resetMeetingRooms } = useResetMeetingRooms();

  return (
    <>
      <NavBar
        data-test-id="navbar"
        isAuthenticated={isAuthenticated}
        loginWithRedirect={loginWithRedirect}
        logout={() =>
          logout({ returnTo: process.env.REACT_APP_JWT_LOGOUT_URL })
        }
      />
      {isAuthenticated && <ResetBar resetMeetingRooms={resetMeetingRooms} />}
      <Container style={{ marginTop: "2em" }}>
        {isAuthenticated ? (
          <Home />
        ) : (
          <>
            {isLoading ? (
              <CircularProgress data-test-id="loader" />
            ) : (
              <Unauthenticated data-test-id="unauthorized-view" />
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default React.memo(Layout);
