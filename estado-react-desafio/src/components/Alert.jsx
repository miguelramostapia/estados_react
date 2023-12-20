import { useState } from 'react'


function Alert({error,exito}) {
  
  return (
    <>
          <div>
              {error == 0 && exito == 0}
              {error == 1 && <button variant='danger' size='lg' disabled><p className='error'>Todos los datos deben ser ingresados</p></button>}
              {exito == 2 && <button variant='danger' size='lg' disabled ><p className='error'>Nombre debe contener solo letras</p></button>}
              {error == 3 && <button variant='danger' size='lg' disabled><p className='error'>Correo debe ser nombre@buzon.com</p></button>}
              {error == 4 && <button variant='danger' size='lg' disabled><p className='error'>Contraseña mal ingresada</p></button>}
              {exito == 1 && <button variant='success' size='lg' disabled ><p className='exito'>Felicitaciones Registro Exitoso</p></button>}
          </div>

    </>
  )
}

export default Alert

/*
{error==0 ? <p className='error'>Todos los campos deben ser ingresados</p> : null}
     <p className='error'>{props.mensaje1}</p>

            {error==0 ? <p className='error'>Todos los campos deben ser ingresados</p> : null}
            {error==1 ? <p className='error'>El correo está remal escrito pos oiga</p> : null}
            {error==2 ? <p className='error'>Debe ingresar un correo</p> : null}
            {error==3 ? <p className='error'>Las Contraseñas deben de ser igualitas</p> : null}
            {error==4 ? <p className='error'>Registro ingresado exitosamente</p> : null}
*/