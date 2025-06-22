// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFayZ45_3b9qB4rDWhBMMPpjrjNPealmc",
  authDomain: "inyas-symposium.firebaseapp.com",
  projectId: "inyas-symposium",
  storageBucket: "inyas-symposium.appspot.com", // <-- fix `.app` to `.appspot.com` if needed
  messagingSenderId: "547037147051",
  appId: "1:547037147051:web:a189082cad06399137acee",
  measurementId: "G-LT3EM4H0LH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
