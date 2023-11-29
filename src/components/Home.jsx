import React, { useState, useEffect } from 'react'
import MovingText from 'react-moving-text'
import { FaAngleDown } from "react-icons/fa"

const Home = () => {
  const [showVideo, setShowVideo] = useState(true)
  const [showTransition, setShowTransition] = useState(false)

  useEffect(() => {
    const video = document.getElementById('home-video')

    const handleVideoEnded = () => {
      setShowTransition(true);
      setTimeout(() => {
        setShowVideo(false)
      }, 100) // Delay para la transición
    };

    video.addEventListener('ended', handleVideoEnded)

    return () => {
      video.removeEventListener('ended', handleVideoEnded)
    };
  }, [])

  return (
    <div name="home" className=" pt-14 relative  overflow-hidden">
      {/* Video */}
      {showVideo ? (
        <video
          id="home-video"
          className={`sm:w-full sm:h-full w-full h-full object-cover transition-opacity ${
            showTransition ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
        >
          <source src="/samuel-home-video.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      ) : (
        /* Imagen fija (alternativa al video) */
        <img
          src="/galeria/samuelsi.png"
          alt="Imagen Fija"
          className={`sm:w-full sm:h-full  w-auto h-auto object-cover opacity-80 transition-opacity ${
            showTransition ? 'opacity-100' : 'opacity-0' 
          }`}
        />
      )}

      {/* Contenedor de texto superpuesto */}
      <div className=" top-0 left-0 w-full h-auto flex items-center justify-center z-10 pt-3 font-thin">

       </div>
         
    </div>
  )
}

export default Home