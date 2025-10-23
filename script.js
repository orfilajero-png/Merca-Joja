// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNDRpdr9jym_rDvwFEp4XMTx74wFHVrWQ",
  authDomain: "merca-joja.firebaseapp.com",
  projectId: "merca-joja",
  storageBucket: "merca-joja.firebasestorage.app",
  messagingSenderId: "784636335257",
  appId: "1:784636335257:web:0c7bef4ecdcebbba801408",
  measurementId: "G-3H54Q7XQY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);