import React from "react";
import { Link } from "react-router-dom";

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
          <Link className="tabs" to="/dashboard" value="Login">
            <h3>Dashboard</h3>
          </Link>
          <Link className="tabs" to="/test" value="Login">
            <h3>Test</h3>
          </Link>
          <Link className="tabs" to="/profile" value="Login">
            <h3> Profile</h3>
          </Link>
        </div>
      </div>
      <Link className="button_logout" to="/loginform" value="Login">
        <h3> Logout</h3>
      </Link>
    </div>
  );
}

export default NavBar;
