// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdexSD2gAFscJHRV7AJ1lslyu9q4cwVrA",
  authDomain: "auth-a6acf.firebaseapp.com",
  projectId: "auth-a6acf",
  storageBucket: "auth-a6acf.appspot.com",
  messagingSenderId: "1024045961594",
  appId: "1:1024045961594:web:d4d6c46cacbcfba55186c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
const imgDB = getStorage(app)

export {imgDB};
export default app;