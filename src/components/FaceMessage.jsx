import React from 'react';

const FaceMessage = () => {
  const handleClick = () => {
    window.location.href = 'fb-messenger://user-thread/{Mauricio.Portillo99}'; // Reemplaza {USER_ID} con el ID del usuario al que deseas enviar el mensaje
  };

  return (
    <button onClick={handleClick}>
      Enviar mensaje por Facebook
    </button>
  );
};

export default FaceMessage;
