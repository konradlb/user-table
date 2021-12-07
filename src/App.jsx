import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import UsersTable from "./components/UsersTable/UsersTable";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
        <UsersTable />
        <Footer />
      </Container>
    </>
  );
}

export default App;
