import React, { useState } from 'react';
import MovingComponent from 'react-moving-text';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Main = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mainImage] = useState('/sam-quiensoy.JPG');

  // Fotos para PC y móvil
  const galleryPhotosMobile = ['/card-1.png', '/card-2.JPG', '/galeria-movil-3.jpeg'];
  const galleryPhotosPC = ['/galeria-1.jpeg', '/galeria-2.jpg', '/galeria-3.JPG'];

  // Función para manejar el clic fuera de la galería
  const handleClickOutside = (e) => {
    if (e.target.id === 'galleryOverlay') {
      setIsGalleryOpen(false);
    }
  };

  // Función para cambiar la imagen actual
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryPhotos.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  // Determinar qué fotos usar dependiendo del dispositivo
  const isMobile = window.innerWidth <= 768;
  const galleryPhotos = isMobile ? galleryPhotosMobile : galleryPhotosPC;

  return (
    <div name="main" className='w-full h-full bg-white text-grey-900 pb-40'>
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        <div className='my-10 container text-center'>
          <div className='sm:text-3xl md:text-4xl text-lg bg-[#821e30] text-white opacity-100 px-2 py-4  font-extrabold italic'>
            <MovingComponent type="typewriter"
              dataText={[
                '¿Quién es Samuel Hernandez?',
              ]} />
          </div>
        </div>
        <div className='max-w-[370px] sm:max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 relative'>
          <div className='sm:text-right text-4xl font-bold sm:mt-2 relative'>
            <img
              className='rounded-xl'
              src={mainImage}
              alt='main image'
            />
            {/* Punto palpitante */}
            <div
              className="absolute inset-0 flex justify-center items-center cursor-pointer"
              onClick={() => setIsGalleryOpen(true)}
            >
              <div className="w-10 h-10 bg-gray-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          <div className='flex items-center'>
            <p className='text-justify'>
              Tengo 32 años, vivo en Tecámac, Estado de México. Soy egresado de la Universidad Autónoma Metropolitana, donde completé
              la Licenciatura en Administración con especialización en Gestión y Asuntos Públicos. Continué mi trayectoria académica
              con la Maestría en Planeación y Políticas Metropolitanas.
              <br /> <br />
              Desde 2011, soy militante fundador de MORENA y he participado activamente en movimientos sociales y políticos, incluyendo campañas de AMLO en 2012 y 2018. 
              He desempeñado roles importantes, incluyendo servicio público en el gobierno federal, secretario del H. Ayuntamiento de Tecámac, 
              y director general del Organismo Municipal del Agua, ODAPAS. Actualmente, tengo el honor de ser Diputado Local por el Distrito 33.
            </p>
          </div>
        </div>
      </div>

      {/* Galería emergente */}
      {isGalleryOpen && (
        <div
          id="galleryOverlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleClickOutside} // Detectar clic fuera del contenido
        >
          <div
            className={`relative ${isMobile ? 'w-full h-full' : 'w-2/3 h-2/3'} flex justify-center items-center`}
          >
            {/* Botón de cierre */}
            <button className="absolute top-2 right-4 text-white text-3xl" onClick={() => setIsGalleryOpen(false)}>✖</button>

            {/* Botones de navegación y foto */}
            <button
              className="absolute left-4 text-white text-4xl"
              onClick={handlePrev}
            >
              <FaChevronLeft />
            </button>

            <img className="max-w-full max-h-full object-contain p-3" src={galleryPhotos[currentImageIndex]} alt={`gallery ${currentImageIndex}`} />

            <button
              className="absolute right-4 text-white text-4xl"
              onClick={handleNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;