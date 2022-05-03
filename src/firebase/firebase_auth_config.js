// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA1IHyQmOZyv90PCojmZXRLfCmMSnuahg",
  authDomain: "auth-user-6a403.firebaseapp.com",
  projectId: "auth-user-6a403",
  storageBucket: "auth-user-6a403.appspot.com",
  messagingSenderId: "146760233977",
  appId: "1:146760233977:web:d633cb87d79b5473400328",
  measurementId: "G-58X9Q9WHE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
