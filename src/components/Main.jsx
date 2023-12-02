import MovingText from 'react-moving-text'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa"
import { Link } from 'react-scroll'



const Main = () => {
    const [mainImage, setMainImage] = useState('/samuel-main.jpeg')
    const [isOriginalImage, setIsOriginalImage] = useState(true)
  
    const handleImageClick = () => {
      // Alternar entre las dos imágenes al hacer clic
      if (isOriginalImage) {
        setMainImage('/galeria/samuel-perfil.jpeg')
      } else {
        setMainImage('/samuel-main.jpeg')
      }
      setIsOriginalImage(!isOriginalImage)
    };
  
    return (
      <div name='main' className='w-full h-full bg-white text-grey-900 pb-40'>
          <div className='flex flex-col justify-center items-center w-full h-auto'>
              <div className='sm:text-right pb-8 mt-20 px-4'>
                  <div className='text-center font-thin text-xl sm:text-6xl text-white bg-red-900 bg-opacity-80 rounded-xl px-10 py-4'>
                      <MovingText type="typewriter" dataText={['¿Quien es Samuel Hernández?']} />
                  </div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold cursor-pointer' onClick={handleImageClick}>
                      <img className='rounded-xl' src={mainImage} alt='main image' />
                  </div>
                  <div className='flex items-center'>
                      <p className='text-justify'>
                        Con 31 años de edad, soy originario y residente de Tecámac, Estado de México. Mi formación académica incluye la educación básica local y,
                        a los 17 años, ingresé a la Universidad Autónoma Metropolitana, donde completé la Licenciatura en Administración con especialización en Gestión
                        y Asuntos Públicos. Continué mi trayectoria académica con la Maestría en Planeación y Políticas Metropolitanas.
                        <br /> <br />
                        Desde 2011, soy militante fundador de MORENA y he participado activamente en movimientos sociales y políticos como <a href="https://es.wikipedia.org/wiki/Yo_Soy_132" target='_blank' className='text-red-900 hover:border-b-2'>#YoSoy132.</a>
                        Además, colaboré en las campañas de AMLO en 2012 y 2018. He desempeñado roles importantes, incluyendo servicio público en el gobierno
                        federal, secretario del ayuntamiento de Tecámac, y director general del Organismo Municipal del Agua, ODAPAS. Actualmente,
                        tengo el honor de formar parte del destacado gobierno de Tecámac liderado por la Licenciada Mariela Gutiérrez.
                        <p className='border-t-2 border-black sm:mt-44 mt-20'>¿Quieres saber mas?  <a href="https://es.wikipedia.org/wiki/Samuel_Hernández_Cruz" target='_blank' className='hover:border-b-2 border-red-900'>Visita mi Wiki </a></p>
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Main
