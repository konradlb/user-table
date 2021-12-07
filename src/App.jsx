import React from "react";
// import "react-router-d";
import { Container } from "react-bootstrap";

import UsersTable from "./components/UsersTable/UsersTable";
import TableHeader from "./components/UsersTable/TableHeader";

function App() {
  return (
    <>
      <Container>
        <TableHeader />

        <UsersTable />
      </Container>
    </>
  );
}

export default App;
