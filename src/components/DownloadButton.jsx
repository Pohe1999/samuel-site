import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // URL_DEL_ARCHIVO debe ser reemplazado con la URL real del archivo
    const fileUrl = '/ENTREVISTA.pdf';
    // Nombre del archivo que se descargará
    const fileName = '/ENTREVISTA.pdf';

    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    // Simular el clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Limpiar el enlace
    document.body.removeChild(link);
  };

  return (
    <button className='border-2 border-gray-200 rounded-lg px-2 py-2' onClick={handleDownload}>
      Descargar Periodico
    </button>
  );
};

export default DownloadButton;
