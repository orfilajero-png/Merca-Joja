const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";


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

let inputNombre = document.querySelector("#producto");
let inputApellido = document.querySelector("#cantidad");
let inputEdad = document.querySelector("#precio");
let inputDni = document.querySelector("#dni");
let btnAgregar = document.querySelector("#agregar");


btnAgregar.onclick = function () {
    console.log("hola");
    let estudiantesRef = ref(db, 'estudiantes/' + inputDni.value);


    set(estudiantesRef, {
        producto: inputNombre.value,
        cantidad: inputApellido.value,
        precio: inputEdad.value,
    })

        .then(() => {
            alert("Estudiante agregado correctamente");
        })
        .catch((error) => {
            alert("Error al agregar estudiante: " + error.message);
        }); 

}