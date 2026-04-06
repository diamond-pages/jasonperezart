'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://static.wixstatic.com/media/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg/v1/fill/w_2500,h_6059,al_c/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg"
          alt="Featured Artwork"
          fill
          className="object-cover object-center scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-[#1a1a1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A55C] to-transparent opacity-50" />
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-[#C9A55C] to-transparent opacity-50" />
      <div className="absolute bottom-1/4 left-20 w-24 h-px bg-gradient-to-r from-transparent via-[#C9A55C] to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#C9A55C] tracking-[0.4em] uppercase text-sm mb-6 font-light">
            Fine Art & Murals
          </p>
        </div>

        <h1
          className={`font-['Cormorant_Garamond'] text-6xl md:text-8xl lg:text-9xl font-light tracking-wide mb-8 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-gold-gradient">Jason Perez</span>
          <br />
          <span className="text-[#F5F3EE]/90 text-4xl md:text-5xl lg:text-6xl">Art</span>
        </h1>

        <p
          className={`text-[#F5F3EE]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Transforming spaces through the power of visual storytelling. 
          Creating immersive experiences that captivate and inspire.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-900 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#gallery"
            className="btn-elegant px-10 py-4 border border-[#C9A55C] text-[#C9A55C] hover:bg-[#C9A55C] hover:text-[#1a1a1a] tracking-[0.2em] uppercase text-sm transition-all duration-300"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            className="btn-elegant px-10 py-4 bg-[#C9A55C] text-[#1a1a1a] hover:bg-[#E8D5A3] tracking-[0.2em] uppercase text-sm transition-all duration-300"
          >
            Commission Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[#C9A55C]/60 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A55C] to-transparent" />
        </div>
      </div>
    </section>
  );
}
