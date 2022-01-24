import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_API_KEY,
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
export const githubProvider = new GithubAuthProvider();