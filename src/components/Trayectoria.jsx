import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const Trayectoria = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Establece el ancho mínimo para dispositivos de escritorio
  let swipeStartX = 0;
  let swipeEndX = 0;

  const cards = [
    {
        title: "Participación política",
        image: "/morena-logo.png",
        description:
          "Fui fundador de MORENA desde 2011 y activista en el movimiento estudiantil #YoSoy132, siendo portavoz. Además, En 2015 coordine la campaña de Morena en Tecámac para la alcaldía. En 2018, colaboró en la campaña de Andrés Manuel López Obrador.",
      },
      {
        title: "Participación ISSSTE",
        image: "/gobierno-logo.png",
        description:
          "Colabore junto al presidente de Mexico en el sector salud, donde llevamos a cabo la contratacion de mas de 6 mil medicos y enfermeras para atender la pandemia del COVID-19. Trabajamos para combatir la corrupcion en el ISSSTE.",
      },
      {
        title: "Secretario de ayuntamiento",
        image: "/tecamac-logo.png",
        description:
          "En julio de 2021 fui designado Secretario del Ayuntamiento de Tecámac cargo en el que impulse convenios con el ISSSTE para llevar a cabo la construcción de la nueva Clínica de Medicina Familiar  en Tecámac y el Centro de Innovación y Desarrollo Tecnológico de la UAM.",
      },
      {
        title: "Director de ODAPAS",
        image: "/odapas-logo.png",
        description:
          "En septiembre de 2022, fui designado Director general del ODAPAS, donde incrementamos la recaudación, apoyando a mas de 30 mil familias para regularizarse y ejecutamos el programa de obra hidraulica mas grande en 31 años, invirtiendo mas de 200 millones de pesos en beneficio de los tecamaquenses.",
      },
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
    } else if (swipeDistance < -50 && currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  return (
    <div name="trayectoria" className="pt-40 h-full w-screen mb-44"
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
      onMouseDown={handleSwipeStart}
      onMouseUp={handleSwipeEnd}
    >
      <div className="text-center pb-10">
        <h2 className='text-4xl font-bold inline border-b-4  border-red-700'>Trayectoria</h2>
      </div>
      {isDesktop ? (
        <div className="flex flex-wrap justify-center">
          {cards.map((card, index) => (
            <div key={index} className="max-w-xs rounded-md overflow-hidden shadow-lg m-4">
              <div className="border-4">
                <img className="" src={card.image} alt="Placeholder" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 border-b-2 border-red-900">
                  {card.title}
                </div>
                <p className="text-gray-700 text-base text-justify">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="max-w-xs h-[450px] rounded-md overflow-hidden shadow-lg m-4">
            <div className="border-4">
              <img className="" src={cards[currentCard].image} alt="Placeholder" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 border-b-2 border-red-900">
                {cards[currentCard].title}
              </div>
              <p className="text-gray-700 text-base text-justify">
                {cards[currentCard].description}
              </p>
            </div>
          </div>
          <div className="flex justify-between w-24">
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
