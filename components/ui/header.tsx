'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Artists', href: '#artists' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm py-3 shadow-sm'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-jpa.png"
                alt="Jason Perez Art"
                width={40}
                height={45}
                className={`transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-90 brightness-0 invert'}`}
              />
              <span
                className={`font-playfair text-xl hidden sm:block transition-colors ${
                  isScrolled ? 'text-zinc-900' : 'text-white'
                }`}
              >
                Jason Perez Art
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wider uppercase transition-colors ${
                    isScrolled
                      ? 'text-zinc-600 hover:text-zinc-900'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileOpen
                    ? 'rotate-45 translate-y-1 bg-zinc-900'
                    : isScrolled
                    ? 'bg-zinc-900'
                    : 'bg-white'
                }`}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileOpen
                    ? '-rotate-45 -translate-y-1 bg-zinc-900'
                    : isScrolled
                    ? 'bg-zinc-900'
                    : 'bg-white'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

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
              className="font-playfair text-4xl text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
