import React from "react";
import { Link, NavLink } from "react-router-dom";

//import { startLoggingOutUser } from "../actions";

function AdminNavBar(props) {
  return (
    <div className="nav">
      <div className="nav-content">
        {" "}
        <div className="bar">
          <h2>Welcome Admin</h2>
          <NavLink
            className="tabs"
            to="/admindashboard"
            value="Login"
            activeStyle={{ backgroundColor: "rgba(116,151,168,.5)" }}
          >
            <h3>Dashboard</h3>
          </NavLink>
          <NavLink
            className="tabs"
            to="/admintesteditor"
            value="Login"
            activeStyle={{ backgroundColor: "rgba(116,151,168,.5)" }}
          >
            <h3>Test Editor</h3>
          </NavLink>
          <NavLink
            className="tabs"
            to="/adminadministeredjob"
            value="Login "
            activeStyle={{ backgroundColor: "rgba(116,151,168,.5)" }}
          >
            <h3> Administer Job</h3>
          </NavLink>
          <NavLink
            className="tabs"
            to="/adminprofile"
            value="Login "
            activeStyle={{ backgroundColor: "rgba(116,151,168,.5)" }}
          >
            <h3> Profile</h3>
          </NavLink>
        </div>
      </div>
      <Link className="button_logout" to="/loginform" value="Login">
        <h3> Logout</h3>
      </Link>
    </div>
  );
}

export default AdminNavBar;
