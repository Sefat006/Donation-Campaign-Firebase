// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMy8lC1zfUY_DrErQck55yCoEmxcjWNKw",
  authDomain: "donation-campaign-firebase.firebaseapp.com",
  projectId: "donation-campaign-firebase",
  storageBucket: "donation-campaign-firebase.firebasestorage.app",
  messagingSenderId: "261653205566",
  appId: "1:261653205566:web:edaeb39f7c17d7f178b76f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;