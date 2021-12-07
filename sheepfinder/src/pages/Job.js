/*
 *
 *derrik branch file added
 *
 */

import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  db,
  app,
  sendApplication,
  appliedJobs,
  doc,
  arrayUnion,
  testingAdding,
} from "../firebase";

function Job(props) {
  const [admin, loading1, error] = useAuthState(auth);
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  const history = useHistory();

  const [user, loading, userError] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [YOB, setYOB] = useState("");

  const [jobName, setJobName] = useState("");

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setEmail(data.email);
      setYOB(data.YOB);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

  const fetchJobName = async () => {
    try {
      const query = await db
        .collection("joblist")
        .where("providerId", "==", admin?.providerId)
        .get();
      const data = await query.docs[0].data();
      setJobName(data.jobname);
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading1) return;
    if (!admin) return history.replace("/");
    fetchJobName();
  }, [admin, loading1]);

  const currentYear = new Date().getFullYear();

  const userYOB = YOB;

  const correctYear = currentYear - userYOB;

  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref("Resumes");
    const fileRef = storageRef.child(file.name);
    console.log(fileRef);
    fileRef.put(file);

    var score = 0; //score
    var resume; //this is the string representation of the resume
    var reqs = ["Java"]; //the requirements the admin set up for the job

    var fr = new FileReader();
    fr.onload = function () {
      resume = fr.result;

      for (var i = 0; i < reqs.length; i++) {
        if (resume.includes(reqs[i])) {
          //go through requirements for jobs

          score += 5; //increment score
        }
      }

      sendApplication(email, score, resume, "QA Intern");
      appliedJobs(email, "QA Intern");
    };

    fr.readAsText(file); //Not entirly sure what this does but DO NOT REMOVE THIS LINE
  };

  const testing = () => {
    doc.update({
      jobName: arrayUnion(jobName),
    });
    testingAdding(jobName);
  };

  return (
    <>
      <div className="job_component">
        <div className="job_jobbox">
          <h1 className="job_title">Upload Resume to Apply</h1>
          <div className="joblist_user">
            <div className="joblist_scroll">
              <ol>
                <p>Please choose file to upload </p>

                <div className="test_li">
                  <div className="resume_upload">
                    <input
                      className="button_upload"
                      type="file"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="return_button_div">
                  <Link
                    className="button_apply"
                    to="/dashboard"
                    value="Login"
                    onClick={() => {
                      //sendApplication();
                      testing();
                    }}
                  >
                    Apply
                  </Link>
                </div>
                <div className="return_button_div">
                  <Link className="return_button" to="/dashboard" value="Login">
                    Return
                  </Link>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
