import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const values = [
  {
    title: 'Excellence',
    description: "Des standards internationaux appliqués à chaque détail, chaque expérience, chaque adresse référencée sur notre plateforme.",
  },
  {
    title: 'Authenticité',
    description: "Une connaissance intime du territoire algérien, de ses trésors cachés, de ses artisans, de ses lieux qui résistent à l'ordinaire.",
  },
  {
    title: 'Confiance',
    description: "Chaque établissement partenaire est sélectionné, audité, et suivi. Nous ne référençons que ce que nous recommanderions à nos propres proches.",
  },
  {
    title: 'Sur-mesure',
    description: "Voyages, séjours, événements — chaque expérience est pensée pour vous, adaptée à vos préférences, à votre rythme, à vos envies.",
  },
];

const team = [
  { initials: 'FB', name: 'Fondatrice & CEO', desc: "Algérienne de cœur, citoyenne du monde. Après des années à l'international, elle a créé BOA pour offrir à l'Algérie la vitrine qu'elle mérite." },
  { initials: 'DT', name: 'Directrice Expériences', desc: "Spécialiste du tourisme de luxe, elle orchestre les partenariats et garantit la qualité des expériences proposées sur la plateforme." },
  { initials: 'RM', name: 'Responsable Technologie', desc: "Architecte de la plateforme, il assure que chaque interaction digitale soit aussi fluide et élégante que le service physique." },
];

const QuiSommesNousPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative h-[85vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Algérie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] mb-6"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Best of Algeria
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#FAFAF8] leading-[1.05] mb-6 max-w-5xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          >
            Une terre de caractère.<br />
            <span className="text-[#C9A84C] italic">Une histoire millénaire.</span>
          </motion.h1>
          <motion.p
            className="text-[#F5EDD6]/80 text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Une Algérie à découvrir dans toute sa grandeur.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-32 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] mb-5" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                Notre Mission
              </p>
              <h2
                className="text-4xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
              >
                Révéler l&apos;Algérie<br />
                <span className="text-[#8B6D22] italic">dans toute son excellence</span>
              </h2>
              <div className="space-y-5 text-[#3A3A3A]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: 1.85 }}>
                <p>
                  Best of Algeria est née d&apos;un constat simple : l&apos;Algérie regorge de trésors — hôtels d&apos;exception, restaurants gastronomiques, expériences uniques — mais ils restent trop souvent méconnus, difficiles d&apos;accès, absents des plateformes de référence mondiale.
                </p>
                <p>
                  Notre mission est de changer cela. De créer la première plateforme algérienne dédiée au tourisme et au lifestyle haut de gamme. Un espace où chaque adresse recommandée est vérifiée, chaque expérience sélectionnée avec soin, chaque réservation traitée avec l&apos;attention qu&apos;un client exigeant est en droit d&apos;attendre.
                </p>
                <p>
                  BOA n&apos;est pas un simple annuaire. C&apos;est une promesse : vous accompagner dans la découverte d&apos;une Algérie authentique, raffinée, et fièrement elle-même.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1565098772267-60af42b81ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Algérie"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 w-2/3 border-4 border-[#FAFAF8]">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                    alt="Expérience"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              {/* Gold accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#C9A84C]/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fondatrice */}
      <section className="py-24 bg-[#13100A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
          backgroundSize: '24px 24px',
        }} />
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-[2px] bg-[#C9A84C] mx-auto mb-10" />
            <blockquote
              className="text-2xl md:text-3xl lg:text-4xl text-[#FAFAF8] leading-relaxed mb-10"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontStyle: 'italic' }}
            >
              "Fondée par une Algérienne ayant évolué à l&apos;international et maîtrisant parfaitement les codes de l&apos;excellence et du service haut de gamme, BOA conjugue standards internationaux et connaissance intime du pays."
            </blockquote>
            <div className="w-20 h-[2px] bg-[#C9A84C] mx-auto mb-8" />
            <p className="text-[#C9A84C] text-sm uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              La Fondatrice — Best of Algeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] mb-4" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              Nos Valeurs
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#1A1A1A]"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
            >
              Ce qui nous guide
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C9A84C]/15">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-[#FAFAF8] p-10 hover:bg-[#FDF9F2] transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-5xl text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors leading-none"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="text-xl text-[#1A1A1A] mb-3"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="text-[#4A4A4A] leading-relaxed"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                    >
                      {v.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-[#F2EDE4]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] mb-4" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              L&apos;Équipe
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#1A1A1A]"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
            >
              Des passionnés à votre service
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <div className="w-24 h-24 rounded-full bg-[#C9A84C]/15 border-2 border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-6">
                  <span
                    className="text-2xl text-[#8B6D22]"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3
                  className="text-lg text-[#1A1A1A] mb-2"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[#5A5A5A] text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                >
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-20 bg-[#1A1510]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: '69', label: 'Wilayas couvertes' },
              { value: '500+', label: 'Établissements référencés' },
              { value: '12 000+', label: 'Clients satisfaits' },
              { value: '4.9/5', label: 'Note moyenne' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <p
                  className="text-4xl md:text-5xl text-[#C9A84C] mb-2"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[#F5EDD6]/60 text-sm uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-40 bg-[#FAFAF8] text-center">
        <motion.div
          className="max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-tight mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
          >
            Bienvenue chez<br />
            <span className="text-[#8B6D22] italic">Best Of Algeria.</span>
          </h2>
          <p
            className="text-2xl text-[#C9A84C] italic mb-12"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Endless Discovery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/activites"
              className="px-10 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}
              whileHover={{ backgroundColor: '#E8C96A', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explorer la plateforme
            </motion.a>
            <motion.a
              href="/affiliation"
              className="px-10 py-4 border border-[#C9A84C]/50 text-[#8B6D22] text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
              whileHover={{ borderColor: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.05)', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Rejoindre le réseau
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuiSommesNousPage;
