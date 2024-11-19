import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { FaArrowDown } from "react-icons/fa";import '../index.css'
import { Link } from 'react-scroll'
import Social from './Social'

const largeImages = [
    '/samuel-movil-1.JPG',
    '/galeria-3.JPG',
    '/samuel-movil-2.JPG'
]

const mobileImages = [
    '/sam-home-1.JPG',
    '/sam-home-2.jpeg',
    '/sam-home-3.jpeg'
]

const MainPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const images = isMobile ? mobileImages : largeImages

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [images.length])

    const transitions = useTransition(currentIndex, {
        key: currentIndex,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        config: { duration: 2000 },
    })

    return (
        <div name="home" className="">
            <div className="welcome-section relative text-center py-20 h-screen">
                <div className="absolute inset-0 z-0">
                    {transitions((style, index) => (
                        <animated.div
                            key={index}
                            className="absolute inset-0"
                            style={{
                                ...style,
                                backgroundImage: `url(${images[index]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    ))}
                </div>

                {/* Capa semi-transparente encima del carrusel */}
                <div className="absolute inset-0 bg-orange-50 opacity-10 z-10"></div>

                {/* Animación de flecha hacia abajo */}
                <div className="absolute bottom-10 left-5 z-20 bg-gray-50 p-3 rounded-full opacity-80"> {/* Cambiar a left-5 para el extremo izquierdo */}
                    <Link className='main__scroll cursor-pointer' to='main' smooth={true} duration={1000}>
                        <FaArrowDown className="text-black text-4xl animate-bounce" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainPage