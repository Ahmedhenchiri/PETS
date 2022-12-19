// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf6sOklV-I6ILWECO59VVMyld2cbe0MzM",
  authDomain: "huge-915fe.firebaseapp.com",
  projectId: "huge-915fe",
  storageBucket: "huge-915fe.appspot.com",
  messagingSenderId: "590473345228",
  appId: "1:590473345228:web:9f2e825ab6c64059426a69",
  measurementId: "G-7J2JZ3KXG5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
