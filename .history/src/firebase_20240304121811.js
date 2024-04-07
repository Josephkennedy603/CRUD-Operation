// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6ZR0S_52AlqGIUs87cyuSaj7Dp9EP9nk",
  authDomain: "crud-operation-7754e.firebaseapp.com",
  projectId: "crud-operation-7754e",
  storageBucket: "crud-operation-7754e.appspot.com",
  messagingSenderId: "941097712371",
  appId: "1:941097712371:web:aad3664dddf0ff5721d586",
  measurementId: "G-CM49X6XD0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
