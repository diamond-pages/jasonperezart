'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 overflow-hidden">
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
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/60 via-transparent to-[var(--ink)]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-xl px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          {/* Overline */}
          <p
            className={`text-[var(--text-sm)] tracking-[0.3em] uppercase text-[var(--stone)] mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Muralist &amp; Fine Artist — Miami, FL
          </p>

          {/* Main headline */}
          <h1
            className={`font-display text-[var(--text-display)] text-[var(--paper)] mb-8 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Art that
            <br />
            <em className="text-[var(--terracotta)]">transforms</em>
            <br />
            spaces
          </h1>

          {/* Subtitle */}
          <p
            className={`text-[var(--text-lg)] text-[var(--paper)]/70 max-w-lg leading-relaxed mb-10 transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Large-scale murals and fine art that tell stories, 
            evoke emotion, and create unforgettable environments.
          </p>

          {/* CTA */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="#work" className="btn-primary">
              View Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Start a Project
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 right-6 lg:right-12 hidden lg:flex flex-col items-center gap-3 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[var(--stone)] [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[var(--stone)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
