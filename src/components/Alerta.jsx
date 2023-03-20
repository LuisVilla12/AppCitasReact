import React from 'react'

function Alerta({children}) {
  return (
    <div className='bg-red-500 rounded-md px-3 py-4 text-center text-white' > <p>{children}</p> </div>
  )
}

export default Alerta