// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnPG_WisstFs6DZPK1_O_FUGi_ztPnQN4",
  authDomain: "portafolio-ce203.firebaseapp.com",
  projectId: "portafolio-ce203",
  storageBucket: "portafolio-ce203.appspot.com",
  messagingSenderId: "71554328410",
  appId: "1:71554328410:web:8531f1f48be94e4d19f563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);