'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Overline */}
            <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6">
              Miami Muralist &amp; Fine Artist
            </p>

            {/* Headline */}
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-6">
              Transforming Spaces
              <br />
              <em className="italic text-zinc-300">Through Art</em>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 max-w-xl leading-relaxed mb-10">
              Large-scale murals and fine art that tell stories, create atmosphere, 
              and leave lasting impressions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#work" 
                className="btn text-zinc-900 bg-white hover:bg-zinc-100 shadow-lg"
              >
                View Portfolio
              </Link>
              <Link 
                href="#contact" 
                className="btn text-white bg-transparent border border-white/50 hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-8 right-8 flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
