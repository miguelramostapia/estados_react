import { useState } from 'react'



function SocialButton(props) {
  
  return (
    <>
      <div>
        <h1>{props.titulo}</h1>
        <img src={props.imagen1}/><img src={props.imagen2}/><img src={props.imagen3}/>
        <h5>{props.mensaje}</h5>
      </div>
    </>
  )
}

export default SocialButton