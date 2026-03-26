import { db, auth } from "./firebase.js";
import { collection, addDoc, onSnapshot, query, orderBy } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const chatBox = document.getElementById("chatBox");

const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, (snapshot) => {
  chatBox.innerHTML = "";
  snapshot.forEach(doc => {
    let data = doc.data();

    let div = document.createElement("div");
    div.innerText = data.text;
    chatBox.appendChild(div);
  });
});

window.sendMessage = async function () {
  let input = document.getElementById("msg");

  await addDoc(collection(db, "messages"), {
    text: input.value,
    user: auth.currentUser.uid,
    time: Date.now()
  });

  input.value = "";
};