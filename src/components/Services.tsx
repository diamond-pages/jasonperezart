'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '🎨',
    title: 'Custom Murals',
    description: 'Large-scale murals that transform spaces into immersive visual experiences. From concept to completion, each mural tells a unique story.',
    features: ['Site assessment', 'Custom design', 'Professional installation', 'Weather-resistant materials'],
  },
  {
    icon: '🖼️',
    title: 'Fine Art Commissions',
    description: 'Personalized artwork created specifically for your space. Whether canvas, mixed media, or sculpture—every piece is one of a kind.',
    features: ['Personal consultation', 'Multiple concepts', 'Progress updates', 'Framing options'],
  },
  {
    icon: '🏢',
    title: 'Corporate & Commercial',
    description: 'Elevate your business environment with art that reflects your brand identity and creates lasting impressions on clients and employees.',
    features: ['Brand integration', 'Space planning', 'Installation coordination', 'Maintenance guidance'],
  },
  {
    icon: '✨',
    title: 'Art Consultation',
    description: 'Expert guidance on art selection, placement, and curation for private collections, galleries, and institutional spaces.',
    features: ['Collection assessment', 'Acquisition advice', 'Display recommendations', 'Investment guidance'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C9A55C]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#C9A55C] tracking-[0.3em] uppercase text-sm mb-4">
            What We Offer
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-7xl font-light text-[#F5F3EE] mb-6">
            Creative <span className="italic text-[#C9A55C]">Services</span>
          </h2>
          <p className="text-[#F5F3EE]/60 max-w-2xl mx-auto text-lg">
            From intimate canvas pieces to monumental murals, we bring artistic vision 
            to life with meticulous attention to detail and unwavering commitment to excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 lg:p-10 bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#C9A55C]/10 hover:border-[#C9A55C]/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#C9A55C]/20 group-hover:border-[#C9A55C]/50 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#C9A55C]/20 group-hover:border-[#C9A55C]/50 transition-colors duration-500" />

              {/* Icon */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#F5F3EE] mb-4 group-hover:text-[#C9A55C] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#F5F3EE]/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[#F5F3EE]/50">
                    <span className="w-1.5 h-1.5 bg-[#C9A55C] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A55C] to-[#E8D5A3] group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#F5F3EE]/50 mb-6">Ready to start your project?</p>
          <a
            href="#contact"
            className="btn-elegant inline-block px-10 py-4 bg-[#C9A55C] text-[#1a1a1a] hover:bg-[#E8D5A3] tracking-[0.2em] uppercase text-sm transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
