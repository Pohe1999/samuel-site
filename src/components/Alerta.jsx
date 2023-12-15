import React, { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import { FaTimes } from 'react-icons/fa'; // Importa el ícono de cierre desde react-icons

const AlertaTemporal = () => {
  const [mostrarAlerta, setMostrarAlerta] = useState(true);

  useEffect(() => {
    const timeoutMostrar = setTimeout(() => {
      setMostrarAlerta(true);
    }, 20000); // 10 segundos en milisegundos

    const timeoutOcultar = setTimeout(() => {
      setMostrarAlerta(false);
    }, 5000); // 5 segundos en milisegundos

    return () => {
      clearTimeout(timeoutMostrar);
      clearTimeout(timeoutOcultar);
    };
  }, []);

  const cerrarAlerta = () => {
    setMostrarAlerta(false);
  };

  return (
    <div className={`fixed font-thin opacity-95 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 border-2 border-white shadow-2xl text-white p-4 text-center rounded-xl z-50 ${mostrarAlerta ? 'block' : 'hidden'}`}>
      <button className="absolute top-2 right-2" onClick={cerrarAlerta}>
        <FaTimes /> {/* Ícono de cierre */}
      </button>
      <h4 className='text-2xl py-4'>8 Columnas</h4>
      <h5 className='pb-4'>Garantizada la seguridad y servicios en tecámac ante los retos que enfrenta el AIFA.</h5>
      <DownloadButton />
    </div>
  );
};

export default AlertaTemporal;
