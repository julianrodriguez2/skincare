// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMMJxxJzNLbe8WJICTgQOGeGyVfzeD5y8",
  authDomain: "ai-skincare-63607.firebaseapp.com",
  projectId: "ai-skincare-63607",
  storageBucket: "ai-skincare-63607.firebasestorage.app",
  messagingSenderId: "655418981595",
  appId: "1:655418981595:web:01b436cd6c3a57c7b5e0fe",
  measurementId: "G-KVG3L1M4NN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
