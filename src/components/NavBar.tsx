import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed w-full h-16 px-6 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20 animate-fade-in-down opacity-0">
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
          <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="text-white/90 hover:text-white transition-colors duration-300">
            Contact
          </Link>
          <Link href="/gallery" className="text-white/90 hover:text-white transition-colors duration-300">
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;