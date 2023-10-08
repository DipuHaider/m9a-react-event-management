// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCVkVAFIc7vMRCZtsZTZQ_JqRedDWJAek",
  authDomain: "m9a-react-event-management.firebaseapp.com",
  projectId: "m9a-react-event-management",
  storageBucket: "m9a-react-event-management.appspot.com",
  messagingSenderId: "727422282733",
  appId: "1:727422282733:web:c3405f256faedc4a2095e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
