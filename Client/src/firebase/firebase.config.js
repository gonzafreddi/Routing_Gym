
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAkgHl_yGqZFj3l1QM5I8mJGunCKEvxsY4",
  authDomain: "routinggym.firebaseapp.com",
  projectId: "routinggym",
  storageBucket: "routinggym.appspot.com",
  messagingSenderId: "361352264931",
  appId: "1:361352264931:web:24bd749fcce601a49119d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);