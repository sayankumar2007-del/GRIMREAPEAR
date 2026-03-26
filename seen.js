import { db } from "./firebase.js";
import { updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.markSeen = async function(messageId) {
  await updateDoc(doc(db, "messages", messageId), {
    seen: true
  });
};