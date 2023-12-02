import React, { useState } from "react";

const Personal = () => {
  const [currentImages] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const cardsData = [
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Nos encontramos a este amigo",
      imagenes: ["/card-10.png"],
      link: "https://www.facebook.com/photo.php?fbid=699046562023908&set=a.515665293695370&type=3&mibextid=WC7FNe"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Ciudad de Mexico",
      likes: "Saludando a la doctora",
      imagenes: ["/card-9.png"],
      link: "https://www.facebook.com/photo.php?fbid=797395995522297&set=a.515665293695370&type=3&mibextid=WC7FNe"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "biblioteca José Vasconcelos",
      likes: "Visitando la biblioteca",
      imagenes: ["/card-1.png"],
      link: "https://www.facebook.com/photo.php?fbid=877691507492745&set=pb.100057557125317.-2207520000&type=3"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Arena Coliseo",
      likes: "Domingo de luchas",
      imagenes: ["/card-2.png"],
      link: "https://www.instagram.com/p/CzAbn-iqfsY/?img_index=1"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Estadio Azteca",
      likes: "Apoyando al Cruz Azul",
      imagenes: ["/card-3.jpeg"],
      link: "https://www.facebook.com/photo.php?fbid=862625555666007&set=pb.100057557125317.-2207520000&type=3"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Palacio Municipal",
      likes: "Celebrando la independenia",
      imagenes: ["/card-4.jpeg"],
      link: "https://www.facebook.com/photo/?fbid=856242786304284&set=pb.100057557125317.-2207520000"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Tecamac",
      likes: "Disfrutando el domingo",
      imagenes: ["/card-5.jpeg"],
      link: "https://www.facebook.com/photo/?fbid=694954532433111&set=pb.100057557125317.-2207520000"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "",
      likes: "terminando el año",
      imagenes: ["/card-6.jpeg"],
      link: "https://www.facebook.com/photo/?fbid=665478295380735&set=pb.100057557125317.-2207520000"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Taqueria Arandas",
      likes: "Disfrutando unos tacos",
      imagenes: ["/card-7.jpeg"],
      link: "https://www.facebook.com/photo.php?fbid=626380562623842&set=pb.100057557125317.-2207520000&type=3"
    },
    {
      nombre: "hrnndzsamuel",
      ubicacion: "Boliche Santa Lucia",
      likes: "Noche de boliche",
      imagenes: ["/card-8.jpeg"],
      link: "https://www.facebook.com/photo/?fbid=573327741262458&set=pb.100057557125317.-2207520000"
    }
  ];

  return (
    <div className="bg-gray-100 p-4 mt-20 mb-40 pb-10">
      <div className="text-center pb-10">
        <h2 className='text-4xl font-bold inline border-b-4 border-red-700'>Un poco más de mi</h2>
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
            style={{ minWidth: '320px', width: '100%' }}
          >
            <div className="flex items-center px-4 py-3">
              <img className="h-8 w-8 rounded-full" src="/galeria/samuel-perfil.jpeg" alt="Profile" />
              <div className="ml-3">
                <span className="text-sm font-semibold antialiased block leading-tight">{cardsData[index].nombre}</span>
                <span className="text-gray-600 text-xs block">{cardsData[index].ubicacion}</span>
              </div>
            </div>
            <div style={{ height: '250px' }}> {/* Ajusta la altura según sea necesario */}
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
