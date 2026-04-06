'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-block">
      <div className="section-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="overline mb-4">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Let&apos;s Create
              <br />
              <span className="italic">Together</span>
            </h2>
            <p className="text-lg text-[var(--stone)] leading-relaxed mb-12 max-w-md">
              Have a project in mind? I&apos;d love to hear about it. 
              Every great piece starts with a conversation.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-[var(--stone)] uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@jasonperezart.com"
                  className="text-xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors link-hover"
                >
                  hello@jasonperezart.com
                </a>
              </div>
              <div>
                <p className="text-sm text-[var(--stone)] uppercase tracking-wider mb-1">
                  Studio
                </p>
                <p className="text-xl text-[var(--ink)]">
                  Miami, Florida
                </p>
              </div>
              <div>
                <p className="text-sm text-[var(--stone)] uppercase tracking-wider mb-1">
                  Follow
                </p>
                <div className="flex gap-6 mt-2">
                  {['Instagram', 'Behance'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-[var(--ink)] hover:text-[var(--accent)] transition-colors link-hover"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-16 bg-[var(--cream)] rounded-lg">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl mb-3">Message Sent</h3>
                <p className="text-[var(--stone)]">
                  Thank you for reaching out. I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-[var(--stone)] uppercase tracking-wider block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[var(--stone)] uppercase tracking-wider block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[var(--stone)] uppercase tracking-wider block mb-2">
                    Project Type
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select project type</option>
                    <option value="mural">Mural</option>
                    <option value="residential">Residential</option>
                    <option value="fine-art">Fine Art / Commission</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-[var(--stone)] uppercase tracking-wider block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-[var(--ink)]/20 py-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50"
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
                    'Send Message'
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
