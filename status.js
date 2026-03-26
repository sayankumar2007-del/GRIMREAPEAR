import { db, auth } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

auth.onAuthStateChanged(async (user) => {
  if (user) {
    await setDoc(doc(db, "users", user.uid), {
      online: true
    });
  }
});

window.addEventListener("beforeunload", async () => {
  const user = auth.currentUser;
  if (user) {
    await setDoc(doc(db, "users", user.uid), {
      online: false
    });
  }
});