import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Social from './Social';
import DownloadButton from './DownloadButton';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 15; // Umbral para ocultar el navbar
  const showThreshold = 10;   // Umbral para mostrar el navbar al subir

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si el usuario está en la parte superior de la página
      if (currentScrollY === 0) {
        setShowNavbar(true);
      } 
      // Si se desplaza hacia abajo
      else if (currentScrollY > lastScrollY + scrollThreshold) {
        setShowNavbar(false); // Ocultar navbar
      } 
      // Si se desplaza hacia arriba
      else if (currentScrollY < lastScrollY - showThreshold) {
        setShowNavbar(true); // Mostrar navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <div
        className={`fixed z-50 w-full h-[75px] md:h-[70px] xl:h-[85px] flex font-thin justify-between items-center sm:ps-20 sm:pe-20 px-4 bg-[#821e30] text-gray-200 transition-transform duration-300 shadow-2xl ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ 
          backgroundImage: '', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        <div className='px-3 sm:text-2xl rounded-md py-1'>
          <a href="/" className='border-b-2 font-light'>
            <img src="/logo-diputado.png" alt='logo' className='sm:h-16 h-12' />
          </a>
        </div>

        {/* Menu - oculto en pantallas más pequeñas */}
        <ul className='hidden lg:flex justify-between items-center space-x-5 text-white font-extralight'>
          <li>
            <Link className='cursor-pointer hover:text-gray-300' to='home' smooth={true} duration={1000}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className='cursor-pointer hover:text-gray-300' to='main' smooth={true} duration={1000}>
              ¿Quién soy?
            </Link>
          </li>
          <li>
            <Link className='cursor-pointer hover:text-gray-300' to='comisiones' smooth={true} duration={1000}>
              Comisiones
            </Link>
          </li>
          <li>
            <Link className='cursor-pointer hover:text-gray-300' to='trayectoria' smooth={true} duration={1000}>
              Trayectoria
            </Link>
          </li>
          <li className='relative inline-block font-medium text-[17px] rounded-md bg-black border-none cursor-pointer'>
            <Link to='contacto' smooth={true} duration={1000}>
              <span className='block border-2 border-red-900 rounded-md bg-gray-200 text-black py-2 px-2 transform -translate-y-0.5 transition-transform duration-100 ease-in hover:-translate-y-1 active:translate-y-0'>Contáctame</span>
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='lg:hidden z-10 text-white'>
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>

        {/* Mobile menu */}
        <ul
          className={`${
            !nav
              ? 'hidden opacity-0 transition-opacity duration-300'
              : 'absolute top-0 left-0 w-full h-screen bg-[#821e30] opacity-95 flex flex-col justify-center items-center transition-all ease-in-out duration-300'
          }`}
        >
          <li className='py-6 text-4xl font-extrabold italic'>
            <Link onClick={handleClick} to='home' smooth={true} duration={1000}>
              Inicio
            </Link>
          </li>
          <li className='py-6 text-4xl font-extrabold italic'>
            <Link onClick={handleClick} to='main' smooth={true} duration={1000}>
              ¿Quién soy?
            </Link>
          </li>
          <li className='py-6 text-4xl font-extrabold italic'>
            <Link onClick={handleClick} to='comisiones' smooth={true} duration={1000}>
              Comisiones
            </Link>
          </li>
          <li className='py-6 text-4xl font-extrabold italic'>
            <Link onClick={handleClick} to='trayectoria' smooth={true} duration={1000}>
              Trayectoria
            </Link>
          </li>
          <li className='py-6'>
            <Link
              onClick={handleClick}
              to='contacto'
              smooth={true}
              duration={1000}
              className="relative inline-flex h-20 w-200 text-xl active:scale-95 transition overflow-hidden rounded-lg p-[3px] focus:outline-none"
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_#3e1a78_0%,_#5a2f9d_50%,_#723bb0_100%)]"
              ></span>
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-50 px-7 text-2xl italic font-extrabold text-gray-900 backdrop-blur-3xl gap-2"
              >
                Contáctame
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                  ></path>
                </svg>
              </span>
            </Link>
          </li>
        </ul>     
        {/* Social icons */}
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center my-72">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
