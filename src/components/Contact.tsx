'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A55C]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A55C]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <p className="text-[#C9A55C] tracking-[0.3em] uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-light text-[#F5F3EE] mb-8">
              Let&apos;s Create <br />
              <span className="italic text-[#C9A55C]">Together</span>
            </h2>
            <p className="text-[#F5F3EE]/60 text-lg leading-relaxed mb-12">
              Whether you&apos;re envisioning a statement mural, a personal commission, 
              or need guidance on curating your collection—we&apos;re here to bring your 
              artistic vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#C9A55C]/30 flex items-center justify-center text-[#C9A55C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F5F3EE]/50 text-sm">Studio Location</p>
                  <p className="text-[#F5F3EE]">Miami, Florida</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#C9A55C]/30 flex items-center justify-center text-[#C9A55C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F5F3EE]/50 text-sm">Email</p>
                  <a href="mailto:info@jasonperezart.com" className="text-[#F5F3EE] hover:text-[#C9A55C] transition-colors">
                    info@jasonperezart.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#C9A55C]/30 flex items-center justify-center text-[#C9A55C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F5F3EE]/50 text-sm">Phone</p>
                  <a href="tel:+13055551234" className="text-[#F5F3EE] hover:text-[#C9A55C] transition-colors">
                    (305) 555-1234
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-[#F5F3EE]/50 text-sm mb-4">Follow the Journey</p>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-6 py-2 border border-[#C9A55C]/30 text-[#F5F3EE]/70 text-sm tracking-wider hover:bg-[#C9A55C] hover:text-[#1a1a1a] hover:border-[#C9A55C] transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F5F3EE]/50 text-sm mb-2 tracking-wider">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border border-[#C9A55C]/20 px-4 py-3 text-[#F5F3EE] focus:border-[#C9A55C] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#F5F3EE]/50 text-sm mb-2 tracking-wider">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border border-[#C9A55C]/20 px-4 py-3 text-[#F5F3EE] focus:border-[#C9A55C] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F5F3EE]/50 text-sm mb-2 tracking-wider">Phone</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-transparent border border-[#C9A55C]/20 px-4 py-3 text-[#F5F3EE] focus:border-[#C9A55C] focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-[#F5F3EE]/50 text-sm mb-2 tracking-wider">Project Type</label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-[#C9A55C]/20 px-4 py-3 text-[#F5F3EE] focus:border-[#C9A55C] focus:outline-none transition-colors"
                  >
                    <option value="">Select type</option>
                    <option value="mural">Mural</option>
                    <option value="commission">Commission</option>
                    <option value="corporate">Corporate</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#F5F3EE]/50 text-sm mb-2 tracking-wider">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full bg-transparent border border-[#C9A55C]/20 px-4 py-3 text-[#F5F3EE] focus:border-[#C9A55C] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                className="btn-elegant w-full py-4 bg-[#C9A55C] text-[#1a1a1a] font-medium tracking-[0.2em] uppercase hover:bg-[#E8D5A3] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
