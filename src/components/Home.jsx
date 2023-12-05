import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaRedo } from 'react-icons/fa'; // Importa el ícono de reinicio (FaRedo)
import { GoArrowUp } from 'react-icons/go';
import AlertaTemporal from './Alerta';

const Home = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [showReplayIcon, setShowReplayIcon] = useState(false); // Utiliza una variable para controlar el ícono de reinicio
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnded = () => {
      setShowPlayButton(false);
      setShowReplayIcon(true); // Muestra el ícono de reinicio después de que el video termine
      video.style.opacity = 0.85;
    };

    video.addEventListener('ended', handleVideoEnded);

    return () => {
      video.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    video.play();
    setShowPlayButton(false);
  };

  const handleReplay = () => {
    const video = videoRef.current;
    video.currentTime = 0;
    video.play();
    setShowReplayIcon(false); // Oculta el ícono de reinicio al hacer clic en él
    video.style.opacity = 1; // Restaura la opacidad del video
  };

  return (
    <div name="home" className="pt-14 overflow-hidden relative">
      <AlertaTemporal />
      {/* Video */}
      {showVideo ? (
        <div className="relative">
          <video
            ref={videoRef}
            id="home-video"
            className={`sm:w-full sm:h-full w-full h-full object-cover transition-opacity border-2 border-black`}
            playsInline
          >
            <source src="/samuel-home-2.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
          {showPlayButton && (
            <button
              onClick={handlePlay}
              className={`absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none outline-none text-white cursor-pointer opacity-100 transition-opacity`}
            >
              <FaPlay className=" text-slate-800" size={30} />
            </button>
          )}
        </div>
      ) : (
        /* Imagen fija (alternativa al video) */
        <img
          src="/galeria/samuelsi.png"
          alt="Imagen Fija"
          className={`sm:w-full sm:h-full w-auto h-auto object-cover opacity-80 transition-opacity`}
        />
      )}

      {/* Icono de reinicio */}
      {showReplayIcon && (
        <button onClick={handleReplay} className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none outline-none text-black hover:text-gray-800 text-xl cursor-pointer">
          <FaRedo size={30} /> {/* Utiliza el ícono de reinicio (FaRedo) */}
        </button>
      )}

      {/* Contenedor de texto superpuesto */}
      <div className="top-0 left-0 w-full h-auto flex items-center justify-center z-10 pt-3 font-thin sm:hidden">
        <GoArrowUp />
        {/* Contenido del texto */}
        {showPlayButton ? (
          <h3 className="border-b-2">Reproduce el mensaje</h3>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
