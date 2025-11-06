import { useState } from "react"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
const provider = new GoogleAuthProvider();


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function iniciarSesion (){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // ...
            console.log("inicio de sesion exitoso");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear cuenta");
            console.log(error);
        });
    }

    function iniciarConGoogle() {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            // ...
            console.log("Iniciaste sesion con Google");
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log("Error con iniciar con Google");
            console.log(error);            
        });
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
            <button onClick={iniciarConGoogle}>Ingresa con Google</button>
        </div>
    )
}
export default Login