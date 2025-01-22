import React from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';

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
          <source src="/videos/Drone.mp4" type="video/mp4" />
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
          
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full 
              text-white border border-white/30 
              hover:bg-white/20 hover:border-white/50 hover:scale-105 
              hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] 
              transition-all duration-500 ease-out
              animate-fade-in-scale [animation-delay:1.8s] opacity-0
              relative group overflow-hidden">
              <Link href="/gallery">
              <span className="relative z-10">Explore Gallery</span>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 
                   translate-x-[-200%] translate-y-[-200%] group-hover:translate-x-[200%] group-hover:translate-y-[200%]
                   transition-transform duration-1000 ease-in-out rotate-45">
              </div>
              

          </button>
        </div>
      </div>
    </main>
  );
}