import { useState } from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'


function Registro(props) {
  var   fuente1 = "http://localhost:5173/src/assets/img/linkedin.png",
        fuente2 = "http://localhost:5173/src/assets/img/linkedin.png",
        fuente3 = "http://localhost:5173/src/assets/img/linkedin.png",
        tituloSocial = "Crea una cuenta",
        mensajeSocial = "o usa tu email para registrarte";

  return (
    <>
            <SocialButton titulo={tituloSocial} imagen1 = {fuente1} imagen2 = {fuente2} imagen3 = {fuente3}
                          mensaje = {mensajeSocial}></SocialButton>
            <Formulario codigo = {codigoError}/>
            <Alert mensaje1 = {props.mensajeExito} mensaje2 = {props.mensajeFalla}></Alert>

    </>
  )
}

export default Registro