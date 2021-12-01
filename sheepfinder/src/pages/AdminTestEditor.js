import NavBar from "./AdminNavBar";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <NavBar />
      <div className="dashboard_component">
      <div className="dashboard_jobbox">
            <h1 className="test_admin_title">Test</h1>
        <div className="joblist_admin">
          <div>
          <ol>
          <li>
          Cociane Dealer - Personality Test
          </li>
          <li>
          Cociane Dealer - Aptitude Test
          </li>
          </ol>
          </div>

          <div>
          <ol className="apply_button_ol">
          <li>
          <Link className="button_apply" to="/dashboard" value="Login">
            Edit
          </Link>
          
          <Link className="button_apply" to="/dashboard" value="Login">
            Send
          </Link>
          </li>
          <li>
          <Link className="button_apply" to="/dashboard" value="Login">
            Edit
          </Link>
          <Link className="button_apply" to="/dashboard" value="Login">
            Send
          </Link>
          </li>
          </ol>
          </div>
          
        </div>
        <div className="joblist_admin_add">
        <Link className="button_add" to="/dashboard" value="Login">
            Add
          </Link>
        </div>
        
      </div>
      </div>
    </>
  );
}

export default Profile;
