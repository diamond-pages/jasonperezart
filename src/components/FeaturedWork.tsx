'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Wynwood Mural',
    category: 'Commercial',
    image: 'https://static.wixstatic.com/media/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg',
  },
  {
    id: 2,
    title: 'Genesis',
    category: 'Canvas',
    image: 'https://static.wixstatic.com/media/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg',
  },
  {
    id: 3,
    title: 'Coral Dreams',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg',
  },
  {
    id: 4,
    title: 'Brickell Rising',
    category: 'Commercial',
    image: 'https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_1200,h_800,al_c,q_90/01c3aff52f2a4dffa526d7a9843d46ea.png',
  },
];

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-block section-dark">
      <div className="section-content">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="overline mb-4">Featured Work</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
              Selected Projects
            </h2>
          </div>
          <a href="#" className="btn btn-outline-light self-start md:self-auto">
            View All Work
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--warm-gray)] mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </div>

              {/* Info */}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-[var(--stone)] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
