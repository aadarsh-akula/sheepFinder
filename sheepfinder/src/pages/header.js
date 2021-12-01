import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import database from "../firebase";
import "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";

function RegisterForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setCPassword("");
  };
}
