import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import app from './firebase'
import AgregarUsuario from './componentes/AgregarUsuario'
import ListarUsuario from './componentes/ListarUsuario'
import RegistrarCuenta from './componentes/RegistrarCuenta'
import Login from './componentes/Login'

function App() {
  console.log(app);
  
  return (
    <>
      <RegistrarCuenta />
      <Login />

      <div>
        <h1>Lista de Invitados de mi fiesta!!</h1>
      </div>      
      
      <AgregarUsuario />

      <hr />

      <ListarUsuario />
      
    </>
  )
}

export default App
