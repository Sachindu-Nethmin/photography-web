import Image from 'next/image';
import React from 'react';
import NavBar from '../components/NavBar';
import "../app/globals.css";

export default function ImageGrid() {
  const images = [
    "/images/Events/DJI_20240707100900_0062_D.png",
    "/images/Events/DJI_20240819065844_0087_D.png",
    "/images/Events/DJI_20240819071617_0117_D.png",
    "/images/Events/DJI_20241015174233_0046_D.png",
    "/images/Events/DJI_20241020062900_0388_D.png",
    "/images/Events/DJI_20241206162521_0123_D.png",
    "/images/Events/GOPR1175.png",
    "/images/Events/GOPR1393.png",
    "/images/Events/GOPR1552.png",
    "/images/Events/GOPR4026.jpg",
    "/images/Events/GOPR4066.png",
    "/images/Events/GOPR4362.png",
    "/images/Events/GOPR4380.png",
    "/images/Events/GOPR4461.jpg",
    "/images/Events/GOPR4663.png",
    "/images/Events/GOPR4681.jpg",
    "/images/Events/GOPR4752.png",
    "/images/Events/GOPR4831.png"
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