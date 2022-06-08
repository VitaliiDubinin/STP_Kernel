import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeeHE0W6BA68aTBa7juqQ1n2bqN-tauQM",
  authDomain: "login-for-farmer-7e1cb.firebaseapp.com",
  projectId: "login-for-farmer-7e1cb",
  storageBucket: "login-for-farmer-7e1cb.appspot.com",
  messagingSenderId: "59890500455",
  appId: "1:59890500455:web:a02bb553e0dddd032d65c2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
