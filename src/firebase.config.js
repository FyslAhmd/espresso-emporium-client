// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWslYAWB0zeQDe4VcJmhJO9JhpZ4tEIu8",
  authDomain: "coffee-store-app-52390.firebaseapp.com",
  projectId: "coffee-store-app-52390",
  storageBucket: "coffee-store-app-52390.firebasestorage.app",
  messagingSenderId: "531168334933",
  appId: "1:531168334933:web:f4cd9bdf3a49ac07a570dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
