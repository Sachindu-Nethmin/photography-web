import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed w-full h-16 px-6 z-50 bg-black/50 backdrop-blur-sm border-b border-black/20 animate-fade-in-down opacity-100">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <Link href="/" className="text-white">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={150}
            height={50}
            priority
            className="object-contain"
          />
        </Link>
        <div className="flex gap-6">
        <Link href="/" className="text-white/90 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link href="/Wildlife" className="text-white/90 hover:text-white transition-colors duration-300">
          Wildlife
          </Link>
          <Link href="/Events" className="text-white/90 hover:text-white transition-colors duration-300">
          Events
          </Link>
          <Link href="/Architecture " className="text-white/90 hover:text-white transition-colors duration-300">
          Architecture
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;