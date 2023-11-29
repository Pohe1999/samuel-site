import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import Social from './Social';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full bg-red-900 p-4 z-50" ref={navbarRef}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="sm:text-right flex justify-between">
          <a href="/" className="font-thin  border-b text-white border-white flex items-center">
            <h2>Logo a definir</h2>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex mt-4 sm:space-y-0 space-y-4 text-center md:mt-0 space-x-4 text-white font-thin text-lg">
            <li className='hover:text-gray-300 hover:cursor-pointer'>
              <Link to="home" smooth={true} duration={500}>
                Inicio
              </Link>
            </li>
            <li className='hover:text-gray-300 hover:cursor-pointer'>
              <Link to="main" smooth={true} duration={500}>
                ¿Quien soy?
              </Link>
            </li>
            <li className='hover:text-gray-300 hover:cursor-pointer'>
              <Link to="trayectoria" smooth={true} duration={500}>
                Trayectoria
              </Link>
            </li>
            <li className='hover:text-gray-300 hover:cursor-pointer'>
              <Link to="galeria" smooth={true} duration={500}>
                Galeria
              </Link>
            </li>
            <li className='hover:text-gray-300 hover:cursor-pointer'>
              <Link to="publicaciones" smooth={true} duration={500}>
                Sala de prensa
              </Link>
            </li>
            <li className='hover:cursor-pointer object-contain'>
              <Link className='border-2 border-gray-200 font-medium rounded-md py-1 px-2 bg-gray-200 hover:bg-gray-300 text-black' to="contacto" smooth={true} duration={500}>
                Sumate Hoy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Social />
    </nav>
  );
};

export default Navbar;
