import NavBar from "./AdminNavBar";
import { Link } from "react-router-dom";

function WeedSeller() {
  return (
    <>
      <NavBar />
      <div className="dashboard_component">
        <div className="test_box2">
          <div className="profile_title">
            <h2 className="test_admin_title">Profile</h2>
          </div>
          <div className="joblist_admin_profile">
            {
              <ol className="first_ol">
                <h3>Jobs you administrate</h3>
                <li>
                  <Link className="active_job2" to="/busdriver" value="Login">
                    Bus Driver
                  </Link>
                </li>
                <li>
                  <Link className="active_job1" to="/weedseller" value="Login">
                    Weed Seller
                  </Link>
                </li>

                <li>Cocaine Dealer</li>
                <div className="adminster_job">
                  <Link
                    className="adminster_job_button"
                    to="/dashboard"
                    value="Login"
                  >
                    Adminster Job
                  </Link>
                </div>
              </ol>
            }
            {
              <ol className="seccond_ol">
                <h3>Job description</h3>
                <li>
                  The cannabis sales rep is a unique position. This is a career
                  that works closely with businesses and all aspects of the
                  marijuana industry. There are sales positions for a variety of
                  third party companies: edibles, flower, concentrates, grow
                  equipment, tinctures, and even marketing companies like
                  Leafbuyer. These companies need to have somebody that can take
                  care of getting their cannabis product available to the
                  consume{" "}
                </li>
                <div className="adminster_job_description_weed">
                  <Link
                    className="adminster_job_button"
                    to="/dashboard"
                    value="Login"
                  >
                    Add description
                  </Link>
                </div>
              </ol>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default WeedSeller;
