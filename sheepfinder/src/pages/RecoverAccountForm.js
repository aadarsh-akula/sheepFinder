import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../firebase";

function RecoverAccountForm() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <form>
      <div className="sheep-body">
        <h1 className="welcome-text">SheepFinder</h1>
        <h1 className="welcome-text">Recover Password</h1>

        <div className="middle-sheep-body">
          <div className="recover_form_background">
            <div>
              <p className="asterik">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="E-mail Address"
              />
            </div>
            <div className="recovering">
              <Link
                className="button_recov"
                to="/RecoverAccountPrompt"
                onClick={() => sendPasswordResetEmail(email)}
              >
                Recover
              </Link>
              <Link className="button_return" to="/LoginForm">
                Return
              </Link>
            </div>
          </div>
        </div>
        <footer>&copy;Copyright 2021</footer>
      </div>
    </form>
  );
}
export default RecoverAccountForm;
