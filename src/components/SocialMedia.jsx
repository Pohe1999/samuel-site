import React from 'react';
import SendMessage from './SendMessage';
import { FaInstagram, FaFacebookF, FaWikipediaW } from 'react-icons/fa'
import Social from './Social';

function SocialMediaButtons() {
  return (
    <div className="flex flex-col min-h-screen bg-center bg-cover bg-no-repeat">
      <div className="mx-auto p-8 md:p-20 space-y-8 md:space-y-10 bg-gray-200 rounded-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold">
          <span className='text-red-900'>S</span >úmate <span className='text-red-900'>H</span>oy al <span className='text-red-900'>C</span>ambio
        </h1>
        <h3 className='text-center font-light text-xl text-black'>Súmate a mis redes sociales o enviame un WhatsApp:</h3>
        <div className="">
          <div className="flex justify-between">
              <a href="https://www.facebook.com/samuelhernandez2021" target='_blank' rel="noopener noreferrer" className='bg-blue-500 hover:opacity-80 duration-500 px-8 md:px-8 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-xl'>
                <FaFacebookF className='text-3xl md:text-4xl' />
              </a>
              <a href="https://www.instagram.com/hrnndzsamuel/" alt="insta" target='_blank' rel="noopener noreferrer" className='bg-purple-500  hover:opacity-80 duration-500 px-8 md:px-8 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-xl'>
                <FaInstagram className='text-3xl md:text-4xl' />
              </a>
              <a href="https://es.wikipedia.org/wiki/Samuel_Hern%C3%A1ndez_Cruz" target='_blank' alt="wiki" className='inline-flex text-center justify-center items-center hover:opacity-80 duration-500  px-6 md:px-8 py-2 font-semibold bg-green-500 rounded-xl'>
                <SendMessage className='text-3xl md:text-4xl' />
              </a>
          </div>
        </div>
        <div className=' p-4 md:p-6 rounded'>
          <form
            method='POST'
            action="https://getform.io/f/541c8335-5a38-4154-9640-2e50cc7bb436"
            className='flex flex-col max-w-[600px] w-full'
          >
            <div>
              <p className='text-2xl md:text-3xl'>Envíame un correo y súmate:</p>
            </div>
            <input className='border-2 rounded-lg py-2 my-1 text-lg md:text-xl' type="text" placeholder='Nombre' name="name" required/>
            <input className='border-2 rounded-lg py-2 my-1 text-lg md:text-xl' type="email" placeholder='Escribe tu Email' name="email" required/>
            <textarea className='border-2 rounded-lg py-10 text-lg md:text-xl' name="message" rows="4" placeholder='Mensaje' required></textarea>
            <button className='border-red-900 border-2 hover:bg-red-900 hover:text-white rounded-xl duration-300 py-2 mt-10'>// Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaButtons;

