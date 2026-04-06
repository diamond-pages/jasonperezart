'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Murals Installed' },
];

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
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg"
                  alt="Jason Perez in studio"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              {/* Decorative offset frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--terracotta)] -z-10" />
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`lg:col-span-7 lg:pl-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="text-[var(--text-xs)] tracking-[0.3em] uppercase text-[var(--stone)] block mb-4">
              About the Artist
            </span>

            <h2 className="font-display text-[var(--text-2xl)] mb-8 text-balance">
              Creating visual narratives that 
              <em className="text-[var(--terracotta)]"> resonate</em>
            </h2>

            <div className="space-y-6 text-[var(--text-base)] text-[var(--ink)]/80 leading-relaxed">
              <p>
                Jason Perez is a Miami-based artist whose work bridges the gap between 
                fine art and public installations. With over fifteen years of experience, 
                he has developed a distinctive visual language that combines bold color, 
                intricate detail, and emotional depth.
              </p>
              <p>
                His murals have transformed spaces across South Florida—from the 
                vibrant walls of Wynwood to corporate headquarters, boutique hotels, 
                and private residences. Each piece begins with a story: understanding 
                the space, the people who inhabit it, and the emotions it should evoke.
              </p>
              <p>
                Beyond public work, Jason creates intimate canvas pieces and accepts 
                select commissions for collectors seeking something truly original.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-[var(--ink)]/10">
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <div key={stat.label}>
                    <p
                      className={`font-display text-[var(--text-2xl)] text-[var(--terracotta)] transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${600 + i * 100}ms` }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[var(--text-xs)] tracking-wider uppercase text-[var(--stone)] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
