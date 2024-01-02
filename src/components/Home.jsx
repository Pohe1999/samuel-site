import React, { useState, useRef } from 'react';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
    }
  };

  return (
    <div className="flex justify-center items-center sm:h-screen pt-16">
      {!showVideo ? (
        <div className='text-center pt-40'>
          <button
            onClick={handlePlay}
            className="bg-black text-white font-bold py-2 px-4 rounded-lg"
          >
            Reproduce el Mensaje
          </button>
        </div>
      ) : (
        <div className="sm:w-full sm:h-full w-full h-[250px] overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/yktq7IBkKXw?enablejsapi=1&autoplay=0&modestbranding=1&controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            ref={videoRef}
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Home;
