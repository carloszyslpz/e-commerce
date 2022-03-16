import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGgRu5azlv6X8WDB_ouSRTuhlT0JlSrpk",
  authDomain: "proyecto-react-js-4de72.firebaseapp.com",
  projectId: "proyecto-react-js-4de72",
  storageBucket: "proyecto-react-js-4de72.appspot.com",
  messagingSenderId: "787265750311",
  appId: "1:787265750311:web:a7338cd10c4799794a5502",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
