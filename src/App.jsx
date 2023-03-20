import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'
import {useState,useEffect} from 'react';

function App() {
  const pacientesLS=JSON.parse(localStorage.getItem('pacientes'))??[];

  // Almacena todos los pacientes 
  const [pacientes,setPacientes]=useState(pacientesLS);
  const [paciente,setPaciente]=useState({});

  // Cada que haya un cambio en pacientes y cuando se inicia
  useEffect(()=>{
    console.log('Listo');
    // Convierte el arreglo de pacientes a string con la funcion JSON.stringify
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes]);

  const eliminarPaciente=( id)=>{
    // Traerme todos los elementos del arreglo que no tengan ese id
    const pacientesActualidos=pacientes.filter(paciente => paciente.id !== id);
    // Mandar el nuevo arreglo
    setPacientes(pacientesActualidos);
  }
  return (
    <>
    <div className='bg-indigo-600 '>
      <Header ></Header>
    </div>
      <div className='container mx-auto md:grid md:grid-cols-2 gap-3 mt-10'>
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} ></Formulario>
        <Listado pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}></Listado>
     </div>
    </>
  )
}

export default App
