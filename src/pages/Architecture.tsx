import Image from 'next/image';
import React from 'react';
import NavBar from '../components/NavBar';
import "../app/globals.css";

export default function ImageGrid() {
  const images = [
    "/images/Architecture/DJI_20240824174754_0168_D.png",
    "/images/Architecture/DJI_20240824175144_0177_D.png",
    "/images/Architecture/DSC01536.jpg",
    "/images/Architecture/GOPR2740.png",
    "/images/Architecture/GOPR2755.png",
    "/images/Architecture/GOPR3756.png",
    "/images/Architecture/GOPR4016.png",
    "/images/Architecture/RHW00510.jpg",
    "/images/Architecture/RHW00514.jpg",
    "/images/Architecture/RHW00522.jpg"
    
  ];

  return (
    <div className="min-h-screen bg-black-50">
      <NavBar />
      <main className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                loading={index < 2 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}