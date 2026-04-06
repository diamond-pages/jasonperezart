'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://static.wixstatic.com/media/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg"
          alt="Mural artwork by Jason Perez"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          {/* Overline */}
          <p
            className={`text-[var(--accent)] text-sm tracking-[0.3em] uppercase mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Miami Muralist &amp; Fine Artist
          </p>

          {/* Main Headline */}
          <h1
            className={`font-display text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Transforming Spaces
            <br />
            <span className="italic">Through Art</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-white/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10 transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Large-scale murals and fine art that tell stories, create atmosphere, 
            and leave lasting impressions.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="#work" className="btn btn-light">
              View Portfolio
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 right-6 md:right-12 lg:right-20 hidden md:flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white/60 text-xs tracking-widest uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
