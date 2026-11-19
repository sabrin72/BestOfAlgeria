const Statistics = () => {
  const stats = [
    { number: '350+', label: 'Prestataires Oran' },
    { number: '69', label: 'Wilayas couvertes' },
    { number: '4.8 ★', label: 'Note moyenne' },
    { number: '18K+', label: 'Réservations' },
    { number: '100%', label: 'Sélection locale' },
  ];

  return (
    <section className="bg-[#111111] border-t border-b border-[#C9A84C]/30">
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center relative"
            >
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#C9A84C]/30" />
              )}
              <div
                className="text-4xl md:text-5xl text-[#C9A84C] mb-2"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
              >
                {stat.number}
              </div>
              <div
                className="text-[#8B6D22] text-xs md:text-sm uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
