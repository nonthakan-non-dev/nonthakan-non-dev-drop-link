import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { child, get, getDatabase, ref, remove, set } from "firebase/database";
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
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.uid;
    const timestamp = new Date().getTime();
    if (!user) {
      Swal.fire({
        text: "Access Denied/Forbidden 403",
        icon: "error",
        confirmButtonColor: "#3B82F6",
      });
      return;
    }

    await set(ref(db, `dropLink/${userId}/${timestamp}`), {
      ...data,
      createdAt: timestamp,
    });

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
const getDropLinkData = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.uid;
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, `dropLink/${userId}/`))
      .then((snapshot) => {
        let data = {};
        if (snapshot.exists()) {
          data = snapshot.val();
        }
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
    return Object.values(data).flat();
  } catch (error) {
    throw error;
  }
};
const deleteLink = async (id) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.uid;
    if (!user) {
      Swal.fire({
        text: "Access Denied/Forbidden 403",
        icon: "error",
        confirmButtonColor: "#3B82F6",
      });
      return;
    }

    await remove(ref(db, `dropLink/${userId}/${id}`));

    Swal.fire({
      title: "Deleted!",
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
  getDropLinkData,
  deleteLink
};
