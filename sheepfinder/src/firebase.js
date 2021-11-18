import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABj2IOgPpJGHxUrUyNXtD-IqnzQYT9HiM",
  authDomain: "sheepfinder-001.firebaseapp.com",
  databaseURL: "https://sheepfinder-001-default-rtdb.firebaseio.com",
  projectId: "sheepfinder-001",
  storageBucket: "sheepfinder-001.appspot.com",
  messagingSenderId: "734528788946",
  appId: "1:734528788946:web:cffbce6ed7326bd80b500b",
  measurementId: "G-MG6KE5TM9D",
};

export const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage();

export const auth = app.auth();

export const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (
  firstname,
  lastname,
  email,
  password,
  cpassword,
  YOB,
  phonenumber
) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      firstname,
      lastname,
      authProvider: "local",
      email,
      YOB,
      phonenumber,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  auth.signOut();
};

export default {};
