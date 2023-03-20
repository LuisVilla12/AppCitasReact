import React from 'react'

function Header() {
  const variable=true;
  return (
    <>
    <header className="container mx-auto md:flex md:justify-between items-center px-2 py-4">
      <h1 className='text-white my-0 text-4xl'>Seguimiento Pacientes <span className='font-bold'>Veterinaria</span> </h1>
    </header>
    </>
  )
}

export default Header