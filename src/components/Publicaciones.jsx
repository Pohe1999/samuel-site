import React from 'react';

const Publicaciones = () => {
  const medios = [
    { nombre: 'El Sol de Toluca', img: '/sol-toluca.jpeg', link: 'https://www.elsoldetoluca.com.mx/analisis/educacion-para-el-desarrollo.-contribuir-desde-lo-local-para-lograr-el-bienestar-10865231.html' },
    { nombre: 'Crónica', img: '/cronica.jpeg', link: 'https://www.cronica.com.mx/estados/tecamac-cuenta-mejor-alcantarillado-asegura-odapas.html' },
    { nombre: 'Cima Cnoticias', img: '/cnoticias.jpeg', link: 'https://perfilurbano.com.mx/firman-uam-y-ayuntamiento-de-tecamac-convenio-educativo/' },
    { nombre: 'La Jornada', img: '/la-jornada.jpeg', link: 'https://www.jornada.com.mx/2016/07/12/opinion/032a1soc' },
    { nombre: 'TV Azteca', img: '/tvazteca.png', link: 'https://www.tvazteca.com/aztecanoticias/notas/jovenes-de-morena-se-registran-para-ocupar-diputaciones-federales' },
    { nombre: 'El Monitor', img: '/elmonitor.jpeg', link: 'https://www.elmonitoredomex.com/post/en-tecámac-quedó-formalmente-instalado-el-ayuntamiento-2022-2024' }
  ];

  return (
    <div name="publicaciones" className="bg-gray-100 py-5 fondo3d shadow-xl rounded-3xl">
      {/* Título */}
      <div className='text-center pb-5'>
        <p className='sm:text-4xl text-2xl font-bold text-gray-800'>Sala de prensa</p>
      </div>

      {/* Grid de logos en móvil (3 columnas) */}
      <div className="grid grid-cols-3 gap-4 sm:hidden px-4">
        {medios.map((medio, index) => (
          <a href={medio.link} target="_blank" rel="noopener noreferrer" key={index} className="group">
            <div className="flex justify-center items-center p-2 bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition duration-300">
              <img className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition duration-300" src={medio.img} alt={medio.nombre} />
            </div>
            <p className="text-center mt-1 text-gray-600 text-xs group-hover:text-black transition duration-300">{medio.nombre}</p>
          </a>
        ))}
      </div>

      {/* Grid de logos para pantallas más grandes */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center px-8">
        {medios.map((medio, index) => (
          <a href={medio.link} target="_blank" rel="noopener noreferrer" key={index} className="group">
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition duration-300">
              <img className="w-24 h-24 object-contain grayscale group-hover:grayscale-0 transition duration-300" src={medio.img} alt={medio.nombre} />
            </div>
            <p className="text-center mt-2 text-gray-600 group-hover:text-black transition duration-300">{medio.nombre}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Publicaciones;
