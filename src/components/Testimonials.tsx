'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "Jason transformed our restaurant into a destination. The mural has become an Instagram hotspot and brings in customers daily.",
    author: "Maria Santos",
    title: "Owner, La Cocina Miami",
  },
  {
    quote: "Working with Jason was seamless. He understood our vision immediately and delivered beyond expectations. True professional.",
    author: "David Chen",
    title: "Creative Director, Brickell Corp",
  },
  {
    quote: "The piece Jason created for our home is stunning. It's the first thing every guest comments on. Worth every penny.",
    author: "Jennifer & Mark Williams",
    title: "Coral Gables Residents",
  },
];

export default function Testimonials() {
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
    <section ref={sectionRef} className="section-block section-dark">
      <div className="section-content">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="overline mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, i) => (
            <article
              key={testimonial.author}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Quote Mark */}
              <span className="text-6xl font-display text-[var(--accent)] leading-none block mb-4">
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="text-lg text-white/80 leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-sm text-[var(--stone)]">{testimonial.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
