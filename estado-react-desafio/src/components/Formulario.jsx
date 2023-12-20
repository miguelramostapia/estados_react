import { useState } from 'react'


function Formulario({setError, setExito}) {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña,setContraseña] = useState('');
    const [confirmaContraseña,setConfirmaContraseña] = useState('');
 
    const handleNombreChange = (event)=>{setNombre(event.target.value);};
    const handleEmailChange = (event)=>{setEmail(event.target.value);};
    const handleContraseñaChange = (event)=>{setContraseña(event.target.value);};
    const handleConfirmaContraseñaChange = (event)=>{setConfirmaContraseña(event.target.value);};

    const validarInput = (e) => {
        // Prevenimos el comportamiento por defecto
        e.preventDefault();
        const regexParaNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
        const regexParacorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        //const regexParacorreo = /.+@.+\.[A-Za-z]+$/;
        setError(0);setExito(0);
        if(nombre ===''|| email ==='' || contraseña ==='' || confirmaContraseña===''){setError(1);return;}

        if(!regexParaNombre.test(nombre)){setError(2);return;}

        if(!regexParacorreo.test(email)){setError(3);return;}

        if(contraseña!=confirmaContraseña){setError(4);return;}
        setExito(1);return;
    }
  
  return (
    <>
        <form className="formulario" onSubmit={validarInput}>

            <input type="text" name="nombre" className="form-control" onChange={handleNombreChange} placeholder='Ingrese Nombre'/>
            <input type="text" name="email" className="form-control" onChange={handleEmailChange} placeholder='correo@dominio.cl'/>
            <input type="password" name="contraseña" className="form-control" onChange={handleContraseñaChange} placeholder='Ingrese su contraseña' />
            <input type="password" name="confirmaContraseña" className="form-control" onChange={handleConfirmaContraseñaChange} placeholder='Confirmar Contraseña'/>


            <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
    </>
  )
}

export default Formulario
/*

    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const handleNombreChange = (event)=>{setNombre(event.target.value);};
    const handleApellidoChange = (event)=>{setApellido(event.target.value);};
    const handleEdadChange = (event)=>{setEdad(event.target.value);};
    const handleEmailChange = (event)=>{setEmail(event.target.value);};
    const [error, setError] = useState(false);
/*    const [nombre, setNombre] = useState('');

    const [apellido, setApellido] = useState('');
    const [miColor, setMiColor] = useState('#000000');

    const handleColorChange = (event)=>{setMiColor(event.target.value);};*/

 /* eliminar este comentario cuando pueda
    const validarInput = (e) => {
        // Prevenimos el comportamiento por defecto
        e.preventDefault();
        // Validación input
        //if(nombre === '') {alert('Se debe ingresar un Nombre antes de ser enviado')}
        if(nombre==='' || apellido==='' || edad==='' || email==='') {setError(true);return;};
        setError(false);
        setNombre('');setApellido('');setEdad('');setEmail('');
    }
*/


/*

            <form className="formulario" onSubmit={validarInput}>
                {error ? <p className='error'>Todos los campos son obligatorios</p> : null}
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="nombre" className="form-control" onChange={handleNombreChange}/>
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" name="apellido" className="form-control" onChange={handleApellidoChange} />
                </div>
                <div className="form-group">
                    <label>Edad</label>
                    <input type="text" name="edad" className="form-control" onChange={handleEdadChange}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" onChange={handleEmailChange}/>
                </div>
                <button type="submit" className="btn
                btn-primary">Enviar</button>
            </form>
*/