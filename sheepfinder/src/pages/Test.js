import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <NavBar />
      <div className="dashboard_component">
      
      <div className="dashboard_jobbox">
            <h1 className="title">Test</h1>
        <div className="joblist_user">
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
            Start
          </Link>
          </li>
          <li>
          <Link className="button_apply" to="/dashboard" value="Login">
            Start
          </Link>
          </li>
          </ol>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
}
/*
<div className="dashboard_component">
        <div>
          <h2 className="test_text">Test</h2>
          <div className="job_test">
            <h4>Cociane Dealer - Personality Test</h4>
            <div className="example">
            <Link className="button_login2" to="/dashboard" value="Login">
            Start
          </Link>
            </div>
            <h4>Cociane Dealer - Aptitude Test</h4>
            <div className="example">
            <Link className="button_login2" to="/dashboard" value="Login">
            Start
          </Link>
            </div>
          </div>
        </div>
      </div> */
export default Profile;
