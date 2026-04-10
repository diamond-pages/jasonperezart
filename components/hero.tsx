'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/hero.jpg"
          alt="Jason Perez Art Collective artwork"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-6">
              Jason Perez
              <br />
              <em className="italic text-zinc-300">Art Collective</em>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 max-w-xl leading-relaxed mb-10">
              A professional art brokerage representing over 40 talented artists. 
              From pop art to contemporary — discover and collect exceptional works 
              from across the United States.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#artists" 
                className="btn text-zinc-900 bg-white hover:bg-zinc-100 shadow-lg"
              >
                View Artists
              </Link>
              <Link 
                href="#contact" 
                className="btn text-white bg-transparent border border-white/50 hover:bg-white/10"
              >
                Work With Us
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
