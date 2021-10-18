import React from "react";
import { Link, NavLink } from "react-router-dom";

//import { startLoggingOutUser } from "../actions";




function NavBar(props) {
  /* const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
 
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(startLoggingOutUser(props.history));
  }; */

  return (
    <div className="nav">
      <div className="nav-content">
        {" "}
        <div className="bar">
          <h2>Welcome Yor Her</h2>
          <NavLink className="tabs" to="/dashboard" value="Login" activeStyle={{backgroundColor: "rgb(116,151,168)"}}>
            <h3>Dashboard</h3>
          </NavLink>
          <NavLink className="tabs" to="/test" value="Login" activeStyle={{backgroundColor: "rgb(116,151,168)"}}>
            <h3>Test</h3>
          </NavLink>
          <NavLink className="tabs" to="/profile" value="Login " activeStyle={{backgroundColor: "rgb(116,151,168)"}}>
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

export default NavBar;
