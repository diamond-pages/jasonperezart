export default function TestimonialsCustom() {
  const testimonials = [
    {
      quote: "Jason transformed our restaurant into a destination. The mural has become an Instagram hotspot and brings in customers daily.",
      author: "Maria Santos",
      title: "Owner, La Cocina Miami",
    },
    {
      quote: "Working with Jason was seamless. He understood our vision immediately and delivered beyond expectations. True professional.",
      author: "David Chen",
      title: "Creative Director, Brickell Corp",
    },
    {
      quote: "The piece Jason created for our home is stunning. It's the first thing every guest comments on. Worth every penny.",
      author: "Jennifer Williams",
      title: "Coral Gables Resident",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-zinc-500 mb-3">
            Testimonials
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <article key={i} className="bg-zinc-800/50 p-8 border border-zinc-700/50">
              {/* Quote Mark */}
              <span className="font-playfair text-6xl text-zinc-600 leading-none block mb-4">
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="text-lg text-zinc-300 leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-sm text-zinc-500">{testimonial.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
