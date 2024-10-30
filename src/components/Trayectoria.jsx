import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const Trayectoria = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
  let swipeStartX = 0;
  let swipeEndX = 0;

  const cards = [
    {
      title: "Participación política",
      image: "/morena-logo.png",
      description:
        "Fui fundador de MORENA desde 2011 y activista en el movimiento estudiantil #YoSoy132, siendo portavoz. Además, en 2015 coordiné la campaña de Morena en Tecámac para la alcaldía. En 2018, colaboré en la campaña de Andrés Manuel López Obrador.",
    },
    {
      title: "Participación ISSSTE",
      image: "/gobierno-logo-sin-fondo.png",
      description:
        "Colaboré junto al presidente de México en el sector salud, donde llevamos a cabo la contratación de más de 6 mil médicos y enfermeras para atender la pandemia del COVID-19. Trabajamos para combatir la corrupción en el ISSSTE.",
    },
    {
      title: "Secretario de ayuntamiento",
      image: "/tecamac-logo.png",
      description:
        "En julio de 2021 fui designado Secretario del Ayuntamiento de Tecámac, cargo en el que impulse convenios con el ISSSTE para llevar a cabo la construcción de la nueva Clínica de Medicina Familiar en Tecámac y el Centro de Innovación y Desarrollo Tecnológico de la UAM.",
    },
    {
      title: "Director de ODAPAS",
      image: "/odapas-logo.png",
      description:
        "En septiembre de 2022, fui designado Director general del ODAPAS, donde incrementamos la recaudación, apoyando a más de 30 mil familias para regularizarse y ejecutamos el programa de obra hidráulica más grande en 31 años, invirtiendo más de 200 millones de pesos en beneficio de los tecamaquenses.",
    },
    {
      title: "Diputado local Distrito 33",
      image: "/bg-4.png",
      description:
        "El 2 de junio de 2024 fui electo diputado local por el distrito 33, para representar los municipios de Tecámac, Axapusco, Nopaltepec, Temascalapa, San Juan Teotihuacán y San Juan de las Pirámides. El 5 de septiembre tomé protesta como integrante de la LXII legislatura para el periodo 2025 - 2027.",
      backgroundImage: "/bg-2.jpg", // Asegúrate de tener esta imagen disponible
    }
  ];

  const handleSwipeStart = (e) => {
    swipeStartX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleSwipeEnd = (e) => {
    swipeEndX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = swipeEndX - swipeStartX;
    if (swipeDistance > 50 && currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setSwipeDirection('left');
    } else if (swipeDistance < -50 && currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setSwipeDirection('right');
    } else {
      setSwipeDirection(null);
    }
  };

  return (
    <div name="trayectoria" className="pt-40 h-full w-screen mb-14"
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
      onMouseDown={handleSwipeStart}
      onMouseUp={handleSwipeEnd}
    >
      <div className="text-center pb-10">
        <h2 className='text-4xl font-bold inline border-b-4 border-red-700'>Trayectoria</h2>
      </div>
      {isDesktopOrTablet ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center px-6">
          {cards.map((card, index) => (
            <div key={index} className={`w-full h-auto bg-white rounded-lg overflow-hidden shadow-xl flex items-center m-2 transition-transform transform ${swipeDirection === 'left' ? 'animate-slide-out-left' : swipeDirection === 'right' ? 'animate-slide-out-right' : ''} ${index === cards.length - 1 ? 'col-span-2' : ''}`}>
              <div className={`w-1/3 h-full bg-gray-100 flex items-center justify-center border-r-2 p-4 ${index === 4 ? 'p-0'  : ''}`}>
                  <img className="max-h-full object-contain" src={card.image} alt={card.title} />
              </div>
              <div className="w-2/3 p-4 flex flex-col justify-center">
                <div 
                  className={`font-bold text-lg mb-2 border-b-2 border-red-900 relative ${index === 4 ? 'bg-cover bg-center h-20' : ''}`} 
                  style={index === 4 ? { backgroundImage: `url(${card.backgroundImage})`, opacity: 0.9 }  : {}}
                >
                  {index === 4 ? (
                    <span className="absolute inset-0 flex items-center justify-end pe-3 text-slate-50 font-bold text-lg z-10">
                      {card.tite}
                    </span>
                  ) : (
                    card.title
                  )}
                </div>
                <p className="text-gray-700 text-sm text-justify">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className={`max-w-xs w-full h-[550px] rounded-lg overflow-hidden shadow-2xl m-4 transition-transform transform ${swipeDirection === 'left' ? 'animate-slide-out-left' : swipeDirection === 'right' ? 'animate-slide-out-right' : ''}`}>
            <div className="h-40 bg-gray-100 flex items-center justify-center border-b-2">
              <img className="max-h-full object-contain" src={cards[currentCard].image} alt={cards[currentCard].title} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center border-b-2 border-red-900">
                {cards[currentCard].title}
              </div>
              <p className="text-gray-700 text-base text-justify">
                {cards[currentCard].description}
              </p>
            </div>
          </div>
          <div className="flex justify-between w-24 mt-4">
            <button disabled={currentCard === 0} onClick={() => setCurrentCard(currentCard - 1)}>
              <BsChevronCompactLeft size={30} />
            </button>
            <span>{currentCard + 1}/{cards.length}</span>
            <button disabled={currentCard === cards.length - 1} onClick={() => setCurrentCard(currentCard + 1)}>
              <BsChevronCompactRight size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trayectoria;
