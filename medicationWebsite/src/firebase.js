import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmgUOmlz7ug-3p5KKIkM1TXVKXf-wPP3k",
  authDomain: "medication-app-55484.firebaseapp.com",
  databaseURL: "https://medication-app-55484-default-rtdb.firebaseio.com",
  projectId: "medication-app-55484",
  storageBucket: "medication-app-55484.firebasestorage.app",
  messagingSenderId: "755429458489",
  appId: "1:755429458489:web:5742c8cf433fdf93a503e8",
  measurementId: "G-CNRSBFKXFN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const saveUserData = async (data) => {
  const userRef = doc(db, "users", data.uid);
  await setDoc(userRef, data);
};

export { auth, db, saveUserData, googleProvider, onAuthStateChanged };