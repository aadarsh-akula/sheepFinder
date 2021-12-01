import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {  auth, db, app } from "../firebase";

function Job(props) {
  const jobList = [{ description: "DevOps", key: 0 }];

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  const [user, loading, error] = useAuthState(auth);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [YOB, setYOB] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setFirstName(data.firstname);
      setLastName(data.lastname);
      setEmail(data.email);
      setYOB(data.YOB);
      setPhoneNumber(data.phonenumber);
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
              
    var fr=new FileReader();
    fr.onload=function(){

        resume = fr.result;
                
        for (var i = 0; i < reqs.length; i++) {
                
            if (resume.includes(reqs[i])) {//go through requirements for jobs

                
                score += 5; //increment score
                

            }
            
        }

        alert(score);

        
    }
            
     fr.readAsText(file);//Not entirly sure what this does but DO NOT REMOVE THIS LINE

  };

  return (
        <div className="dashboard_component">
          <div className="dashboard_jobbox">
            <h1 className="test_admin_title">!!!!!!!JOBTITLE!!!!!!!</h1>
            <div className="joblist_user">
              <div className="joblist_scroll">
                <ol>

                    <li>
                        !!!!!!!!!!!!!!!!JOBDESCRIPTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    </li>  
                    
                    <li className="test_li">

                        <div className="user_profile_button1">
                            <input
                                className="button_upload"
                                type="file"
                                onChange={onChange}
                             />
                        </div>
                    </li>

                    <li className="test_li">
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

export default Job;
