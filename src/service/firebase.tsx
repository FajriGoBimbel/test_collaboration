import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgczpQnCUO6JlXKv2CbsZ1a08zKmFG-nU",
  authDomain: "login-a476a.firebaseapp.com",
  projectId: "login-a476a",
  storageBucket: "login-a476a.appspot.com",
  messagingSenderId: "246066112297",
  appId: "1:246066112297:web:5b61e290ff5f49b51d7938",
  measurementId: "G-1R993HY5SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider}