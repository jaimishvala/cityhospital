// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwfCgQirP8unH1Tmvi8amxqfWUbFFly2Y",
    authDomain: "cityhospital-edf03.firebaseapp.com",
    projectId: "cityhospital-edf03",
    storageBucket: "cityhospital-edf03.appspot.com",
    messagingSenderId: "415905474609",
    appId: "1:415905474609:web:ecdb7dd909f104b676cd10",
    measurementId: "G-D9GECZD3GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
