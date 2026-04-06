'use client'

import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Wynwood Walls',
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
]

const categories = ['All', 'Commercial', 'Residential', 'Canvas']

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="work" className="py-20 md:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-zinc-500 mb-3">
              Portfolio
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Selected Work
            </h2>
          </div>
          
          {/* Filter */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-white text-zinc-900'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden bg-zinc-800 cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3 className="font-playfair text-2xl text-white">
                  {project.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-4 h-4 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white border border-zinc-700 px-6 py-3 hover:bg-zinc-800 transition-colors"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
