import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-jpa.png"
                alt="Jason Perez Art"
                width={50}
                height={56}
                className="brightness-0 invert opacity-80"
              />
              <span className="font-playfair text-2xl">Jason Perez Art</span>
            </div>
            <p className="text-zinc-400 max-w-sm">
              A professional art brokerage representing over 40 talented artists. 
              Based in Miami, Florida &amp; New York.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-4">
              Navigation
            </p>
            <nav className="space-y-3">
              {['Artists', 'About', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-zinc-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:jasonperezart@gmail.com"
                className="block text-zinc-400 hover:text-white transition-colors"
              >
                jasonperezart@gmail.com
              </a>
              <a
                href="tel:+17868485442"
                className="block text-zinc-400 hover:text-white transition-colors"
              >
                786-848-5442
              </a>
              <p className="text-zinc-400">Miami, FL &amp; New York</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/jasonperezartcollective/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Jason Perez Art Collective. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Site by{' '}
            <a href="https://diamondpages.ai" className="hover:text-white transition-colors">
              DiamondPages
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
