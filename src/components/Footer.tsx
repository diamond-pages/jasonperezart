'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#111] border-t border-[#C9A55C]/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-20 h-20">
                <Image
                  src="https://static.wixstatic.com/media/59ac04_2d434f32e026433ea3fa22b8a3b82949~mv2.png/v1/fill/w_202,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png"
                  alt="Jason Perez Art"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-[#F5F3EE]/50 max-w-md leading-relaxed">
              Transforming spaces through the power of art. From intimate commissions 
              to monumental murals, we bring creative visions to life with passion 
              and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-xl text-[#F5F3EE] mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Gallery', 'Services', 'Artists', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#F5F3EE]/50 hover:text-[#C9A55C] transition-colors text-sm tracking-wider"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-xl text-[#F5F3EE] mb-6">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-[#F5F3EE]/50">
                Miami, Florida
              </li>
              <li>
                <a href="mailto:info@jasonperezart.com" className="text-[#F5F3EE]/50 hover:text-[#C9A55C] transition-colors">
                  info@jasonperezart.com
                </a>
              </li>
              <li>
                <a href="tel:+13055551234" className="text-[#F5F3EE]/50 hover:text-[#C9A55C] transition-colors">
                  (305) 555-1234
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 border border-[#C9A55C]/20 flex items-center justify-center text-[#C9A55C]/60 hover:bg-[#C9A55C] hover:text-[#1a1a1a] hover:border-[#C9A55C] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C9A55C]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F3EE]/30 text-sm">
            © {new Date().getFullYear()} Jason Perez Art. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#F5F3EE]/30 hover:text-[#C9A55C] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#F5F3EE]/30 hover:text-[#C9A55C] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
