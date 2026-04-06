'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: '#artists', label: 'Artists' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1a1a]/95 backdrop-blur-md py-4 shadow-lg shadow-black/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="https://static.wixstatic.com/media/59ac04_2d434f32e026433ea3fa22b8a3b82949~mv2.png/v1/fill/w_202,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png"
                alt="Jason Perez Art"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.2em] uppercase text-[#F5F3EE]/80 hover:text-[#C9A55C] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A55C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
          >
            <span
              className={`w-6 h-px bg-[#C9A55C] transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}
            />
            <span
              className={`w-6 h-px bg-[#C9A55C] transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-px bg-[#C9A55C] transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-[#1a1a1a]/98 backdrop-blur-md transition-all duration-500 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="py-8 px-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg tracking-[0.15em] uppercase text-[#F5F3EE]/80 hover:text-[#C9A55C] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
