import { useState } from 'react'

function Formulario() {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña,setContraseña] = useState('');
    const [confirmaContraseña,setConfirmaContraseña] = useState('');
    const [error, setError] = useState(10);
 
    const handleNombreChange = (event)=>{setNombre(event.target.value);};
    const handleEmailChange = (event)=>{setEmail(event.target.value);};
    const handleContraseñaChange = (event)=>{setContraseña(event.target.value);};
    const handleConfirmaContraseñaChange = (event)=>{setConfirmaContraseña(event.target.value);};

    const validarInput = (e) => {
        // Prevenimos el comportamiento por defecto
        e.preventDefault();

        const regexParacorreo = /.+@.+\.[A-Za-z]+$/;

        if(nombre ===''|| email ==='' || contraseña ==='' || confirmaContraseña===''){setError(0);return;}

        if(email ===''){setError(2);return;}

        if(!regexParacorreo.test(email)){setError(1);return;}

        if(contraseña!=confirmaContraseña){setError(3);return;}

        /*        // Validación input
        if(nombre==='' || apellido==='' || edad==='' || email==='') {setError(true);return;};
        setError(false);
        setNombre('');setApellido('');setEdad('');setEmail('');

*/
    }
  
  return (
    <>
        <form className="formulario" onSubmit={validarInput}>
            {error==0 ? <p className='error'>Todos los campos deben ser ingresados</p> : null}
            {error==1 ? <p className='error'>El correo está remal escrito pos oiga</p> : null}
            {error==2 ? <p className='error'>Debe ingresar un correo</p> : null}
            {error==3 ? <p className='error'>Las Contraseñas deben de ser igualitas</p> : null}
            <div className="form-group">
                <input type="text" name="nombre" className="form-control" onChange={handleNombreChange} placeholder='Ingrese Nombre'/>
            </div>
            <div className="form-group">
                <input type="text" name="email" className="form-control" onChange={handleEmailChange} placeholder='correo@dominio.cl'/>
            </div>
            <div className="form-group">
                <input type="text" name="contraseña" className="form-control" onChange={handleContraseñaChange} placeholder='Ingrese su contraseña' />
            </div>
            <div className="form-group">
                <input type="text" name="confirmaContraseña" className="form-control" onChange={handleConfirmaContraseñaChange} placeholder='Confirmar Contraseña'/>
            </div>

            <button type="submit" className="btn
            btn-primary">Enviar</button>
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