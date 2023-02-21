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
  apiKey: "AIzaSyA4zXL_WlXqbrXsZoIzn6epj_SEfMX2oMk",
  authDomain: "nonthakan-non-dev-drop-link.firebaseapp.com",
  databaseURL:
    "https://nonthakan-non-dev-drop-link-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nonthakan-non-dev-drop-link",
  storageBucket: "nonthakan-non-dev-drop-link.appspot.com",
  messagingSenderId: "508287155468",
  appId: "1:508287155468:web:54d4cd99e6d4e383f55d29",
  measurementId: "G-ES94NJVWE2",
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
      url: "https://nonthakan-non-dev-drop-link.web.app/",
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
export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  analytics,
};
