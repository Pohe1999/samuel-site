import React, { useState } from 'react';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState(''); // Estado para almacenar la URL del video

  const handlePlay = () => {
    setShowVideo(true);
    setVideoSrc('https://www.youtube.com/embed/IMDpyTP6qqE?si=iqLbHxjwc4HtS4L9&autoplay=1&modestbranding=1&controls=0');
  };

  return (
    <div className="flex justify-center items-center sm:h-screen pt-16 bg-black">
      {!showVideo ? (
        <div className='text-center'>
          <button
            onClick={handlePlay}
            className="bg-red-900 my-28 text-white font-normal py-2 px-4 rounded-lg"
          >
            Reproduce el Mensaje
          </button>
        </div>
      ) : (
        <div className="sm:w-full sm:h-full w-full h-[250px] overflow-hidden">
          <iframe
            className="w-full h-full"
            src={videoSrc} // Utiliza el estado videoSrc como src del iframe
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Home;
