import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importa un ícono de react-icons como ejemplo

const Direccion = () => {
  return (
    <div className="py-11">
      {/* Título mejorado */}
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold inline border-b-4 border-red-700'>Conoce la oficina de atención ciudadana</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-5 md:px-20">
        <div className="w-full mb-5 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3756.660786482292!2d-98.99051932477919!3d19.68447218164942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQxJzA0LjEiTiA5OMKwNTknMTYuNiJX!5e0!3m2!1ses-419!2smx!4v1727111396558!5m2!1ses-419!2smx"
            className="w-full h-[400px] md:h-[600px] border-2 rounded-2xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />
        </div>
        <div className="w-full md:w-1/2 p-5">
          <p className="text-gray-700">
            <span className="text-xl font-bold mb-4">Visita las oficinas de atencion ciudadana ubicadas en:  </span>
            Hidalgo 4, San Francisco Cuautliquixca, 55760 Ojo de Agua, Méx.
          </p>
    <button className="cta">
         <a
            href="https://maps.app.goo.gl/T3dWaryQ8rwrT37E8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <span>Ver ubicacion en Google maps</span>
          </a>
    </button>
        </div>
      </div>
    </div>
  );
}

export default Direccion;
