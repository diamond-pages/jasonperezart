'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-[var(--cream)] text-[var(--ink)]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="text-[var(--text-xs)] tracking-[0.3em] uppercase text-[var(--stone)] block mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-[var(--text-2xl)] mb-6">
              Let&apos;s create something
              <br />
              <em className="text-[var(--terracotta)]">extraordinary</em>
            </h2>
            <p className="text-[var(--text-base)] text-[var(--ink)]/70 leading-relaxed mb-12 max-w-md">
              Whether you have a clear vision or just a spark of an idea, I&apos;d love 
              to hear about your project. Every great piece starts with a conversation.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <p className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@jasonperezart.com"
                  className="text-[var(--text-lg)] text-[var(--ink)] hover:text-[var(--terracotta)] transition-colors link-underline"
                >
                  hello@jasonperezart.com
                </a>
              </div>
              <div>
                <p className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] mb-1">
                  Studio
                </p>
                <p className="text-[var(--text-lg)] text-[var(--ink)]">
                  Miami, Florida
                </p>
              </div>
              <div>
                <p className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] mb-1">
                  Follow
                </p>
                <div className="flex gap-4 mt-2">
                  {['Instagram', 'Behance'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-[var(--text-sm)] text-[var(--ink)]/70 hover:text-[var(--terracotta)] transition-colors link-underline"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[var(--terracotta)] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--paper)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-[var(--text-xl)] mb-3">Message Sent</h3>
                <p className="text-[var(--ink)]/70">
                  Thank you for reaching out. I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--terracotta)] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--terracotta)] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Project Type & Budget Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] block mb-2">
                      Project Type
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full bg-transparent border-b border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--terracotta)] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select type</option>
                      <option value="mural">Mural</option>
                      <option value="commission">Commission</option>
                      <option value="corporate">Corporate Art</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] block mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-transparent border-b border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--terracotta)] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="over-50k">$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] block mb-2">
                    Tell me about your project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--terracotta)] focus:outline-none transition-colors resize-none"
                    placeholder="Describe your vision, timeline, and any relevant details..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center mt-8 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
