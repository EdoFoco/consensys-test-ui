import React from "react";
import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";

interface Credential {
  id: number;
  email: string;
  password: string;
}
const rows: Credential[] = [
  { id: 1, email: "bob@test.com", password: "Password123!" },
  { id: 2, email: "jack@test.com", password: "Password123!" },
  { id: 3, email: "giulia@test.com", password: "Password123!" },
  { id: 4, email: "tina@test.com", password: "Password123!" },
  { id: 5, email: "frank@test.com", password: "Password123!" },
];

function Unauthenticated() {
  return (
    <>
      <Typography variant="h2" style={{ marginBottom: "1rem" }}>
        Hello,
      </Typography>
      <Typography variant="h5">
        Log in to access the meeting room booking system
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 500 }}
        style={{ marginTop: "2rem" }}
      >
        <Table sx={{ maxWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.password}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default React.memo(Unauthenticated);
