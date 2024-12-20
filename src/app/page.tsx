import React from 'react';
import NavBar from '../components/NavBar';

const VideoPlayer: React.FC = () => {
  return (
    <div>
      <NavBar />
      <video autoPlay muted loop className="w-full h-screen object-cover">
        <source src="/videos/Drone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;