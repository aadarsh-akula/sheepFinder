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

export const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

export const doc = db.doc("users/0IQruGqfSQAYBzBEEXyc");

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

export const adminSignInWithEmailAndPassword = async (email1, password1) => {
  try {
    await auth.signInWithEmailAndPassword(email1, password1);
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

export const adminRegisterWithEmailAndPassword = async (
  firstname1,
  lastname1,
  email1,
  password1,
  cpassword1,
  phonenumber1,
  companyname
) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email1, password1);
    const admin = res.user;
    await db.collection("admins").add({
      uid: admin.uid,
      firstname1,
      lastname1,
      authProvider: "local",
      email1,
      phonenumber1,
      companyname,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const changeProfileParts = async (
  firstname2,
  lastname2,
  email2,
  YOB2,
  phonenumber2
) => {
  try {
    const res = await auth.currentUser;
    const query = await db
      .collection("users")
      .where("uid", "==", res.uid)
      .get();
    const data = await query.docs[0].id;
    await db.collection("users").doc(data).update({
      firstname: firstname2,
      lastname: lastname2,
      email: email2,
      YOB: YOB2,
      phonenumber: phonenumber2,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const testingAdding = async (jobName) => {
  try {
    const res = await auth.currentUser;
    const query = await db.collection("jobList").get();
    const data = await query.docs[0].id;
    await db.collection("jobList").doc(data).update({
      jobTitle: jobName,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const jobCreation = async (jobname,
  jobdescription,
  keywords,
  Personq1,
  Personq2,
  Personq3,
  Personq4,
  Personq5,
  Aptq1,
  Aptq2,
  Aptq3,
  Aptq4,
  Aptq5,
  Aptq1c1,
  Aptq1c2,
  Aptq1c3,
  Aptq1c4,
  Aptq2c1,
  Aptq2c2,
  Aptq2c3,
  Aptq2c4,
  Aptq3c1,
  Aptq3c2,
  Aptq3c3,
  Aptq3c4,
  Aptq4c1,
  Aptq4c2,
  Aptq4c3,
  Aptq4c4,
  Aptq5c1,
  Aptq5c2,
  Aptq5c3,
  Aptq5c4) => {
  try {
    const res = await auth.currentUser;
    await db.collection("joblist").add({
      jobname,
      jobdescription,
      uid: res.uid,
      keywords,
      Personq1,
      Personq2,
      Personq3,
      Personq4,
      Personq5,
      Aptq1,
      Aptq2,
      Aptq3,
      Aptq4,
      Aptq5,
      Aptq1c1,
      Aptq1c2,
      Aptq1c3,
      Aptq1c4,
      Aptq2c1,
      Aptq2c2,
      Aptq2c3,
      Aptq2c4,
      Aptq3c1,
      Aptq3c2,
      Aptq3c3,
      Aptq3c4,
      Aptq4c1,
      Aptq4c2,
      Aptq4c3,
      Aptq4c4,
      Aptq5c1,
      Aptq5c2,
      Aptq5c3,
      Aptq5c4
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const changeAdminProfileParts = async (
  firstname3,
  lastname3,
  email3,
  companyname,
  phonenumber3
) => {
  try {
    const res = await auth.currentUser;
    const query = await db
      .collection("admins")
      .where("uid", "==", res.uid)
      .get();
    const data = await query.docs[0].id;
    await db.collection("admins").doc(data).update({
      firstname1: firstname3,
      lastname1: lastname3,
      email1: email3,
      companyname: companyname,
      phonenumber1: phonenumber3,
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

//method added from derrik branch
export const sendApplication = async (email, score, resume, jobId) => {

  try {

    await db.collection("applicationList").add({

      email,
      score,
      resume,
      jobId,


    });

  } catch (err) {

    console.error(err);
    alert(err.message);

  }

};

//method added from derrik branch
export const appliedJobs = async (email, jobId) => {

  try {

    await db.collection("userAppliedJobs").add({

      email,
      jobId,

    });

  } catch (err) {

    console.error(err);
    alert(err.message);

  }

}

export const logout = () => {
  auth.signOut();
};

export default {};
