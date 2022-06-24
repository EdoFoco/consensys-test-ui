import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface NavbarProps {
  isAuthenticated: boolean;
  loginWithRedirect: Function;
  logout: Function;
}

function NavBar(props: NavbarProps) {
  const { isAuthenticated, loginWithRedirect, logout } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Meeting Rooms
        </Typography>
        {isAuthenticated ? (
          <Button
            data-test-id="logout-button"
            color="inherit"
            onClick={() => logout()}
          >
            Logout
          </Button>
        ) : (
          <Button
            data-test-id="login-button"
            color="inherit"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(NavBar);
