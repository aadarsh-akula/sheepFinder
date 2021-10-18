import { Link } from "react-router-dom";

function DashboardComponent(props) {
  const jobList = [
    { description: "Bus Driver", key: 0 },
    { description: "Weed Seller", key: 1 },
    { description: "Cocaine Dealer", key: 2 },
    { description: "..............................", key: 3 },

  ];
  return (
    <div className="dashboard_component">
      <div className="dashboard_jobbox">
        <h2>Job List</h2>
        <div className="joblist">
          <div>
          <ol>
          <li>
          Bus Driver
          </li>
          <li>
          Weed Seller
          </li>
          <li>
          Cocaine Dealer
          </li>
          <li>
          .............................
          </li>
          </ol>
          </div>

          <div>
          <ol className="apply_button_ol">
          <li>
          <Link className="button_apply" to="/dashboard" value="Login">
            Apply
          </Link>
          </li>
          <li>
          <Link className="button_apply" to="/dashboard" value="Login">
            Apply
          </Link>
          </li>
          <li>
          <Link className="button_apply" to="/dashboard" value="Login">
            Apply
          </Link>
          </li>
          <li>
          <Link className="button_apply" to="/dashboard" value="Login">
            Apply
          </Link>
          </li>
          </ol>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default DashboardComponent;
