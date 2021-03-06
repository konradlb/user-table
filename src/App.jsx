import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserDetail from "./components/UserDetail/UserDetail";
import UsersTable from "./components/UsersTable/UsersTable";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={(props) => <UsersTable {...props} />}
          />
          <Route
            path="/user-detail/:id"
            component={(props) => <UserDetail {...props} />}
          />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
