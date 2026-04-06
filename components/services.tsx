export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Artist Representation',
      description: 'We represent over 40 talented artists from across the United States and internationally. Pop art, street art, contemporary, and fine art — we showcase creative genius in avant-garde galleries.',
      features: ['Portfolio Development', 'Exhibition Placement', 'Career Strategy'],
    },
    {
      number: '02',
      title: 'Art Brokerage',
      description: 'Professional art brokerage services connecting collectors with exceptional works. Jason can deliver a piece directly to you or help you discover the perfect addition to your collection.',
      features: ['Direct Sales', 'Private Viewings', 'Collection Consulting'],
    },
    {
      number: '03',
      title: 'Events & Exhibitions',
      description: 'Feature your artwork at the most important aesthetic networking events in the United States. From Art Basel to Red Dot Miami, we create unforgettable art experiences.',
      features: ['Art Basel Miami', 'Spectrum Miami', 'Red Dot Miami'],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-zinc-400 mb-3">
            Services
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-zinc-900">
            What We Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <article key={service.number} className="group">
              {/* Number */}
              <span className="font-playfair text-7xl text-zinc-200 group-hover:text-zinc-300 transition-colors">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-playfair text-2xl text-zinc-900 mt-4 mb-4 group-hover:text-zinc-700 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-500">
                    <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Venues */}
        <div className="mt-20 pt-16 border-t border-zinc-200">
          <h3 className="font-playfair text-2xl text-zinc-900 text-center mb-8">
            Find Our Artists At
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: 'Ampersand Studios', location: '31 NE 17th St, Miami' },
              { name: 'Omni - The Hub', location: '1501 Biscayne Blvd' },
              { name: 'Buro79', location: '125 NW 23rd St, Wynwood' },
              { name: 'Rusty Pelican', location: 'Key Biscayne' },
            ].map((venue) => (
              <div key={venue.name} className="p-4">
                <p className="font-medium text-zinc-900">{venue.name}</p>
                <p className="text-sm text-zinc-500">{venue.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white bg-zinc-900 px-6 py-3 hover:bg-zinc-800 transition-colors"
          >
            Submit Your Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
