// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtSUjIYrC9mY_mBFqKpKb8WlRbtNQwXBQ",
  authDomain: "shops-10626.firebaseapp.com",
  projectId: "shops-10626",
  storageBucket: "shops-10626.appspot.com",
  messagingSenderId: "1047457969904",
  appId: "1:1047457969904:web:46a13aba5356a82273b435",
  measurementId: "G-H981LXC2P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);