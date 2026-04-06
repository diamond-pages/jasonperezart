'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const artists = [
  {
    name: 'Jason Perez',
    role: 'Founder & Lead Artist',
    bio: 'Visionary muralist and fine artist with 15+ years transforming spaces across Miami.',
    image: 'https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg',
    social: {
      instagram: '#',
      website: '#',
    },
  },
  {
    name: 'Maria Santos',
    role: 'Senior Muralist',
    bio: 'Specializing in large-scale community murals that celebrate cultural heritage.',
    image: 'https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_400,h_400,al_c,q_85/01c3aff52f2a4dffa526d7a9843d46ea.png',
    social: {
      instagram: '#',
      website: '#',
    },
  },
  {
    name: 'David Chen',
    role: 'Mixed Media Artist',
    bio: 'Blending traditional techniques with digital innovation for unique contemporary pieces.',
    image: 'https://static.wixstatic.com/media/11062b_6e7994bdd94b41178720ff1641a0f323~mv2.png/v1/fill/w_400,h_400,al_c,q_85/11062b_6e7994bdd94b41178720ff1641a0f323~mv2.png',
    social: {
      instagram: '#',
      website: '#',
    },
  },
];

export default function Artists() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="artists"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-gradient-to-b from-[#111] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#C9A55C] tracking-[0.3em] uppercase text-sm mb-4">
            The Collective
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-7xl font-light text-[#F5F3EE]">
            Our <span className="italic text-[#C9A55C]">Artists</span>
          </h2>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {artists.map((artist, index) => (
            <div
              key={artist.name}
              className={`group text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative mb-8 mx-auto w-64 h-64 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-full border border-[#C9A55C]/20 group-hover:border-[#C9A55C]/50 transition-colors duration-500" />
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#C9A55C]/30 transition-all duration-500 scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100" />
              </div>

              {/* Info */}
              <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl text-[#F5F3EE] mb-2 group-hover:text-[#C9A55C] transition-colors duration-300">
                {artist.name}
              </h3>
              <p className="text-[#C9A55C] text-sm tracking-[0.15em] uppercase mb-4">
                {artist.role}
              </p>
              <p className="text-[#F5F3EE]/50 text-sm max-w-xs mx-auto mb-6">
                {artist.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={artist.social.instagram}
                  className="w-10 h-10 border border-[#C9A55C]/30 flex items-center justify-center text-[#C9A55C]/70 hover:bg-[#C9A55C] hover:text-[#1a1a1a] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={artist.social.website}
                  className="w-10 h-10 border border-[#C9A55C]/30 flex items-center justify-center text-[#C9A55C]/70 hover:bg-[#C9A55C] hover:text-[#1a1a1a] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
