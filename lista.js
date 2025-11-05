import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCNDRpdr9jym_rDvwFEp4XMTx74wFHVrWQ",
    authDomain: "merca-joja.firebaseapp.com",
    projectId: "merca-joja",
    storageBucket: "merca-joja.firebasestorage.app",
    messagingSenderId: "784636335257",
    appId: "1:784636335257:web:0c7bef4ecdcebbba801408",
    measurementId: "G-3H54Q7XQY9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let tabla = document.querySelector(".tabla-estudiantes");

const refEstudiantes = ref(db, "estudiantes");

onValue(refEstudiantes, (datos) => {
    console.log(datos)
    let estudiantes = datos.val();
    tabla.innerHTML = "";
    for (let dni in estudiantes) {
        tabla.innerHTML += `
        <tr>
            <td>${dni}</td>
            <td>${estudiantes[dni].producto}</td>
            <td>${estudiantes[dni].precio}</td>
            <td>${estudiantes[dni].cantidad}</td>
        </tr>
        `;
        
    }

})