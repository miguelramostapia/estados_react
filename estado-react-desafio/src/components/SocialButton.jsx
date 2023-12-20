import { useState } from 'react'



function SocialButton(props) {
  
  return (
    <>
      <div>
        <h1>{props.titulo}</h1>
        <img src={props.imagen1} width="5%" height="5%"/><img src={props.imagen2}width="5%" height="5%"/><img src={props.imagen3}width="5%" height="5%"/>
        <h5>{props.mensaje}</h5>
      </div>
    </>
  )
}

export default SocialButton