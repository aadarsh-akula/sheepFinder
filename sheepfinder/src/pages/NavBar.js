import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "../firebase";

function NavBar() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="nav">
      <div className="nav-content">
        {" "}
        <div className="bar">
          <p>welcome {name}</p>
          <NavLink
            className="tabs"
            to="/dashboard"
            value="Login"
            activeStyle={{ backgroundColor: "rgba(116,151,168,.5)" }}
          >
            <h3>Dashboard</h3>
          </NavLink>
          <NavLink
            className="tabs"
            to="/test"
            value="Login"
            activeStyle={{ backgroundColor: "rgba(116,151,168,.5)" }}
          >
            <h3>Test</h3>
          </NavLink>
          <NavLink
            className="tabs"
            to="/profile"
            value="Login "
            activeStyle={{ backgroundColor: "rgba(116,151,168,.5)" }}
          >
            <h3> Profile</h3>
          </NavLink>
        </div>
      </div>
      <Link
        className="button_logout"
        to="/loginform"
        value="Login"
        onClick={logout}
      >
        <h3> Logout</h3>
      </Link>
    </div>
  );
}
export default NavBar;
