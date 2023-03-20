import React from "react";
import Paciente from "./Paciente";
import {useEffect} from 'react'

export default function Listado({ pacientes, setPaciente,eliminarPaciente }) {
  // Cada que agregue un paciente a la lista
  // useEffect(()=>{
  //   if (pacientes.length>0) {
  //     console.log('Nuevo pacientes');
  //   }
  // },[pacientes])
  return (
    <>
      <div className="">
        <h2 className="font-bold text-3xl text-center text-indigo-400">
          Listado de pacientes
        </h2>
        <p className="text-center mt-2">
          Administra tus pacientes y{" "}
          <span className="font-semibold text-indigo-500">citas</span>{" "}
        </p>
        {pacientes.length === 0 ? (
          <>
            <p className="text-center mt-5">No hay ningun paciente registrado</p>
          </>
        ) : (
          <>
            <div className="md:h-screen overflow-y-scroll">
              {pacientes.map((paciente) => (
                <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
