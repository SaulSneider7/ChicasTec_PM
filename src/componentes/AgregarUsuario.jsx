import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AgregarUsuario() {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");

    const agregarUsuario = async () => {
        try {
            const docRef = await addDoc(collection(db, "usuarios"), {
                nombre: nombre,
                edad: Number(edad),
                fechaRegistro: new Date()
            });
            console.log("Se registo correctamente el usuario")

            setNombre("");
            setEdad("");
        } catch (error) {
            console.log("Error al agregar usuario"); 
        }
    }


    return(
        <div>
            <label htmlFor="">Nombre:</label>
            <input 
                type="text" 
                placeholder="Escribe tu nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}    
            />

            <label htmlFor="">Edad:</label>
            <input 
                type="number" 
                placeholder="Escribe tu edad" 
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />

            <button onClick={agregarUsuario}>Agregar Usuario</button>
        </div>

    )
}

export default AgregarUsuario;