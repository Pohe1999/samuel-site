import React, { useState } from "react";

const Personal = () => {
  const [currentImages] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const cardsData = [
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Peliculas",
      imagenes: ["/galeria/samuel-perfil.jpeg"],
      link: "https://www.instagram.com/p/CzAbn-iqfsY/?img_index=1"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Libros",
      imagenes: ["/galeria/galeria-1.jpeg"]
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Deportes",
      imagenes: ["/galeria/galeria-2.jpeg"]
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Musica",
      imagenes: ["/galeria/galeria-3.jpeg"]
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Viajes",
      imagenes: ["/galeria/galeria-4.jpeg"]
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Peliculas",
      imagenes: ["/galeria/galeria-5.jpeg"]
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Peliculas",
      imagenes: ["/galeria/galeria-6.jpeg"]
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Peliculas",
      imagenes: ["/galeria/galeria-7.jpeg"]
    }
  ];

  return (
    <div className="bg-gray-100 p-4 mt-20 mb-40 pb-10">
      <div className="text-center pb-10">
        <h2 className='text-4xl font-bold inline border-b-4 border-red-700'>Un poco mas de mi</h2>
      </div>
      <h3 className="text-center font-thin mb-7 text-xl">
        Les comparto un poco más de mi vida personal y mis pasatiempos.
      </h3>
      <div className="flex overflow-x-scroll sm:px-11 gap-4 sm:justify-start">
        {currentImages.map((currentImage, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl sm:w-full sm:min-w-0 shadow-2xl
                        md:w-1/2 lg:w-1/3 xl:w-1/4"  // Agregar estas clases para ajustar el tamaño en diferentes tamaños de pantalla
            style={{ minWidth: '350px', width: '100%' }}
          >
            <div className="flex items-center px-4 py-3">
              <img className="h-8 w-8 rounded-full" src="/galeria/samuel-perfil.jpeg" alt="Profile" />
              <div className="ml-3">
                <span className="text-sm font-semibold antialiased block leading-tight">{cardsData[index].nombre}</span>
                <span className="text-gray-600 text-xs block">{cardsData[index].ubicacion}</span>
              </div>
            </div>
            <div style={{ height: '300px' }}> {/* Ajusta la altura según sea necesario */}
              <img
                src={cardsData[index].imagenes[currentImage]}
                alt={`Main ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="flex justify-between items-center  text-sm mx-4 mt-2 mb-4">
              <div className="font-semibold">{cardsData[index].likes}</div>
              <a className="font-thin bg-black rounded-xl text-white px-2 py-1 cursor-pointer" href={cardsData[index].link} target="_blank">Ver mas</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
