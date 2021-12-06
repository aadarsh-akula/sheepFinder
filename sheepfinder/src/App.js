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
import RecoverAccountPrompt from "./pages/RecoverAccountPrompt";
import ManageUserProfile from "./pages/ManageUserProfile";
import ManageAdminProfile from "./pages/ManageAdminProfile";
import BusDriver from "./pages/BusDriver";
import WeedSeller from "./pages/WeedSeller";
import AdminRegisterForm from "./pages/AdminRegisterForm";
import EditProfile from "./pages/EditProfile";
import AdminLoginForm from "./pages/AdminLoginForm";
import EditAdminProfile from "./pages/editAdminProfile";
import Job from "./pages/Job";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob"
<<<<<<< HEAD
import AtributeTest from "./pages/AtributeTest"
=======
>>>>>>> 299f10e1e6c38ac8b04acff350a3b95961c4a606

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
          <Route exact path="/registerform">
            <Container className="container_login">
              <RegisterForm />
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
          <Route exact path="/atributetest">
            <Container className="container_dashboard">
              <AtributeTest />
            </Container>
          </Route>
          <Route exact path="/createjob">
            <Container className="container_dashboard">
              <CreateJob />
            </Container>
          </Route>
          <Route exact path="/profile">
            <Container className="container_dashboard">
              <Profile />
            </Container>
          </Route>
          <Route exact path="/editprofile">
            <Container className="container_dashboard">
              <EditProfile />
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
          <Route exact path="/editadminprofile">
            <Container className="container_dashboard">
              <EditAdminProfile />
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
          <Route exact path="/manageuserprofile">
            <Container className="container_dashboard">
              <ManageUserProfile />
            </Container>
          </Route>
          <Route exact path="/manageadminprofile">
            <Container className="container_dashboard">
              <ManageAdminProfile />
            </Container>
          </Route>
          <Route exact path="/busdriver">
            <Container className="container_dashboard">
              <BusDriver />
            </Container>
          </Route>
          <Route exact path="/weedseller">
            <Container className="container_dashboard">
              <WeedSeller />
            </Container>
          </Route>
          <Route exact path="/adminregisterform">
            <Container className="container_login">
              <AdminRegisterForm />
            </Container>
          </Route>
          <Route exact path="/adminloginform">
            <Container className="container_login">
              <AdminLoginForm />
            </Container>
          </Route>
          <Route exact path="/job">
            <Container className="container_job">
              <Job />
            </Container>
          </Route>
          <Route exact path="/editjob">
            <Container className="container_dashboard">
              <EditJob />
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
