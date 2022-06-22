// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi74hFBWpP4rvplCiFPrWlV2K928u8qzI",
  authDomain: "expense-tracker-eb41f.firebaseapp.com",
  projectId: "expense-tracker-eb41f",
  storageBucket: "expense-tracker-eb41f.appspot.com",
  messagingSenderId: "1065115467814",
  appId: "1:1065115467814:web:1bb8b4f53842e6e906e6e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)