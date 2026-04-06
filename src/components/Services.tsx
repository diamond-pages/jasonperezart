'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Murals',
    description: 'Large-scale wall art for commercial spaces, businesses, and public installations. Weather-resistant and built to last.',
    features: ['Site Assessment', 'Custom Design', 'Professional Installation'],
  },
  {
    number: '02',
    title: 'Residential',
    description: 'Transform your home with custom artwork. From accent walls to full room installations, bring your space to life.',
    features: ['In-Home Consultation', 'Multiple Concepts', 'White Glove Service'],
  },
  {
    number: '03',
    title: 'Fine Art',
    description: 'Original canvas pieces and commissions for collectors. Each work is a one-of-a-kind creation.',
    features: ['Original Works', 'Limited Editions', 'Commission Available'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-block section-cream">
      <div className="section-content">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="overline mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            What I Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <article
              key={service.number}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number */}
              <span className="text-6xl md:text-7xl font-display text-[var(--ink)]/10 block mb-4">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-3xl mb-4 group-hover:text-[var(--accent)] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--stone)] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[var(--ink)]">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <a href="#contact" className="btn btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
