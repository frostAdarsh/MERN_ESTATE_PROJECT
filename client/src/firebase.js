// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5defb.firebaseapp.com",
  projectId: "mern-estate-5defb",
  storageBucket: "mern-estate-5defb.appspot.com",
  messagingSenderId: "412035395061",
  appId: "1:412035395061:web:5eb4dbced1365c69b204bc"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);