import React, { useState, useEffect, useRef } from 'react'
import { FaAngleDown, FaPlay } from 'react-icons/fa'
import { GoArrowUp } from "react-icons/go"

const Home = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnded = () => {
      setShowTransition(true);
      setTimeout(() => {
        setShowVideo(false);
        setShowPlayButton(false); // Oculta el botón después de que el video haya terminado
      }, 100); // Delay para la transición
    };

    video.addEventListener('ended', handleVideoEnded);

    return () => {
      video.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    video.play();
    setShowPlayButton(false); // Oculta el botón al hacer clic en reproducir
  };

  return (
    <div name="home" className="pt-14 overflow-hidden relative">
      {/* Video */}
      {showVideo ? (
        <div className="relative">
          <video
            ref={videoRef}
            id="home-video"
            className={`sm:w-full sm:h-full w-full h-full object-cover transition-opacity`}
          >
            <source src="/samuel-home-video.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
          {showPlayButton && (
            <button
              onClick={handlePlay}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none outline-none text-white cursor-pointer ${
                showTransition ? 'opacity-0' : 'opacity-100'
              }`}
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