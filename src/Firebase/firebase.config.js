// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGaOOPo2w_EIKEK4PFg4pbTDUtvT4wvbo",
  authDomain: "dragon-news-de624.firebaseapp.com",
  projectId: "dragon-news-de624",
  storageBucket: "dragon-news-de624.appspot.com",
  messagingSenderId: "93014954569",
  appId: "1:93014954569:web:6e16dcffb126ada5a16598",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
