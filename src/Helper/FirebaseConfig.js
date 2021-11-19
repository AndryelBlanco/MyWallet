import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACjZQAKEy_HbUKMuZhiJPorQfqv5eNeRg",
  authDomain: "my-wallet00.firebaseapp.com",
  projectId: "my-wallet00",
  storageBucket: "my-wallet00.appspot.com",
  messagingSenderId: "208213761772",
  appId: "1:208213761772:web:6191e7817e3b6dc311cfc9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
