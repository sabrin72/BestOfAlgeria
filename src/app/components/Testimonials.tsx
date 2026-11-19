import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Yasmine Belkacem',
    role: 'Voyageuse — Alger',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    text: "Best of Algeria a complètement changé ma façon de découvrir mon propre pays. En quelques clics j'ai réservé un riad sublime à Oran et une sortie quad dans le Sahara. Le service est d'une qualité irréprochable, exactement ce qu'on attendait pour l'Algérie.",
  },
  {
    name: 'Karim Messaoud',
    role: 'Entrepreneur — Oran',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: "J'organise régulièrement des séjours pour mes clients étrangers et Best of Algeria est devenu mon partenaire de confiance. Les établissements référencés sont d'un niveau exceptionnel. La plateforme est fluide, les réservations instantanées, le suivi parfait.",
  },
  {
    name: 'Nour El Houda Rahmani',
    role: 'Blogueuse voyage — Constantine',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    text: "Une belle surprise algérienne ! J'ai découvert des adresses que je n'aurais jamais trouvées seule. La sélection est rigoureuse, le contenu authentique. C'est la référence que l'Algérie méritait depuis longtemps.",
  },
  {
    name: 'Sofiane Ouali',
    role: 'Famille — Tizi Ouzou',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
    text: "Nous avons organisé nos vacances en famille via Best of Algeria. Les activités proposées étaient adaptées à tous les âges, les hôtels parfaits. Le support client a répondu en quelques minutes à notre demande. Je recommande sans hésiter.",
  },
  {
    name: 'Amira Djoudi',
    role: 'Architecte — Paris',
    avatar: 'https://i.pravatar.cc/150?img=44',
    rating: 5,
    text: "En tant qu'Algérienne de la diaspora, je cherchais une façon sûre de planifier mes visites. Best of Algeria répond exactement à ce besoin : des adresses vérifiées, une interface moderne, et une vraie mise en valeur de notre patrimoine touristique.",
  },
  {
    name: 'Mehdi Boukhari',
    role: 'Guide touristique — Tamanrasset',
    avatar: 'https://i.pravatar.cc/150?img=18',
    rating: 5,
    text: "Depuis que nous sommes référencés sur Best of Algeria, notre visibilité a explosé. Les clients arrivent informés, préparés et avec de vraies attentes de qualité. C'est exactement la clientèle que nous cherchions à attirer pour le tourisme saharien.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl text-[#1A1A1A] mb-3"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Ce que disent nos clients
          </h2>
          <p
            className="text-[#8B6D22]"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            Des expériences authentiques partagées par notre communauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#C9A84C]/10 p-8 hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote mark */}
              <Quote
                className="text-[#C9A84C]/20 absolute top-6 right-6"
                size={48}
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-[#4A4A4A] text-sm leading-relaxed mb-6 italic"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#C9A84C]/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#C9A84C]/30"
                />
                <div>
                  <p
                    className="text-[#1A1A1A] text-sm"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[#8B6D22] text-xs"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
