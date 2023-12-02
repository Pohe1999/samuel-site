import { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Galeria = () => {
  const slides = [
    {
        url: '/galeria/galeria-9.jpeg'
    },
    {
        url: '/galeria/galeria-3.jpeg'
    },
    {
        url: '/galeria/galeria-4.jpeg'
    },
    {
        url: '/galeria/galeria-5.jpeg'
    },
    {
        url: '/galeria/galeria-7.jpeg'
    },
    {
        url: '/galeria/galeria-8.jpg'
    },
    {
        url: '/galeria/galeria-1.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }

    touchStartX.current = null;
  };

  return (
    <div name="galeria" className='max-w-[1400px] sm:h-[880px] h-[580px] w-full m-auto py-16 px-4 relative group'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className='sm:text-center pb-8 pt-4 px-4'>
        <h2 className='text-4xl font-ubuntu font-semibold inline border-b-4 text-gray-900 border-red-700'>Galeria</h2>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-red-700' : 'text-white'}`}
          >
            <RxDotFilled className="text-gray-700" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
