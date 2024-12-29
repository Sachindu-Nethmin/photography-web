import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="./images/r1.png" alt="Gallery image" />
        </div>
      </div>
    </div>
  );
}