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
      <div name='main' className='w-full h-full bg-white text-grey-900'>
          <div className='flex flex-col justify-center items-center w-full h-auto'>
              <div className='sm:text-right pb-8 mt-20 px-4'>
                  <div className='text-center font-thin text-xl sm:text-6xl text-white bg-red-900 bg-opacity-80 rounded-xl px-10 py-4'>
                      <MovingText type="typewriter" dataText={['¿Quien es Samuel Hernandez?']} />
                  </div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold' onClick={handleImageClick}>
                      <img className='rounded-xl' src={mainImage} alt='main image' />
                  </div>
                  <div>
                      <p className='text-justify'>
                          Tengo 31 años y he residido toda mi vida en Tecamac Estado de Mexico, aquí cursé la educacion basica y a los 17 años ingresé
                          a  Universidad Autónoma Metropolitana , donde conclui la Licenciatura en Administración con especialización en Gestión y Asuntos
                          Públicos, y posteriormente la Maestría en Planeación y Políticas Metropolitanas. <br /> <br />
                          Soy militante fundador de morena desde el año de 2011, a partir de entonces he participado activamente en dirersos movimientos sociales
                          y politicos como el movimiento <a href="https://es.wikipedia.org/wiki/Yo_Soy_132" className='border-b-2 border-gray-500' target='_blank'>#YoSoy132</a> y las las campañas de AMLO en 2012 y 2018. <br /> <br />
                          He sido servidor publico en el gobierno federal, posteriormente secretario del ayuntamiento de Tecamac y director general del Organismo
                          municipal del agua ODAPAS. <br /> <br />
                          Soy orgullosamente parte del #MejorGobierno de Tecamac encabezado por la Licenciada Mariela Gutierrez.
                      </p>
                      <div className=' text-lg border-black pt-40'>
                          <p className='border-t-2 border-black'>¿Quieres saber mas?  <a href="https://es.wikipedia.org/wiki/Samuel_Hernández_Cruz" target='_blank' className='hover:border-b-2 border-red-900'>Visita mi Wiki </a></p>
                      </div> 
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Main