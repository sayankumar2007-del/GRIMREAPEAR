// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP7yMRJRIZBv0ILLlwUYmBvv-qzS5mQds",
  authDomain: "shinigami-ef217.firebaseapp.com",
  projectId: "shinigami-ef217",
  storageBucket: "shinigami-ef217.firebasestorage.app",
  messagingSenderId: "626635009376",
  appId: "1:626635009376:web:ce9f654d23864eea218205",
  measurementId: "G-38717BHTFY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);