import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-app",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const saveUserData = async (user) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    name: user.displayName || "Anonymous",
    email: user.email || null,
    phone: user.phoneNumber || null,
    profilePic: user.photoURL || null,
    createdAt: new Date(),
  });
};

const isUserRegistered = async (uid) => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists();
};

const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    await saveUserData(result.user);
  } catch (error) {
    console.error("Google Sign-Up Error:", error);
  }
};

const signUpWithEmail = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserData({ ...userCredential.user, displayName });
  } catch (error) {
    console.error("Sign-Up Error:", error);
  }
};

const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const isRegistered = await isUserRegistered(userCredential.user.uid);
    if (!isRegistered) {
      await signOut(auth);
      throw new Error("User is not registered. Please sign up first.");
    }
    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error);
  }
};

const logout = async () => {
  await signOut(auth);
};

export {
  auth,
  db,
  signUpWithGoogle,
  signUpWithEmail,
  loginWithEmail,
  saveUserData,
  isUserRegistered,
  logout,
  onAuthStateChanged
};
