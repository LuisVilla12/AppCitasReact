import React from "react";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

import {useEffect} from 'react'

function Paciente({paciente,setPaciente,eliminarPaciente}) {
  const {name,propietario,email,date,sintomas,id}=paciente;
  const handleEliminar=()=>{
    // const respuesta = confirm('Deseas eliminar este paciente?');
    // if(respuesta){
    //   eliminarPaciente(id);
    //   alert('Paciente ha sido eliminado');
    // }else{
    //   alert('No se elimino el paciente')
    // }
    Swal.fire({
      title: 'Estás seguro de eliminar?',
      text: "No puedes revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
  }).then((result) => {
      if (result.isConfirmed) {
          eliminarPaciente(id);  //llamar el prop y enviar el id
          Swal.fire(
          'Eliminado!',
          'Tu cita se ha eliminado.',
          'success'
          )
      }
  })
  };

  // useEffect(()=>{},[
  //   console.log('listo')
  // ])
  return (
    <div className="bg-white  shadow-md px-6 py-5 mt-10">
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Nombre del propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Correo electronico:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Fecha de registro:{" "}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between items-center mt-5">
        {/* Manda el paciente que dio click */}
        <button type="button" className="py-3 px-7 bg-green-500 cursor-pointer hover:bg-green-700 text-center text-white 
        font-semibold rounded-md" onClick={()=>setPaciente(paciente)} >Editar</button>
        <button type="button" onClick={handleEliminar} className="py-3 px-7 bg-red-500 cursor-pointer hover:bg-red-700 text-center text-white font-semibold rounded-md">Eliminar</button>
      </div>
    </div>
  );
}

export default Paciente;
