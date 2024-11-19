import React, { useState } from 'react';
import SocialButtons from './SocialButtons';

const Contact = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', nombre);
        formData.append('email', email);
        formData.append('telefono', telefono);
        formData.append('message', mensaje);

        fetch('https://getform.io/f/bqoonrvb', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert('Mensaje enviado con éxito');
                setNombre('');
                setTelefono('');
                setEmail('');
                setMensaje('');
            } else {
                alert('Hubo un problema al enviar el mensaje');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje');
        });
    };

    return (
        <section name="contacto" className="bg-gray-100 py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center pb-10">
                    <h2 className='text-4xl font-bold inline border-b-4 border-[#821e30]'>Contacto</h2>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2 md:pr-8">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                            <h2 className="text-xl font-bold inline border-b-4 border-[#821e30]">Envíame un correo aqui:</h2>
                            <div className="mb-4 mt-7">
                                <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-1">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-red-500 transition duration-200 ease-in-out"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-red-500 transition duration-200 ease-in-out"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="numero" className="block text-gray-700 font-semibold mb-1">Teléfono</label>
                                <input
                                    type="numero"
                                    id="telefono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-red-500 transition duration-200 ease-in-out"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-1">Mensaje</label>
                                <textarea
                                    id="mensaje"
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-red-500 transition duration-200 ease-in-out"
                                    required
                                ></textarea>
                            </div>
                            <div className='flex justify-end'>
                                <button className="button relative cursor-pointer border-none text-white w-40 h-40 rounded-full overflow-hidden grid place-content-center transition-background 300ms transform transition-transform duration-200 font-semibold">
                                    <p className="button__text">
                                    <span style={{ '--index': 0 }}>E</span>
                                    <span style={{ '--index': 1 }}>N</span>
                                    <span style={{ '--index': 2 }}>V</span>
                                    <span style={{ '--index': 3 }}>I</span>
                                    <span style={{ '--index': 4 }}>A</span>
                                    <span style={{ '--index': 5 }}>R</span>
                                    <span style={{ '--index': 6 }}> </span>
                                    <span style={{ '--index': 7 }}> </span>
                                    <span style={{ '--index': 8 }}> </span>
                                    <span style={{ '--index': 9 }}>E</span>
                                    <span style={{ '--index': 10 }}>N</span>
                                    <span style={{ '--index': 11 }}>V</span>
                                    <span style={{ '--index': 12 }}>I</span>
                                    <span style={{ '--index': 13 }}>A</span>
                                    <span style={{ '--index': 14 }}>R</span>
                                    </p>

                                    <div className="button__circle">
                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="button__icon"
                                            width="14"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>

                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            width="14"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="button__icon button__icon--copy"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0">
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 transform transition-transform hover:scale-105">
                            <h3 className="text-xl font-bold mb-4 text-[#821e30] text-center">¡Sígueme en mis redes 2 sociales!</h3>
                            <SocialButtons />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
