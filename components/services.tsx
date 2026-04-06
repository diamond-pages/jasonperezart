export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Murals',
      description: 'Large-scale wall art for commercial spaces, businesses, and public installations. Weather-resistant and built to last.',
      features: ['Site Assessment', 'Custom Design', 'Professional Installation'],
    },
    {
      number: '02',
      title: 'Residential',
      description: 'Transform your home with custom artwork. From accent walls to full room installations, bring your space to life.',
      features: ['In-Home Consultation', 'Multiple Concepts', 'White Glove Service'],
    },
    {
      number: '03',
      title: 'Fine Art',
      description: 'Original canvas pieces and commissions for collectors. Each work is a one-of-a-kind creation.',
      features: ['Original Works', 'Limited Editions', 'Commissions Available'],
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
            What I Offer
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

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white bg-zinc-900 px-6 py-3 hover:bg-zinc-800 transition-colors"
          >
            Discuss Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
