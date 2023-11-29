import React, { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Personal = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const touchStartX = useRef(null);

  const cardsData = [
    {
        nombre: "hrnndzsamuel",
        ubicacion: "Tecamac",
        likes: "Libros",
        imagenes: [
          "/galeria/samuel-perfil.jpeg",
          "src/assets/galeria/galeria-7.jpeg",
          "src/assets/galeria/galeria-8.jpg"
        ]
      },
      {
        nombre: "hrnndzsamuel",
        ubicacion: "Tecamac",
        likes: "Peliculas",
        imagenes: [
          "/galeria/galeria-1.jpeg",
          "https://picsum.photos/id/201/900/900",
          "https://picsum.photos/id/202/900/900"
        ]
      },
      {
          nombre: "hrnndzsamuel",
          ubicacion: "Tecamac",
          likes: "Peliculas",
          imagenes: [
            "/galeria/galeria-2.jpeg",
            "https://picsum.photos/id/201/900/900",
            "https://picsum.photos/id/202/900/900"
          ]
        },
        {
          nombre: "hrnndzsamuel",
          ubicacion: "Tecamac",
          likes: "Peliculas",
          imagenes: [
            "/galeria/galeria-3.jpeg",
            "https://picsum.photos/id/201/900/900",
            "https://picsum.photos/id/202/900/900"
          ]
        },
        {
          nombre: "hrnndzsamuel",
          ubicacion: "Tecamac",
          likes: "Peliculas",
          imagenes: [
            "/galeria/galeria-4.jpeg",
            "https://picsum.photos/id/201/900/900",
            "https://picsum.photos/id/202/900/900"
          ]
        },
        {
          nombre: "hrnndzsamuel",
          ubicacion: "Tecamac",
          likes: "Peliculas",
          imagenes: [
            "/galeria/galeria-5.jpeg",
            "https://picsum.photos/id/201/900/900",
            "https://picsum.photos/id/202/900/900"
          ]
        },
        {
          nombre: "hrnndzsamuel",
          ubicacion: "Tecamac",
          likes: "Peliculas",
          imagenes: [
            "/galeria/galeria-6.jpeg",
            "https://picsum.photos/id/201/900/900",
            "https://picsum.photos/id/202/900/900"
          ]
        },
        {
          nombre: "hrnndzsamuel",
          ubicacion: "Tecamac",
          likes: "Peliculas",
          imagenes: [
            "/galeria/galeria-7.jpeg",
            "https://picsum.photos/id/201/900/900",
            "https://picsum.photos/id/202/900/900"
          ]
        }
  ];

  const handleTouchStart = (index, e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (index, e) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      prevImage(index);
    } else if (deltaX < -50) {
      nextImage(index);
    }

    touchStartX.current = null;
  };

  const nextImage = (index) => {
    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = (newImages[index] + 1) % cardsData[index].imagenes.length;
      return newImages;
    });
  };

  const prevImage = (index) => {
    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = (newImages[index] - 1 + cardsData[index].imagenes.length) % cardsData[index].imagenes.length;
      return newImages;
    })
  }

  return (
    <div className="bg-gray-100 p-4 mt-20 mb-40">
      <div className="text-center pb-10">
        <h2 className='text-4xl font-bold inline border-b-4  border-red-700'>Un poco mas de mi</h2>
      </div>
      <h3 className="text-center font-thin mb-7 text-xl">
        Les comparto un poco más de mis gustos personales y pasiones.
      </h3>
      <div className="flex overflow-x-scroll sm:px-11 gap-4 sm:justify-start">
        {currentImages.map((currentImage, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl max-w-md mb-4 sm:mb-0 sm:w-80 md:w-96"
            style={{ minWidth: '400px' }}
            onTouchStart={(e) => handleTouchStart(index, e)}
            onTouchEnd={(e) => handleTouchEnd(index, e)}
          >
            <div className="flex items-center px-4 py-3">
              <img className="h-8 w-8 rounded-full" src="/galeria/samuel-perfil.jpeg" alt="Profile" />
              <div className="ml-3">
                <span className="text-sm font-semibold antialiased block leading-tight">{cardsData[index].nombre}</span>
                <span className="text-gray-600 text-xs block">{cardsData[index].ubicacion}</span>
              </div>
            </div>
            <div style={{ height: '400px' }}>
              <img
                src={cardsData[index].imagenes[currentImage]}
                alt={`Main ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="flex items-center justify-between mx-4 mt-3 mb-2">
              <button onClick={() => prevImage(index)}>
                <BsChevronCompactLeft size={30} />
              </button>
              <div className="flex gap-5">
                {/* Resto de los SVGs */}
              </div>
              <button onClick={() => nextImage(index)}>
                <BsChevronCompactRight size={30} />
              </button>
            </div>
            <div className="font-semibold text-sm mx-4 mt-2 mb-4">{cardsData[index].likes}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
