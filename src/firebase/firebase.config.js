// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpoVKU8E_Dgz5t-TZAmOtRgTNnYNA0B_Y",
    authDomain: "concert-service-auth.firebaseapp.com",
    projectId: "concert-service-auth",
    storageBucket: "concert-service-auth.appspot.com",
    messagingSenderId: "576002158473",
    appId: "1:576002158473:web:b0db9edbec1884e98a7b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app