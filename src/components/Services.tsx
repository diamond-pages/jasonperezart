'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Murals',
    description: 'Large-scale wall art for commercial, residential, and public spaces. From concept to installation, each mural is designed to transform environments and create lasting impressions.',
    details: ['Site assessment', 'Custom design', 'Weather-resistant materials', 'Professional installation'],
  },
  {
    number: '02',
    title: 'Commissions',
    description: 'Original artwork created specifically for your space. Whether canvas, mixed media, or sculpture—every commissioned piece is a one-of-a-kind collaboration.',
    details: ['Personal consultation', 'Multiple concepts', 'Progress updates', 'Framing options'],
  },
  {
    number: '03',
    title: 'Corporate Art',
    description: 'Elevate your business environment with art that reflects your brand. We work with architects, designers, and developers to create cohesive visual experiences.',
    details: ['Brand integration', 'Space planning', 'Installation coordination', 'Ongoing support'],
  },
];

export default function Services() {
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
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-[var(--ink)]">
      <div className="container-xl">
        {/* Header */}
        <div className="mb-16 lg:mb-24 lg:flex lg:items-end lg:justify-between">
          <div>
            <span className="text-[var(--text-xs)] tracking-[0.3em] uppercase text-[var(--stone)] block mb-4">
              Services
            </span>
            <h2 className="font-display text-[var(--text-2xl)] text-[var(--paper)] max-w-xl">
              How we can work together
            </h2>
          </div>
          <p className="text-[var(--text-base)] text-[var(--paper)]/60 max-w-md mt-6 lg:mt-0">
            Every project begins with a conversation. Let&apos;s discuss your vision 
            and find the right approach.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <article
              key={service.number}
              data-index={i}
              className={`group border-t border-[var(--stone)]/20 py-12 lg:py-16 transition-all duration-700 ${
                visibleItems.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-[var(--text-sm)] text-[var(--terracotta)] font-medium">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="font-display text-[var(--text-xl)] text-[var(--paper)] group-hover:text-[var(--terracotta)] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-[var(--text-base)] text-[var(--paper)]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Details */}
                <div className="lg:col-span-3">
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-[var(--text-sm)] text-[var(--stone)] flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--terracotta)]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-[var(--stone)]/20" />

        {/* CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-[var(--text-lg)] text-[var(--paper)]/60 mb-8">
            Ready to bring your vision to life?
          </p>
          <a href="#contact" className="btn-primary">
            Start a Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
