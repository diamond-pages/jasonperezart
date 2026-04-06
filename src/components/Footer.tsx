'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-[var(--stone)]/10">
      <div className="container-xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-2xl text-[var(--paper)] hover:text-[var(--terracotta)] transition-colors">
              Jason Perez
            </Link>
            <p className="text-[var(--text-base)] text-[var(--stone)] mt-4 max-w-sm">
              Creating murals and fine art that transform spaces and tell stories. 
              Based in Miami, available worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] mb-4">
              Navigation
            </p>
            <nav className="space-y-3">
              {['Work', 'About', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-[var(--paper)]/70 hover:text-[var(--paper)] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[var(--text-xs)] tracking-[0.2em] uppercase text-[var(--stone)] mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@jasonperezart.com"
                className="block text-[var(--paper)]/70 hover:text-[var(--terracotta)] transition-colors"
              >
                hello@jasonperezart.com
              </a>
              <p className="text-[var(--paper)]/70">Miami, Florida</p>
            </div>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[var(--text-sm)] text-[var(--stone)] hover:text-[var(--terracotta)] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[var(--stone)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-sm)] text-[var(--stone)]">
            © {new Date().getFullYear()} Jason Perez Art. All rights reserved.
          </p>
          <p className="text-[var(--text-sm)] text-[var(--stone)]">
            Site by <a href="#" className="hover:text-[var(--terracotta)] transition-colors">DiamondPages</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
