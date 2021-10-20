import "./pages/style.css";
import "./pages/nav.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Container from "react-bootstrap/Container";

import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import Test from "./pages/Test";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import AdminDashboard from "./pages/AdminDashboard";
import AdminTestEditor from "./pages/AdminTestEditor";
import AdminAdministeredJob from "./pages/AdminAdministeredJob";
import AdminProfile from "./pages/AdminProfile";
import RecoverAccountForm from "./pages/RecoverAccountForm";
import RecoverAccountPrompt from "./pages/RecoverAccountForm";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Container className="container_login">
              <Home />
            </Container>
          </Route>
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
          <Route exact path="/registerform">
            <Container className="container_login">
              <RegisterForm />
            </Container>
          </Route>
          <Route exact path="/admindashboard">
            <Container className="container_dashboard">
              <AdminDashboard />
            </Container>
          </Route>
          <Route exact path="/adminadministeredjob">
            <Container className="container_dashboard">
              <AdminAdministeredJob />
            </Container>
          </Route>
          <Route exact path="/admintesteditor">
            <Container className="container_dashboard">
              <AdminTestEditor />
            </Container>
          </Route>
          <Route exact path="/adminprofile">
            <Container className="container_dashboard">
              <AdminProfile />
            </Container>
          </Route>
          <Route exact path="/recoveraccountform">
            <Container className="container_login">
              <RecoverAccountForm />
            </Container>
          </Route>
          <Route exact path="/recoveraccountprompt">
            <Container className="container_login">
            <RecoverAccountPrompt />
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
