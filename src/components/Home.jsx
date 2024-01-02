import React, { useState } from 'react';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
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
        <div className="sm:w-full sm:h-full w-full h-[210px] overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/yktq7IBkKXw?si=zS69JfaQDbsHhRKV&autoplay=1&modestbranding=1&controls=0"
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
