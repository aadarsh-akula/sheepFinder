import "./App.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "yor@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState(""); // catch if detail are correct

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("incorrect email or password");
    }
  };

  const Logout = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div className="App">
      {user.email != "" ? ( //if user and email does not match then we render welcome screen
        <div className="body">
          <div className="nav">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
