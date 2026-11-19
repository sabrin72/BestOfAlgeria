const HeroVideo = () => {
  return (
<section 
  className="relative overflow-hidden h-[100svh] min-h-[560px] lg:h-[85vh] lg:min-h-[680px] lg:max-h-[820px]"
>
  {/* Background video / image fallback */}
  <div className="absolute inset-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
      poster="https://images.unsplash.com/photo-1628604540712-f93fc71275d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
    >
      <source src="/video/BOA.MOV" type="video/mp4" />
      <img
        src="https://images.unsplash.com/photo-1628604540712-f93fc71275d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Algérie"
        className="w-full h-full object-cover"
      />
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
  </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end min-h-[60vh]">
        <div className="max-w-[1600px] mx-auto px-6 pb-20 w-full">
          <div className="max-w-3xl">
            <h1
              className="mb-5 leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
            >
              <span className="text-[#FAFAF8] text-5xl md:text-7xl lg:text-8xl block">
                Le meilleur
              </span>
              <span className="text-[#C9A84C] text-5xl md:text-7xl lg:text-8xl italic block">
                d'Algérie
              </span>
            </h1>

            <p
              className="text-[#D4B87A] text-base md:text-lg mb-10 max-w-xl"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
               Vivez le meilleur de l’Algérie. Best of Algeria vous révèle ses adresses les plus exclusives, wilaya après wilaya
            </p>

            <a
              href="/activites"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A] transition-all group"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              <span className="text-sm tracking-[0.15em] uppercase">Réserver</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-[#C9A84C]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#C9A84C] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
