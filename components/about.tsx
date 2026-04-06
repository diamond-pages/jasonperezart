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
              The Gallerist
            </h2>

            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                Born into the legacy of renowned pop artist <strong>Michael Perez</strong>, 
                Jason&apos;s journey into the art world is deeply personal. After moving to Miami, 
                they opened Gallery 212 in Wynwood. When his father suffered a stroke during 
                their final year, Jason took on the challenge of continuing his work.
              </p>
              <p>
                With only $500 to his name, he learned the intricacies of the art business. 
                Over five years of relentless dedication, he founded <strong>Jason Perez Art Collective</strong>. 
                Today, they represent over 40 artists and collaborate with multiple galleries 
                across Miami, hosting numerous art events throughout the year.
              </p>
              <p>
                Distinguished by Art Basel accolades including the Spotlight Award at 2019 
                Spectrum Miami, Best Sculpture at 2021 Art Expo New York, and Director&apos;s 
                Awards at Red Dot Miami, Spectrum Miami, and Art Expo New York.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-zinc-200">
              <div>
                <div className="font-playfair text-4xl md:text-5xl text-zinc-900">
                  <Counter number={40} />+
                </div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">
                  Artists
                </p>
              </div>
              <div>
                <div className="font-playfair text-4xl md:text-5xl text-zinc-900">
                  <Counter number={5} />+
                </div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">
                  Awards
                </p>
              </div>
              <div>
                <div className="font-playfair text-4xl md:text-5xl text-zinc-900">
                  <Counter number={113} />K
                </div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">
                  Followers
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 text-zinc-900 border border-zinc-900 px-6 py-3 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Get in Touch
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
