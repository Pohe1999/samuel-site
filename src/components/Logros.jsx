import React, { useState } from "react";

const Personal = () => {
  const [currentImages] = useState([0, 0, 0, 0]);

  const cardsData = [
    {
      likes: "Inaguracion de dos nuevos pozos en Villa del Real",
      imagenes: ["/logros-1.jpeg"],
      descripcion: "En un día histórico, Se entregaron dos pozos en #Tecámac, asegurando el agua. ODAPAS invirtió 190 millones en 50 acciones hidráulicas en 2023. Regularizamos 22 mil usuarios, sin aumentos en 2024.",
      link: "https://www.facebook.com/samuelhernandez2021/posts/pfbid0CRQYhevMVL5rffSVPmVXsGdztEAZ2cSyFbQSCThA34EXAAjFPZ4HSqEtQkaUJuPLl"
    },
    {
      likes: "En unos meses cambiará el rostro del Blvd. Ojo de Agua.",
      imagenes: ["/logros-2.png"],
      descripcion: "Con Mariela Gutiérrez, inspeccionamos obras: 1) Colector 35% (fondos municipales). 2) Reparación vial Tonanitla-Tecámac. Fondos estatales insuficientes; municipio invertirá 100M, apoyado por la próxima Gobernadora.",
      link: "https://www.facebook.com/samuelhernandez2021/posts/pfbid02cugac8MDWAK2q7HKbhXVMpL7CBXE1yonGVFWPeaVapvgSnk5L3fz1pndRFA2QMACl"
    },
    {
      likes: "El CallCenter de ODAPAS, el mas eficiente del municipio.",
      imagenes: ["/logros-3.jpeg"],
      descripcion: "Atendemos diariamente a más de 600 usuarios del #ODAPAS por WhatsApp, gestionando reportes, dudas y trámites. Mejoramos la atención a 170 mil usuarios, siempre comprometidos. Contáctanos al 📲 56 4407 0673.",
      link: "https://www.facebook.com/samuelhernandez2021/posts/pfbid0349D31KC6RNYKLc5nY6Soj3cHoLWt5LGu1qeuBPKgnTUfdg9EYdNCUVAC9UwZVNUel"
    },
    {
      likes: "¡En #Tecámac ya contamos con una sede de la UAM Azcapotzalco!",
      imagenes: ["/logros-4.jpeg"],
      descripcion: "Más de 5,000 tecamaquenses capacitados en cursos virtuales del #CYCyT de La UAM. El rector Oscar Lozano y su equipo presentes en este proyecto para abrir el Ágora de Aranjuez, Villa del Real.",
      link: "https://www.facebook.com/samuelhernandez2021/posts/pfbid0349D31KC6RNYKLc5nY6Soj3cHoLWt5LGu1qeuBPKgnTUfdg9EYdNCUVAC9UwZVNUel"
    }

  ];

  return (
    <div className=" p-4 mt-20 mb-40 pb-10">
      <div className="text-center pb-10">
        <h2 className='text-4xl font-bold inline border-b-4 border-red-700'>logros</h2>
      </div>
      <h3 className="text-center font-thin mb-7 text-xl border-b-2">
        Avances y logros destacados. <br />  Desliza para conocer más
      </h3>
      <div className="flex overflow-x-scroll sm:px-11 gap-4 sm:justify-start">
        {currentImages.map((currentImage, index) => (
          <div
            key={index}
            className="bg-white border-2  rounded-2xl shadow-xl"
            style={{ minWidth: '360px', width: '100%' }}
          >
            <div style={{ height: '290px' }}> {/* Ajusta la altura según sea necesario */}
              <img
                src={cardsData[index].imagenes[currentImage]}
                alt={`Main ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="rounded-xl"
              />
            </div>
            <div className="text-xl text-center mx-4 mt-2 mb-4 border-b-2 border-black">
              <div className="font-semibold">{cardsData[index].likes}</div>
            </div>
            <div className=" text-sm text-justify px-10">
                {cardsData[index].descripcion}
            </div>
              <div className="items-center  text-center mt-5 mb-6">
                <a className="font-thin border-2 border-black rounded-xl text-black hover:bg-gray-100 px-4 py-2 cursor-pointer" href={cardsData[index].link} target="_blank">Mas detalles</a>
              </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Personal;
