'use client'

import Image from 'next/image'
import Counter from '@/components/counter'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85/868e3a_48e0f04189364edab901255b9bef9739~mv2.jpg"
                alt="Jason Perez"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-zinc-200 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-zinc-400 mb-3">
              About
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-zinc-900 mb-8">
              The Artist
            </h2>

            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                Jason Perez is a Miami-based muralist and fine artist with over 
                15 years of experience transforming spaces through art. His work 
                combines bold color, intricate detail, and emotional depth to 
                create pieces that resonate.
              </p>
              <p>
                From the vibrant walls of Wynwood to corporate headquarters and 
                private residences, Jason&apos;s murals have become landmarks across 
                South Florida. Each project begins with understanding the space, 
                the people, and the story that needs to be told.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-zinc-200">
              <div>
                <div className="font-playfair text-4xl md:text-5xl text-zinc-900">
                  <Counter number={15} />+
                </div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">
                  Years
                </p>
              </div>
              <div>
                <div className="font-playfair text-4xl md:text-5xl text-zinc-900">
                  <Counter number={200} />+
                </div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">
                  Projects
                </p>
              </div>
              <div>
                <div className="font-playfair text-4xl md:text-5xl text-zinc-900">
                  <Counter number={50} />+
                </div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">
                  Murals
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 text-zinc-900 border border-zinc-900 px-6 py-3 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Work With Jason
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
