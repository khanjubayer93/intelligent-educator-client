// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvvjy84qnMYjPCWPfBwjxcUCf44fVfxP8",
    authDomain: "intelligent-educator.firebaseapp.com",
    projectId: "intelligent-educator",
    storageBucket: "intelligent-educator.appspot.com",
    messagingSenderId: "553534616045",
    appId: "1:553534616045:web:b4fecb7985a27003f377e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;