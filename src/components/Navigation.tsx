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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-display text-2xl transition-colors ${
              isScrolled ? 'text-[var(--ink)]' : 'text-white'
            }`}
          >
            Jason Perez
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider uppercase transition-colors link-hover ${
                  isScrolled
                    ? 'text-[var(--ink)] hover:text-[var(--accent)]'
                    : 'text-white/90 hover:text-white'
                }`}
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
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileOpen
                  ? 'rotate-45 translate-y-1 bg-[var(--ink)]'
                  : isScrolled
                  ? 'bg-[var(--ink)]'
                  : 'bg-white'
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileOpen
                  ? '-rotate-45 -translate-y-1 bg-[var(--ink)]'
                  : isScrolled
                  ? 'bg-[var(--ink)]'
                  : 'bg-white'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center gap-8 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-display text-4xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
