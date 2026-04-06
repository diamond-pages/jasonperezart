'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Wynwood Walls',
    category: 'Mural',
    year: '2024',
    image: 'https://static.wixstatic.com/media/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg',
    aspect: 'landscape',
  },
  {
    id: 2,
    title: 'Genesis',
    category: 'Canvas',
    year: '2024',
    image: 'https://static.wixstatic.com/media/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg/v1/fill/w_800,h_1200,al_c,q_85/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg',
    aspect: 'portrait',
  },
  {
    id: 3,
    title: 'Coral Dreams',
    category: 'Commission',
    year: '2023',
    image: 'https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg',
    aspect: 'square',
  },
  {
    id: 4,
    title: 'Brickell Rising',
    category: 'Mural',
    year: '2023',
    image: 'https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_1200,h_800,al_c,q_90/01c3aff52f2a4dffa526d7a9843d46ea.png',
    aspect: 'landscape',
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding bg-[var(--ink)]">
      <div className="container-xl">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <span className="text-[var(--text-xs)] tracking-[0.3em] uppercase text-[var(--stone)] block mb-4">
            Selected Work
          </span>
          <h2 className="font-display text-[var(--text-2xl)] text-[var(--paper)] max-w-2xl text-balance">
            Projects that push boundaries and create lasting impressions
          </h2>
        </div>

        {/* Project Grid - Asymmetric Layout */}
        <div className="space-y-8 lg:space-y-16">
          {/* Row 1 - Large + Small */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div
              data-index="0"
              className={`lg:col-span-8 transition-all duration-700 ${
                visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <ProjectCard project={projects[0]} />
            </div>
            <div
              data-index="1"
              className={`lg:col-span-4 transition-all duration-700 delay-200 ${
                visibleItems.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <ProjectCard project={projects[1]} />
            </div>
          </div>

          {/* Row 2 - Small + Large */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div
              data-index="2"
              className={`lg:col-span-5 transition-all duration-700 ${
                visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <ProjectCard project={projects[2]} />
            </div>
            <div
              data-index="3"
              className={`lg:col-span-7 transition-all duration-700 delay-200 ${
                visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <ProjectCard project={projects[3]} />
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-16 lg:mt-24 text-center">
          <a href="#" className="btn-outline">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <article className="group relative cursor-pointer">
      {/* Image */}
      <div className={`relative overflow-hidden bg-[var(--stone)]/20 ${
        project.aspect === 'portrait' ? 'aspect-[3/4]' :
        project.aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
      }`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/30 transition-all duration-500" />
      </div>

      {/* Info */}
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-[var(--text-xl)] text-[var(--paper)] group-hover:text-[var(--terracotta)] transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--text-sm)] text-[var(--stone)]">
            {project.category}
          </p>
        </div>
        <span className="text-[var(--text-sm)] text-[var(--stone)]">
          {project.year}
        </span>
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--paper)] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <svg className="w-4 h-4 text-[var(--ink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </article>
  );
}
