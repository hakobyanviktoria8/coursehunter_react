// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth, onAuthStateChanged} from "firebase/auth"
// import {collection, getDocs, getFirestore} from "firebase/firestore"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC-LUsOiAMpugd4Ug6e5MADbYBqHdphiUg",
//   authDomain: "cours-react-be373.firebaseapp.com",
//   projectId: "cours-react-be373",
//   storageBucket: "cours-react-be373.appspot.com",
//   messagingSenderId: "1084101846088",
//   appId: "1:1084101846088:web:415f2dfbb4c46bee13e47d"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });














// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth, onAuthStateChanged} from "firebase/auth"
// import {collection, getDocs, getFirestore} from "firebase/firestore"



// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAmSepSbpQIxto_SqjMd0uLq839dI65MSY",
//   authDomain: "cours-react-5186b.firebaseapp.com",
//   projectId: "cours-react-5186b",
//   storageBucket: "cours-react-5186b.appspot.com",
//   messagingSenderId: "623405795024",
//   appId: "1:623405795024:web:c9767b1ad287901c9e40d5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // const db = getFirestore(app);
// // db.collection('todos').getDocs();
// // const todosCol = collection(db,"todos");
// // const snapshot = await getDocs(todosCol);

// // auth.onAuthStateChanged(user=>{

// // })


// // Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }