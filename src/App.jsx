import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import app from './firebase'
import AgregarUsuario from './componentes/AgregarUsuario'
import ListarUsuario from './componentes/ListarUsuario'

function App() {
  console.log(app);
  
  return (
    <>
      <div>
        <h1>Mi web con firebase</h1>
      </div>      
      
      <AgregarUsuario />

      <hr />

      <ListarUsuario />
      
    </>
  )
}

export default App
