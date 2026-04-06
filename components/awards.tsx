export default function Awards() {
  const awards = [
    {
      year: '2023',
      event: 'Art Expo New York',
      award: "Director's Award",
    },
    {
      year: '2022',
      event: 'Spectrum Miami',
      award: "Director's Award",
    },
    {
      year: '2021',
      event: 'Red Dot Miami',
      award: "Director's Award",
    },
    {
      year: '2021',
      event: 'Art Expo New York',
      award: 'Best Sculpture',
    },
    {
      year: '2019',
      event: 'Spectrum Miami',
      award: 'Spotlight Award',
    },
  ]

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-zinc-500 mb-3">
            Recognition
          </p>
          <h2 className="font-playfair text-3xl text-white">
            Art Basel Accolades
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {awards.map((award, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-playfair text-white">{award.year}</p>
              <p className="text-zinc-400 text-sm mt-1">{award.event}</p>
              <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
                {award.award}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
