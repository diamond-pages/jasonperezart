'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="section-content px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-3xl">
              Jason Perez
            </Link>
            <p className="text-white/60 mt-4 max-w-xs">
              Miami-based muralist and fine artist transforming spaces through art.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm text-white/40 uppercase tracking-wider mb-4">
              Navigation
            </p>
            <nav className="space-y-3">
              {['Work', 'About', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm text-white/40 uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@jasonperezart.com"
                className="block text-white/70 hover:text-[var(--accent)] transition-colors"
              >
                hello@jasonperezart.com
              </a>
              <p className="text-white/70">Miami, Florida</p>
            </div>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Behance'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-white/50 hover:text-[var(--accent)] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Jason Perez Art. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Site by{' '}
            <a href="#" className="hover:text-[var(--accent)] transition-colors">
              DiamondPages
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
