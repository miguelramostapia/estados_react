import { useState } from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'




function Registro() {
  const [error,setError]=useState(0);
  const [exito,setExito]=useState(0);

  var   linkedinImagen = "http://localhost:5173/src/assets/img/linkedin.png",
        githubImagen = "http://localhost:5173/src/assets/img/linkedin.png",
        facebookImagen = "http://localhost:5173/src/assets/img/linkedin.png",
        tituloSocial = "Crea una cuenta",
        mensajeSocial = "o usa tu email para registrarte";

  return (
    <>
            <SocialButton titulo={tituloSocial} imagen1 = {linkedinImagen} imagen2 = {githubImagen} imagen3 = {facebookImagen}
                          mensaje = {mensajeSocial}></SocialButton>
            <Formulario setError={setError} setExito = {setExito}/>
            <Alert error = {error} exito = {exito}></Alert>

    </>
  )
}

export default Registro