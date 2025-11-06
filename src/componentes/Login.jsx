import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function iniciarSesion (){
        console.log("cabello");
        console.log(email);
        console.log(password);
    }

    return(
        <div>
            <h1>Iniciar Sesion</h1>
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
            <button onClick={iniciarSesion}>Iniciar Sesion</button>
        </div>
    )
}
export default Login