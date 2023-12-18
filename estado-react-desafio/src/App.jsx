import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registro from './components/Registro'


function App() {
  const textoExito = "El ingreso del registro ha sido exitoso",
        textoFalla = "El ingreso no ha sido exitoso"

  return (
    <>
        <Registro mensajeExito = {textoExito} mensajeFalla = {textoFalla}/>
    </>
  )
}

export default App
