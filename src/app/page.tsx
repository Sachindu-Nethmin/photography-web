import React from 'react';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <NavBar />
      <div className="relative w-full h-screen">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="videos/moring.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Text Container */}
        <div className="absolute left-12 top-1/3 z-10 text-white max-w-xl p-6">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">
            Capturing Moments
          </h1>
          <p className="text-xl text-white/90 mb-6 animate-fade-in-up [animation-delay:0.7s] opacity-0">
            Professional photography that tells your story through the lens of creativity and passion.
          </p>
        </div>
      </div>
    </main>
  );
}