// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDysX88__-7Bczi9ZsM37mRqoXshlWj4e0",
    authDomain: "sales-tracking-2ffd2.firebaseapp.com",
    projectId: "sales-tracking-2ffd2",
    storageBucket: "sales-tracking-2ffd2.appspot.com",
    messagingSenderId: "548064002495",
    appId: "1:548064002495:web:9999e8502e7b736ebe210a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;