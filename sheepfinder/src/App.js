import "./pages/style.css";
import "./pages/nav.css";
import React, {  } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Container from "react-bootstrap/Container";

import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import Test from "./pages/Test";
import Profile from "./pages/Profile";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/loginform">
            <Container className="container_login">
              <LoginForm />
            </Container>
          </Route>
          <Route exact path="/dashboard">
            <Container className="container_dashboard">
              <Dashboard />
            </Container>
          </Route>
          <Route exact path="/test">
            <Container className="container_dashboard">
              <Test />
            </Container>
          </Route>
          <Route exact path="/profile">
            <Container className="container_dashboard">
              <Profile />
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
