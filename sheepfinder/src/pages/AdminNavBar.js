import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "../firebase";

//import { startLoggingOutUser } from "../actions";

function AdminNavBar(props) {
  const [admin, loading1, error1] = useAuthState(auth);
  const [firstname1, setFirstName1] = useState("");
  const [lastname1, setLastName1] = useState("");
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("admins")
        .where("uid", "==", admin?.uid)
        .get();
      const data = await query.docs[0].data();
      setFirstName1(data.firstname1);
      setLastName1(data.lastname1);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading1) return;
    if (!admin) return history.replace("/");
    fetchUserName();
  }, [admin, loading1]);

  return (
    <div className="nav">
      <div className="nav-content">
        {" "}
        <div className="bar">
          <h2>Welcome {firstname1},</h2>
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
      <Link className="button_logout" value="Login" onClick={logout}>
        <h3> Logout</h3>
      </Link>
    </div>
  );
}

export default AdminNavBar;
