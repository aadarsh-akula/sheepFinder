import { Link } from "react-router-dom";

function DashboardComponent(props) {
  return (
    <div className="dashboard_component">
      <div className="dashboard_jobbox">
        <h1 className="test_admin_title">Job List</h1>
        <div className="joblist_user">
          <div className="joblist_scroll">
            <ol>
              <li className="test_li">
                1. Bus Driver
                <div>
                  <Link
                    className="button_apply_applied"
                    to="/dashboard"
                    value="Login"
                  >
                    Applied
                  </Link>{" "}
                </div>
              </li>
              <li className="test_li">
                2. Weed Seller
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                3. Cocaine Dealer
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                4. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                5. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                6. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                7. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                8. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                9. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                10. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
              <li className="test_li">
                11. Job title
                <div>
                  <Link className="button_apply" to="/dashboard" value="Login">
                    Apply
                  </Link>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
