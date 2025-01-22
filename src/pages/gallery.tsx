import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import "../app/globals.css";

export default function ImageGrid() {
  const categories = ["All", "Wildlife", "Events", "Architecture", "Foods", "Products"];
  
  const images = [
    { src: "/images/r2.png", category: "Wildlife" },
    { src: "/images/r3.png", category: "Events" },
    { src: "/images/r4.png", category: "Architecture" },
    { src: "/images/r5.png", category: "Foods" },
    { src: "/images/r6.png", category: "Products" },
    { src: "/images/r7.png", category: "Wildlife" },
    { src: "/images/r8.png", category: "Events" },
    { src: "/images/r9.png", category: "Architecture" },
    { src: "/images/r10.png", category: "Events" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter(img => img.category === selectedCategory);

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);

  return (
    <div className='object-fill'>
      <NavBar />
      <main className="container mx-auto px-4 pt-24 bg-black">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Image
                src={image.src}
                alt={`${image.category} image ${index + 1}`}
                layout="responsive"
                width={500}
                height={300}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4
                              group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm text-white/70 font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}