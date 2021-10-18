import { Link } from "react-router-dom";

function DashboardComponent(props) {



  return (
    <div className="dashboard_component">
      
      <div className="dashboard_jobbox">
      <h1 className="title">Job List</h1>
        <div className="joblist_user">
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
