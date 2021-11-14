import { Link } from "react-router-dom";
import React, { Component } from "react";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange_color: "",
      msg: "Apply",
    };
    this.apply_onClick = this.apply_onClick.bind(this);
  }

  apply_onClick = (e) => {
    this.setState({
      onChange_color: "lightgreen",
      msg: "Applied",
    });
  };

  // name_onClick = (e) => {
  //   this.setState({
  //     onChange_name: "Applied",
  //   });
  // };

  render() {
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
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                      style={{ backgroundColor: this.state.onChange_color }}
                      onClick={this.apply_onClick}
                    >
                      {this.state.msg}
                    </Link>{" "}
                  </div>
                </li>
                <li className="test_li">
                  2. Weed Seller
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  3. Cocaine Dealer
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  4. Job title
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  5. Job title
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  6. Job title
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  7. Job title
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  8. Job title
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  9. Job title
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  10. Job title
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
                      Apply
                    </Link>
                  </div>
                </li>
                <li className="test_li">
                  11. Job title
                  <div>
                    <Link
                      className="button_apply"
                      to="/dashboard"
                      value="Login"
                    >
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
}

export default DashboardComponent;
