import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-playfair text-3xl">
              Jason Perez
            </Link>
            <p className="text-zinc-400 mt-4 max-w-xs">
              Miami-based muralist and fine artist transforming spaces through art.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-4">
              Navigation
            </p>
            <nav className="space-y-3">
              {['Work', 'About', 'Services', 'Contact'].map((item) => (
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
                href="mailto:hello@jasonperezart.com"
                className="block text-zinc-400 hover:text-white transition-colors"
              >
                hello@jasonperezart.com
              </a>
              <p className="text-zinc-400">Miami, Florida</p>
            </div>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Behance'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Jason Perez Art. All rights reserved.
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
