'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A55C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg"
                alt="Jason Perez"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Frame decoration */}
              <div className="absolute inset-4 border border-[#C9A55C]/30 pointer-events-none" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A55C]/20" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#C9A55C]/20" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <p className="text-[#C9A55C] tracking-[0.3em] uppercase text-sm mb-4">
              The Artist
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-light mb-8 text-[#F5F3EE]">
              About <span className="italic text-[#C9A55C]">Jason</span>
            </h2>
            
            <div className="space-y-6 text-[#F5F3EE]/70 text-lg leading-relaxed">
              <p>
                Jason Perez is a Miami-based artist whose work transcends traditional boundaries, 
                blending fine art techniques with contemporary urban aesthetics. His journey began 
                on the streets, where he discovered the transformative power of public art.
              </p>
              <p>
                Today, his murals grace buildings across South Florida, while his studio pieces 
                find homes in private collections worldwide. Each creation tells a story—a visual 
                narrative that speaks to the soul and transforms ordinary spaces into extraordinary 
                experiences.
              </p>
              <p>
                With a philosophy rooted in authenticity and emotional connection, Jason approaches 
                every project as an opportunity to create something meaningful, lasting, and 
                profoundly beautiful.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <p className="font-['Cormorant_Garamond'] text-4xl text-[#C9A55C]">15+</p>
                <p className="text-[#F5F3EE]/50 text-sm tracking-wider uppercase">Years</p>
              </div>
              <div className="w-px h-16 bg-[#C9A55C]/30" />
              <div className="text-center">
                <p className="font-['Cormorant_Garamond'] text-4xl text-[#C9A55C]">200+</p>
                <p className="text-[#F5F3EE]/50 text-sm tracking-wider uppercase">Projects</p>
              </div>
              <div className="w-px h-16 bg-[#C9A55C]/30" />
              <div className="text-center">
                <p className="font-['Cormorant_Garamond'] text-4xl text-[#C9A55C]">50+</p>
                <p className="text-[#F5F3EE]/50 text-sm tracking-wider uppercase">Murals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
