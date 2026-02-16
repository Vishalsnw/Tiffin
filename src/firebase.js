import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbHTfU_LEZRskt9tAXMRT9XRc8nQlDo9E",
  authDomain: "tiffin-ff3cc.firebaseapp.com",
  projectId: "tiffin-ff3cc",
  storageBucket: "tiffin-ff3cc.firebasestorage.app",
  messagingSenderId: "708196896667",
  appId: "1:708196896667:web:8368ff437548aa19481b3e",
  measurementId: "G-M8RGHCE7ZP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
