import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";

function ListarUsuario() {

    const [usuarios, setUsuarios] = useState([]);

    const [editandoID, setEditandoID] = useState(null);
    const [nombreEditado, setNombreEditado] = useState("");
    const [edadEditada, setEdadEditada] = useState("");

    const editarUsuario = async (id) => {
        const usuarioRef = doc(db, "usuarios", id);
        await updateDoc(usuarioRef, {
            nombre: nombreEditado,
            edad:edadEditada
        })
        setEditandoID(null);
    }


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
                    <li key={usuario.id}>{usuario.nombre} - {usuario.edad}</li>
                ))}
                
            </ul>
        </div>
    )
}

export default ListarUsuario;