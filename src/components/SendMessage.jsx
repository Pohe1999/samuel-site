import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const SendMessage = () => {
  const phoneNumber = '5521724723'; // Número de teléfono
  const message = '¡Hola!, te envío un mensaje desde tu página web'; // Mensaje predeterminado

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Botón para PC y tablet */}
      <button
        onClick={handleClick}
        className="hidden sm:flex items-center bg-green-500 hover:bg-green-600 text-white text-md italic py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        <FaWhatsapp className="mr-2" size={34} />
        <span className=''>Envíame un WhatsApp</span>
      </button>

      {/* Logo de WhatsApp para móvil */}
      <button
        onClick={handleClick}
        className="flex sm:hidden items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition duration-300 ease-in-out p-2"
      >
        <FaWhatsapp size={54} />
      </button>
    </div>
  );
};

export default SendMessage;
