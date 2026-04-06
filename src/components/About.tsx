'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-block">
      <div className="section-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg"
                alt="Jason Perez"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <p className="overline mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
              The Artist
            </h2>

            <div className="space-y-6 text-lg text-[var(--stone)] leading-relaxed">
              <p>
                Jason Perez is a Miami-based muralist and fine artist with over 
                15 years of experience transforming spaces through art. His work 
                combines bold color, intricate detail, and emotional depth to 
                create pieces that resonate.
              </p>
              <p>
                From the vibrant walls of Wynwood to corporate headquarters and 
                private residences, Jason&apos;s murals have become landmarks across 
                South Florida. Each project begins with understanding the space, 
                the people, and the story that needs to be told.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[var(--ink)]/10">
              {[
                { value: '15+', label: 'Years' },
                { value: '200+', label: 'Projects' },
                { value: '50+', label: 'Murals' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl md:text-5xl text-[var(--accent)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--stone)] uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary mt-10">
              Work With Jason
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
