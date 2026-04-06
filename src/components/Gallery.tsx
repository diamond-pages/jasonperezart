'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const artworks = [
  {
    id: 1,
    title: 'Urban Dreams',
    category: 'Mural',
    image: 'https://static.wixstatic.com/media/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg',
    size: 'large',
  },
  {
    id: 2,
    title: 'Golden Hour',
    category: 'Canvas',
    image: 'https://static.wixstatic.com/media/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg/v1/fill/w_600,h_900,al_c,q_85/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg',
    size: 'tall',
  },
  {
    id: 3,
    title: 'Reflections',
    category: 'Mixed Media',
    image: 'https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg',
    size: 'square',
  },
  {
    id: 4,
    title: 'Chromatic Burst',
    category: 'Canvas',
    image: 'https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_600,h_600,al_c,q_85/01c3aff52f2a4dffa526d7a9843d46ea.png',
    size: 'square',
  },
  {
    id: 5,
    title: 'Neon Nights',
    category: 'Mural',
    image: 'https://static.wixstatic.com/media/11062b_6e7994bdd94b41178720ff1641a0f323~mv2.png/v1/fill/w_600,h_600,al_c,q_85/11062b_6e7994bdd94b41178720ff1641a0f323~mv2.png',
    size: 'square',
  },
  {
    id: 6,
    title: 'Abstract Flow',
    category: 'Canvas',
    image: 'https://static.wixstatic.com/media/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg',
    size: 'wide',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Mural', 'Canvas', 'Mixed Media'];

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

  const filteredArtworks = activeFilter === 'All' 
    ? artworks 
    : artworks.filter(art => art.category === activeFilter);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-gradient-to-b from-[#1a1a1a] via-[#111] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#C9A55C] tracking-[0.3em] uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-7xl font-light text-[#F5F3EE]">
            Featured <span className="italic text-[#C9A55C]">Works</span>
          </h2>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#C9A55C] text-[#1a1a1a]'
                  : 'border border-[#C9A55C]/30 text-[#F5F3EE]/70 hover:border-[#C9A55C] hover:text-[#C9A55C]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`group artwork-card cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${
                artwork.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                artwork.size === 'tall' ? 'md:row-span-2' :
                artwork.size === 'wide' ? 'md:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`relative overflow-hidden ${
                artwork.size === 'tall' ? 'aspect-[3/4]' :
                artwork.size === 'wide' ? 'aspect-[2/1]' :
                artwork.size === 'large' ? 'aspect-square' : 'aspect-square'
              }`}>
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#C9A55C] text-xs tracking-[0.2em] uppercase mb-2">
                    {artwork.category}
                  </p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#F5F3EE]">
                    {artwork.title}
                  </h3>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#C9A55C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#C9A55C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#"
            className="btn-elegant inline-block px-10 py-4 border border-[#C9A55C] text-[#C9A55C] hover:bg-[#C9A55C] hover:text-[#1a1a1a] tracking-[0.2em] uppercase text-sm transition-all duration-300"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
