import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWc2QViuwFLMjEjgCwEPqsFzB1q0DqpVo",
  authDomain: "mi-app-e-commerce-reactjs.firebaseapp.com",
  projectId: "mi-app-e-commerce-reactjs",
  storageBucket: "mi-app-e-commerce-reactjs.appspot.com",
  messagingSenderId: "841840257306",
  appId: "1:841840257306:web:ad88445c15dca4cc75e4a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
