// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCBHAFKoS0uHnpJJsaTqW7HrvWjjbwj9Xg",
  authDomain: "mikrotik-manufacturer.firebaseapp.com",
  projectId: "mikrotik-manufacturer",
  storageBucket: "mikrotik-manufacturer.appspot.com",
  messagingSenderId: "185882955217",
  appId: "1:185882955217:web:aa4ca0a2050f82c12c64f0",
  measurementId: "G-FTF52QCNQW",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
