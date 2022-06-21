import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress, Container } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import Home from "../Home/Home";

function Layout() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <NavBar
        isAuthenticated={isAuthenticated}
        loginWithRedirect={loginWithRedirect}
        logout={() =>
          logout({ returnTo: process.env.REACT_APP_JWT_LOGOUT_URL })
        }
      />
      <Container style={{ marginTop: "2em" }}>
        {isAuthenticated ? (
          <Home />
        ) : (
          <>
            {isLoading ? (
              <CircularProgress data-test-id="loader" />
            ) : (
              <div data-test-id="unauthorized-view">You need to log in.</div>
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default React.memo(Layout);
