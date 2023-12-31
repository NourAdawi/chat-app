import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANz3n8gNBXkc3gRigKQxgZbHHCl00iY3w",
  authDomain: "chat-app-9cf95.firebaseapp.com",
  projectId: "chat-app-9cf95",
  storageBucket: "chat-app-9cf95.appspot.com",
  messagingSenderId: "235979072018",
  appId: "1:235979072018:web:1d20c31921779b97b2eecb",
  measurementId: "G-YE3SY0LDY0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
