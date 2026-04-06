'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--ink)]/90 backdrop-blur-sm py-4'
            : 'bg-transparent py-6 lg:py-8'
        }`}
      >
        <div className="container-xl px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-xl lg:text-2xl tracking-tight hover:text-[var(--terracotta)] transition-colors"
          >
            Jason Perez
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-[0.15em] uppercase text-[var(--paper)]/70 hover:text-[var(--paper)] transition-colors link-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-px bg-[var(--paper)] transition-all duration-300 ${
                isMobileOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`w-6 h-px bg-[var(--paper)] transition-all duration-300 ${
                isMobileOpen ? '-rotate-45 -translate-y-0.5' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--ink)] transition-all duration-500 md:hidden ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-display text-4xl text-[var(--paper)] hover:text-[var(--terracotta)] transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
