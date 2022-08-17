// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdFFdui2L7_AxYjgzOQRW5I2_Lrlg4UDc",
  authDomain: "backendcarrito.firebaseapp.com",
  projectId: "backendcarrito",
  storageBucket: "backendcarrito.appspot.com",
  messagingSenderId: "351233989752",
  appId: "1:351233989752:web:6c9bfe5233e8dcfcde618d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app) 

