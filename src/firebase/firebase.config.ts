import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA2MObIRiuA_nbIYs_RV8Uwu4BoIvoC5Wg",
  authDomain: "dutruch-b37c9.firebaseapp.com",
  databaseURL: "https://dutruch-b37c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dutruch-b37c9",
  storageBucket: "dutruch-b37c9.appspot.com",
  messagingSenderId: "1095601105968",
  appId: "1:1095601105968:web:f6cd69ed42144631e951f5"
};

// Vérifier si Firebase a déjà été initialisé
let app: FirebaseApp; // Typage explicite de `app`
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
