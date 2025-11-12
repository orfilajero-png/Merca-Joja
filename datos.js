import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCNDRpdr9jym_rDvwFEp4XMTx74wFHVrWQ",
    authDomain: "merca-joja.firebaseapp.com",
    databaseURL: "https://merca-joja-default-rtdb.firebaseio.com",
    projectId: "merca-joja",
    storageBucket: "merca-joja.firebasestorage.app",
    messagingSenderId: "784636335257",
    appId: "1:784636335257:web:0c7bef4ecdcebbba801408",
    measurementId: "G-3H54Q7XQY9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let parrafo = document.querySelector("p");

const refDatos = ref(db, "estudiantes");

onValue(refDatos, (snapshot) => {
    console.log(snapshot.val())
    let estudiantes = snapshot.val()
    parrafo.textContent = `El producto ${estudiantes[dni].producto} tiene un precio estimado de ${estudiantes[dni].precio}`
    
})