'use client'

import Image from 'next/image'

const featuredArtists = [
  {
    name: 'Jason Skeldon',
    style: 'Fire Art / Non-Traditional',
    description: 'Non-traditional artist working with fire, spray paints, acrylics, and resins. Art style influenced by pop culture and current events.',
    image: 'https://static.wixstatic.com/media/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85/868e3a_b6eedeb58cf4496bbe223ae730408808~mv2.jpg',
  },
  {
    name: 'Linda Himeur',
    style: 'Crystal Art',
    description: 'Fine artist with a passion for shine and Swarovski crystals, placing tens of thousands by hand with tweezers.',
    image: 'https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_600,h_600,al_c,q_90/01c3aff52f2a4dffa526d7a9843d46ea.png',
  },
  {
    name: 'Cody Parker',
    style: 'Optical Illusion',
    description: 'Creates images that change depending on viewing distance — six to twelve feet to capture the full effect.',
    image: 'https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg',
  },
  {
    name: 'Captain Casual',
    style: 'Pop Art',
    description: 'Bold pop art that captures the energy of contemporary culture with vibrant colors and playful imagery.',
    image: 'https://static.wixstatic.com/media/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85/868e3a_fd1ed7dc1bef4c30a59684eea6faa75e~mv2.jpg',
  },
]

export default function Artists() {
  return (
    <section id="artists" className="py-20 md:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-zinc-500 mb-3">
              The Collective
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Featured Artists
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md">
            Pop art, street art, contemporary, and fine art — discover exceptional 
            works from our collective of 40+ artists.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtists.map((artist) => (
            <article
              key={artist.name}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden bg-zinc-800">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info - Always visible */}
              <div className="pt-4">
                <h3 className="font-playfair text-xl text-white group-hover:text-zinc-300 transition-colors">
                  {artist.name}
                </h3>
                <p className="text-sm text-zinc-500">{artist.style}</p>
              </div>

              {/* Description - Shows on hover */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white/80 line-clamp-3">
                  {artist.description}
                </p>
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
            View All 40+ Artists
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
