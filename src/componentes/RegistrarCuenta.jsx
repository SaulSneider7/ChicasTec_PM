import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegistrarCuenta() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Funcionar para crear un usuario
    const registrar = async() => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Usuario registrado");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear tu cuenta");
            console.log(error);
        });
    }

    return(
        <div>
            <h1>Registrar Cuenta</h1>
            <input 
                type="email" 
                placeholder="correo" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}    
            />
            <input 
                type="password" 
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}    
            />
            <button onClick={registrar}>Registrar</button>
        </div>
    )
}
export default RegistrarCuenta;