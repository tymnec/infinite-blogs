// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoU2NvNFWKjm4VpPNDzBjIuGC6aS3X6Rg",
  authDomain: "infinite-blogs.firebaseapp.com",
  projectId: "infinite-blogs",
  storageBucket: "infinite-blogs.appspot.com",
  messagingSenderId: "164021084738",
  appId: "1:164021084738:web:2bf67d39c56945120103db",
  measurementId: "G-X75NJCYHVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
