import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import Swal from "sweetalert2";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    Swal.fire({
      text: `${error?.message ?? ""}`,
      icon: "error",
      confirmButtonColor: "#3B82F6",
    });
  }
};
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const userId = user.uid;
    await set(ref(db, "users/" + userId), {
      uid: userId,
      email,
    });
    return user;
  } catch (err) {
    throw err;
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email, {
      url: process.env.REACT_APP_HOST,
    });
    Swal.fire({
      html: `<p>A password reset link has been sent to <strong>${email}</strong> Please check your email.</p>`,
      icon: "success",
      confirmButtonColor: "#3B82F6",
    });
  } catch (error) {
    Swal.fire({
      text: `${error?.message ?? ""}`,
      icon: "error",
      confirmButtonColor: "#3B82F6",
    });
  }
};
const logout = () => {
  signOut(auth);
};

const saveLink = async (data) => {
  try {
    const { image, tags, text, title } = data;
    console.info({ image, tags, text, title });

    Swal.fire({
      title: "Saved!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#3B82F6",
    });
  } catch (error) {
    Swal.fire({
      text: `${error?.message ?? ""}`,
      icon: "error",
      confirmButtonColor: "#3B82F6",
    });
  }
};
export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  analytics,
  saveLink,
};
