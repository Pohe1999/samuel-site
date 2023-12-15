import React from 'react';

const DownloadButton = () => {
  const openPdfInNewTab = () => {
    // URL_DEL_ARCHIVO debe ser reemplazado con la URL real del archivo
    const fileUrl = '/ENTREVISTA.pdf';
    
    // Abrir el PDF en una nueva pestaña
    window.open(fileUrl, '_blank');
  };

  return (
    <button className='border-2 border-gray-200 rounded-lg px-2 py-2' onClick={openPdfInNewTab}>
      Abrir Periodico
    </button>
  );
};

export default DownloadButton;
