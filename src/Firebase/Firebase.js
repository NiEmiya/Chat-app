import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDkKgtJ0Kb8-kJA5sgZcMnv0Ln7_wPTANI",
  authDomain: "dotes-discord.firebaseapp.com",
  projectId: "dotes-discord",
  storageBucket: "dotes-discord.appspot.com",
  messagingSenderId: "382021405468",
  appId: "1:382021405468:web:3346416a58e5d169b3c8d9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
