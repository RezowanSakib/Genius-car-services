// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADB_7ihXUfEXkjDbDITIl5SgOA2A-g8FY",
  authDomain: "genius-car-service-73641.firebaseapp.com",
  projectId: "genius-car-service-73641",
  storageBucket: "genius-car-service-73641.appspot.com",
  messagingSenderId: "717255726037",
  appId: "1:717255726037:web:e65b4af175b52526bca35c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
