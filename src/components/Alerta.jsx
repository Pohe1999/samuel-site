import React, { useState, useEffect } from 'react';

const AlertaTemporal = () => {
  const [mostrarAlerta, setMostrarAlerta] = useState(true);

  useEffect(() => {
    const timeoutMostrar = setTimeout(() => {
      setMostrarAlerta(true);
    }, 1000); // 15 segundos en milisegundos

    const timeoutOcultar = setTimeout(() => {
      setMostrarAlerta(false);
    }, 7000); // 5 segundos en milisegundos

    return () => {
      clearTimeout(timeoutMostrar);
      clearTimeout(timeoutOcultar);
    };
  }, []);

  return (
    <div className={`fixed opacity-95 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 border-2 border-white shadow-2xl text-white p-4 rounded-xl z-50 ${mostrarAlerta ? 'block' : 'hidden'}`}>
      <div className='text-center'>
        <p className="font-bold pb-5">¡Hola!, te invito a que veas la entrevista que nos realizó <span className='border-b-2'>La Jornada:</span></p>
        <p>Tecámac: Proyectan obras que garanticen agua alrededor del AIFA</p>
      </div>
      <div className='flex items-center text-center justify-center pt-5'>
        <a className='text-center border-2 px-2 py-1 rounded-lg' href="https://lajornadaestadodemexico.com/tecamac-proyectan-obras-que-garanticen-agua-alrededor-del-aifa/?fbclid=IwAR2cYOD382A3NHsTvS7j4rbmdDiCyb3l-v0_IdRMTnXleWt5VU72WEomBf0&cn-reloaded=1" target='_blank'>
            Ver publicacion
        </a>
      </div>

    </div>
  );
};

export default AlertaTemporal;
