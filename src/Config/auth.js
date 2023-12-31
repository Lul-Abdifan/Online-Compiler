// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo8M-urLfhWoq1tZWbCI5MrV1AS3z2iXo",
  authDomain: "mockinterviewauth.firebaseapp.com",
  projectId: "mockinterviewauth",
  storageBucket: "mockinterviewauth.appspot.com",
  messagingSenderId: "710229479453",
  appId: "1:710229479453:web:e93c8d65fd0cf608ab36f4",
  measurementId: "G-80BQSV8L0C"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();