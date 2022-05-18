// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGGRyZatYTE0Mt4CQnzesg1RS9nGxbb6g",
  authDomain: "to-do-app-d54a7.firebaseapp.com",
  projectId: "to-do-app-d54a7",
  storageBucket: "to-do-app-d54a7.appspot.com",
  messagingSenderId: "16602423301",
  appId: "1:16602423301:web:e356a4c100daefa1c63c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth = getAuth(app)

export default auth;