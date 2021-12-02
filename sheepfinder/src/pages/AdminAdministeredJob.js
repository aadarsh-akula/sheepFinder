import NavBar from "./AdminNavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db, jobCreation } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
//import {getDocs} from "firebase.firestore.Firestore";

function AdminAdministeredJob() {
  const [user, loading, error] = useAuthState(auth);
  // const [jobName, setJobName] = useState("");
  const [jobName, setName] = useState("");
  const [pjobDesc, setDesc] = useState("");

  const createJob = async () => {
    //await db.collection( "applicantionList",{jobName: newTitle, jobDesc: newDesc});
    await jobCreation(jobName, pjobDesc);
  };

  /*
const data = {
  jobName: newTitle, jobDesc: newDesc
}

const res =  db.collection('applicationList').set(data);

*/
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
                =<h3>Jobs you administrate</h3>
                <li>
                  <Link className="active_job1" to="/busdriver" value="Login">
                    {jobName}
                  </Link>
                </li>
                <li>
                  <Link className="active_job2" to="/weedseller" value="Login">
                    Weed Seller
                  </Link>
                </li>
                <li>Cocaine Dealer</li>
                <div className="adminster_job">
                  Create a new job
                  <input
                    placeholder="Type Job Title"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Paste Job Description"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  />
                  <button onClick={createJob}> Post! </button>
                </div>
              </ol>
            }
            {
              <ol className="seccond_ol">
                <h3>Job description</h3>
                <li>
                  Student Transit takes the responsibility of transporting the
                  world's most precious cargo seriously. We employ individuals
                  with integrity who possess the ability to be trusted to make
                  decisions without supervision. We expect you to take pride in
                  your job, care of our equipment, and precautions for safety.
                  Excellent part-time jobs! Competitive Hourly Pay 401K Weekends
                  and Holidays Off Optional Summer Work On-Site Fitness Room
                  School Bus driver Do you have a good driving record? Student
                  Transit, the state of Wisconsin, and our insurance carrier
                  require it. Would you like your summers, weekends, and
                  holidays off with your children? Would you like to save money
                  on day care costs by bringing your own children with you on
                  the route? Become a school bus driver! Under general
                  supervision, school bus drivers transport passengers safely
                  between assigned stops and schools according to specified
                  routes and time schedules. They may transport students and
                  adults on field trips and outings. Bus drivers always maintain
                  order during trips and adhere to safety rules when loading and
                  unloading passengers.{" "}
                </li>
                <div className="adminster_job_description">
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

export default AdminAdministeredJob;
