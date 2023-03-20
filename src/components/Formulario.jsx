import React from 'react'
import { useState, useEffect} from 'react'
import Alerta from './Alerta';

function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
  // Valor inicial de la variable se manda en el useState
  const [name,setName]=useState('');
  const [propietario,setPropietario]=useState('');
  const [email,setEmail]=useState('');
  const [date,setDate]=useState('');
  const [sintomas,setSintomas]=useState('');
  const [error, setError]=useState(false);
  
  // Se ejecuta cuando el paciente cambia
  useEffect(()=>{
    // Saber las llaves del objeto esta vacio
    if(Object.keys(paciente).length>0){
      setName(paciente.name);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setDate(paciente.date);
      setSintomas(paciente.sintomas);
    }
  },[paciente]);

  const generarId=()=>{
    const fecha=Date.now().toString(36);
    const random=Math.random().toString(36).substring(2);
    return random+fecha;
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      // Validar 
      if([name,propietario,email,date,sintomas].includes('')){
        setError(true);
        return;
      }
      // Construir objeto de paciente
      const objetoPaciente={
        name,
        propietario,
        email,
        date,
        sintomas
      }
      if(paciente.id){
        // Editar registro
        objetoPaciente.id=paciente.id;
        const pacientesActualizados=pacientes.map(pacienteState => pacienteState.id===paciente.id ? objetoPaciente:pacienteState);

        setPacientes(pacientesActualizados);
        setPaciente('');
        
      }else{
        // Nuevo registro
        // Agregar el objeto paciente al array de pacientes
        objetoPaciente.id=generarId();
        setPacientes([...pacientes,objetoPaciente])
      }
     
      // Reiniciar formulario
      setName('');
      setPropietario('');
      setEmail('');
      setDate('');
      setSintomas('');
      // Quitar alerta
      setError(false);

  };

  return (
    <>
    <div>
<h2 className='font-bold text-3xl text-center text-indigo-400'>Seguimiento del pacientes</h2>
      <p className='text-center mt-2'>Añade pacientes y <span className='font-semibold text-indigo-500'>administrarlos</span> </p>
      <form  onSubmit={handleSubmit} action="" className='bg-white shadow-md rounded-lg px-6 py-5 mt-10'>
       {error && <Alerta>Hay algun campo vacio</Alerta>}
        <div className='my-4'>
          <label htmlFor="name"  className='text-gray-700 font-semibold' >Nombre de la mascota:</label>
          <input id='name'  type="text" placeholder='Ingrese nombre de la mascota' className='mt-4 p-2 w-full block border-2 placeholder-slate-400 rounded-md' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='my-4'>
          <label htmlFor="propietario" className='text-gray-700 font-semibold' >Nombre del propietario:</label>
          <input id='propietario' type="text" placeholder='Ingrese nombre del propietario' className='mt-4 p-2 w-full block border-2 placeholder-slate-400 rounded-md' value={propietario} onChange={e=>setPropietario(e.target.value)} />
        </div>
        <div className='my-4'>
          <label htmlFor="email" className='text-gray-700 font-semibold' >Correo electronico:</label>
          <input type="email" placeholder='Ingrese su correo electronico' className='mt-4 p-2 w-full block border-2 placeholder-slate-400 rounded-md' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='my-4'>
          <label htmlFor="date" className='text-gray-700 font-semibold' >Fecha de registro:</label>
          <input id='date' type="date" className='mt-4 p-2 w-full block border-2 placeholder-slate-400 rounded-md' value={date} onChange={e=>setDate(e.target.value) }/>
        </div> 
        <div className='my-4'>
          <label htmlFor="sintomas" className='text-gray-700 font-semibold' >Sintomas:</label>
          <textarea id='sintomas' placeholder='Ingrese los sintomas' className='mt-4 p-2 w-full block border-2 placeholder-slate-400 rounded-md' value={sintomas} onChange={e=>setSintomas(e.target.value)} />
        </div>
        

        <input  type="submit" value={paciente.id ? 'Actualizar paciente':'Crear paciente'} className=' text-white mt-4 p-2 w-full block bg-indigo-600 border-2  rounded-md hover:bg-indigo-700 hover:cursor-pointer transition-all' />

      </form>
    </div>

    </>
  )
}

export default Formulario