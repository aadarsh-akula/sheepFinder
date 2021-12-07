import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange_color: "",
      msg: "Start",
    };
    this.complete_onClick = this.complete_onClick.bind(this);
  }

  complete_onClick = (e) => {
    this.setState({
      onChange_color: "lightgreen",
      msg: "Complete",
    });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="dashboard_component">
          <div className="dashboard_jobbox">
            <h1 className="test_admin_title">Test</h1>
            <div className="joblist_user">
              <div>
                <ol>
                  <li>DevOps - Personality Test</li>
                  <li>DevOps - Aptitude Test</li>
                </ol>
              </div>

              <div>
                <ol className="apply_button_ol">
                  <li>
                    <Link
                      className="button_apply"
                      to="/personalitytest"
                      value="Login"
                      style={{ backgroundColor: this.state.onChange_color }}
                      onClick={this.complete_onClick}
                    >
                      {this.state.msg}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="button_apply"
                      to="/atributetest"
                      value="Login"
                    >
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
