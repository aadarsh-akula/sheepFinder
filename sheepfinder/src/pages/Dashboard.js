import React from "react";
import NavBar from "./NavBar";
import { withRouter } from "react-router-dom";
import "./style.css";
import "./nav.css";
import DashboardComponent from "./DashboardComponent";

function Dashboard({ history }) {
  /* const authenticated = useSelector((state) => state.authenticated);

  useEffect(() => {
    if (!authenticated) {
      history.push("/");
    }
  });
*/
  return (
    <>
      <NavBar history={history} active="dashboard" />
      <DashboardComponent />
    </>
  );
}

export default withRouter(Dashboard);
