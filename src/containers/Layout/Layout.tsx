import React from "react";
import { Container } from "@mui/material";
import { NavBar } from "../../components";
import { Home } from "../index";

function Layout() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default React.memo(Layout);
