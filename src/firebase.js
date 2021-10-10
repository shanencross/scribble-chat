import { initializeApp } from  'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyButEt3V7rIqKtGfqx-hKWxJAyQOqxJESQ",
//   authDomain: "scribblechat-79a08.firebaseapp.com",
//   projectId: "scribblechat-79a08",
//   storageBucket: "scribblechat-79a08.appspot.com",
//   messagingSenderId: "900613659485",
//   appId: "1:900613659485:web:83a3dafccdab477e1b26b4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);