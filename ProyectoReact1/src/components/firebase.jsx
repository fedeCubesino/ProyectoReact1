
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyA-rLN3K2T6UVGj94bR7AynCeY58fz4rEw",
  authDomain: "sragliareact.firebaseapp.com",
  projectId: "sragliareact",
  storageBucket: "sragliareact.appspot.com",
  messagingSenderId: "348984936810",
  appId: "1:348984936810:web:7f84e27f6b8641f7b2fd13"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);