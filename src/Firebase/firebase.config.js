// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk92j_GTZXo7K9ewW0OOST7ZaCxNQZrzA",
  authDomain: "email-password-login-5b9f7.firebaseapp.com",
  projectId: "email-password-login-5b9f7",
  storageBucket: "email-password-login-5b9f7.appspot.com",
  messagingSenderId: "714574408313",
  appId: "1:714574408313:web:f6af2269a6b6df3214c2a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;