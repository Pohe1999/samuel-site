import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Social from './Social'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed z-50 w-full h-[60px] flex font-thin justify-between items-center sm:ps-20 sm:pe-20 px-4 bg-red-900 text-gray-300'>
      <div className='bg-gray-200 rounded-xl px-3 sm:text-2xl'>
        <a href="/" className='text-black font-light'>
          <span className='text-red-900'>#</span>Samuel<span className='text-red-900'>Si</span>
        </a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex justify-between space-x-5 text-white'>
        <li>
          <Link to='home' smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to='main' smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to='trayectoria' smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='galeria' smooth={true} duration={1000}>
            Work
          </Link>
        </li>
        <li>
          <Link to='publicaciones' smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
        <li>
          <Link to='contacto' smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          !nav
            ? 'hidden opacity-0 transition-opacity duration-300'
            : 'absolute top-0 left-0 w-full h-screen bg-red-900 opacity-95 flex flex-col justify-center items-center transition-all ease-in-out duration-300'
        }`}
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={1000}>
            Inicio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='main' smooth={true} duration={1000}>
            ¿Quien soy?
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='trayectoria' smooth={true} duration={1000}>
            Trayectoria
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='galeria' smooth={true} duration={1000}>
            Galeria
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='publicaciones' smooth={true} duration={1000}>
            Sala de prensa
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contacto' smooth={true} duration={1000}>
            Sumate Hoy
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className=' lg:flex fixed flex-col top-[35%] left-0'>
        <Social />
      </div>
    </div>
  )
}

export default Navbar
