import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbHTfU_LEZRskt9tAXMRT9XRc8nQlDo9E",
  authDomain: "tiffin-ff3cc.firebaseapp.com",
  projectId: "tiffin-ff3cc",
  storageBucket: "tiffin-ff3cc.firebasestorage.app",
  messagingSenderId: "708196896667",
  appId: "1:708196896667:web:8368ff437548aa19481b3e",
  measurementId: "G-M8RGHCE7ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services (NO analytics)
const auth = getAuth(app);
const db = getFirestore(app);

// Logout helper
export const logout = () => signOut(auth);

// Export everything needed
export {
  app,
  auth,
  db,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  updateDoc,
  doc,
  deleteDoc
};
