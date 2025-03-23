// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDekvohd07lZ70g2lbXcC7xIVSDotQ6jno",
  authDomain: "aimg-website.firebaseapp.com",
  projectId: "aimg-website",
  storageBucket: "aimg-website.firebasestorage.app",
  messagingSenderId: "209583262622",
  appId: "1:209583262622:web:40ff972a3117d9f7eae48f",
  measurementId: "G-PGSGXTP151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);