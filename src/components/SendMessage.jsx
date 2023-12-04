import React from 'react'
import { FaWhatsapp } from "react-icons/fa"


const SendMessage = () => {
  const phoneNumber = '5521724723' // introducir número de teléfono
  const message = '¡Hola Samuel!, te envio un mensaje desde tu pagina Web' // Mensaje predeterminado

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  };

  return (
    <div className='relative'>
        <button onClick={handleClick}>
            <FaWhatsapp className='text-white text-4xl me-2' />
        </button>
    </div>

  )
}

export default SendMessage
