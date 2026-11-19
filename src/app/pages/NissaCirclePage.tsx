import { motion } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const offerings = [
  { number: '01', title: 'Dîners Privés', description: "Tables fermées, chefs invités, adresses secrètes. Le Nissa Circle orchestre des soirées gastronomiques réservées aux membres." },
  { number: '02', title: 'Art & Culture', description: "Vernissages en avant-première, visites privées de collections, rencontres avec des artistes algériens contemporains." },
  { number: '03', title: 'Networking d\'Excellence', description: "Connexion entre entrepreneurs, décideurs et personnalités influentes — un réseau bâti sur la discrétion et la réciprocité." },
  { number: '04', title: 'Voyages Curatés', description: "Itinéraires d'exception en Algérie et à l'international, conçus exclusivement pour les membres Nissa Circle." },
];

const NissaCirclePage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navigation />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1781955781178-6ea29c66e860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Nissa Circle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0D0D0D]" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.6em] mb-6" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
              Club Privé · Best of Algeria
            </p>
            <h1
              className="text-7xl md:text-9xl text-[#FAFAF8] mb-2 leading-none"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}
            >
              Nissa
            </h1>
            <h2
              className="text-3xl md:text-5xl text-[#C9A84C] mb-8"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.3em' }}
            >
              CIRCLE
            </h2>
            <p
              className="text-[#F5EDD6]/60 text-lg max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
            >
              Un cercle fermé pour ceux qui savent reconnaître l&apos;essentiel.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div className="w-[1px] h-14 bg-gradient-to-b from-[#C9A84C] to-transparent" animate={{ scaleY: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2.5 }} />
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-28 bg-[#0D0D0D]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-12 h-[1px] bg-[#C9A84C]/40 mx-auto mb-10" />
            <p
              className="text-xl md:text-2xl text-[#FAFAF8]/80 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}
            >
              Le Nissa Circle réunit des individus d&apos;exception — artistes, entrepreneurs, penseurs — autour d&apos;expériences culturelles, gastronomiques et sociales d&apos;un niveau rare en Algérie.
            </p>
            <p className="text-[#FAFAF8]/40 text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
              Accès sur cooptation. 20 membres maximum par ville.
            </p>
            <div className="w-12 h-[1px] bg-[#C9A84C]/40 mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.h2
            className="text-center text-3xl md:text-4xl text-[#FAFAF8] mb-16"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ce que vous trouverez ici
          </motion.h2>

          <div className="space-y-4">
            {offerings.map((offer, i) => (
              <motion.div
                key={offer.number}
                className="flex gap-8 items-start border border-[#C9A84C]/10 p-7 hover:border-[#C9A84C]/35 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <span
                  className="text-5xl text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors leading-none shrink-0"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                >
                  {offer.number}
                </span>
                <div>
                  <h3 className="text-xl text-[#FAFAF8] mb-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{offer.title}</h3>
                  <p className="text-[#FAFAF8]/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>{offer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0D0D0D] text-center">
        <motion.div
          className="max-w-xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#FAFAF8] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}>
            Intégrer le<br />
            <span className="text-[#C9A84C] italic">Nissa Circle</span>
          </h2>
          <p className="text-[#FAFAF8]/50 mb-10" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
            Les demandes d&apos;adhésion sont examinées par le Comité de sélection. Les places sont limitées.
          </p>
          <motion.a
            href="/affiliation"
            className="inline-block px-12 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}
            whileHover={{ backgroundColor: '#E8C96A', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Postuler
          </motion.a>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NissaCirclePage;
