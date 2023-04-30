
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRC20iaVNSjPExyD_7kP1VelBc12OKtMc",
  authDomain: "crud-img-e6d83.firebaseapp.com",
  projectId: "crud-img-e6d83",
  storageBucket: "crud-img-e6d83.appspot.com",
  messagingSenderId: "92883096396",
  appId: "1:92883096396:web:37c7f265ab98bf682a75e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);