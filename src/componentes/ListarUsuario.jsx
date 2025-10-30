import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function ListarUsuario() {

    const [usuarios, setUsuarios] = useState([]);

    //================================================
    // Funcion para obtener los usuarios
    //================================================
    useEffect(() => {
        const ObtenerUsuarios = onSnapshot (collection(db, "usuarios"), (snapshot) => {
            const lista = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setUsuarios(lista);
        })
        return () => ObtenerUsuarios();
    }, []);


    return(
        <div>
            <h2>Lista de los usuarios</h2>
            <ul>
                {usuarios.map((usuario)=>(
                    <li key={usuario.id}>{usuario.nombre}</li>
                ))}
                
            </ul>
        </div>
    )
}

export default ListarUsuario;