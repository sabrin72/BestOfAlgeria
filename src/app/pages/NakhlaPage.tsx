import { motion } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const perks = [
  { title: 'Accès prioritaire', description: 'Réservations en avant-première pour les établissements partenaires et événements exclusifs.' },
  { title: 'Conciergerie dédiée', description: 'Une conseillère personnelle disponible 7j/7 pour orchestrer chaque aspect de votre séjour.' },
  { title: 'Soins & Bien-être', description: 'Accès à un réseau privé de spas, hammams et instituts de beauté sélectionnés par BOA.' },
  { title: 'Cercle des membres', description: 'Rencontres, dîners et sorties privées au sein d\'une communauté de femmes d\'exception.' },
];

const NakhlaPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navigation />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Nakhla"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0D0D0D]" />
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
              className="text-7xl md:text-9xl text-[#FAFAF8] mb-3 leading-none"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}
            >
              Nakhla
            </h1>
            <p
              className="text-4xl md:text-5xl text-[#C9A84C]/80 mb-8"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, direction: 'rtl' }}
            >
              نخلة
            </p>
            <p
              className="text-[#F5EDD6]/60 text-lg max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
            >
              Un espace féminin d&apos;exception. Discrétion absolue. Expériences sur-mesure.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div className="w-[1px] h-14 bg-gradient-to-b from-[#C9A84C] to-transparent" animate={{ scaleY: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2.5 }} />
        </div>
      </section>

      {/* About */}
      <section className="py-28 bg-[#0D0D0D]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-12 h-[1px] bg-[#C9A84C]/50 mx-auto mb-10" />
            <p
              className="text-2xl md:text-3xl text-[#FAFAF8]/85 leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}
            >
              "Nakhla est un espace pensé pour et par les femmes — un cercle privé où l&apos;excellence du service BOA rencontre la bienveillance d&apos;une communauté choisie."
            </p>
            <div className="w-12 h-[1px] bg-[#C9A84C]/50 mx-auto mb-10" />
            <p className="text-[#FAFAF8]/50 text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
              Réservé aux membres Nakhla — adhésion sur invitation ou candidature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.h2
            className="text-center text-3xl md:text-4xl text-[#FAFAF8] mb-16"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Les privilèges Nakhla
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                className="border border-[#C9A84C]/15 p-8 hover:border-[#C9A84C]/40 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className="w-8 h-[1px] bg-[#C9A84C]/60 mb-6 group-hover:w-12 transition-all duration-500" />
                <h3 className="text-xl text-[#FAFAF8] mb-3" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{perk.title}</h3>
                <p className="text-[#FAFAF8]/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>{perk.description}</p>
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
          <h2 className="text-4xl md:text-5xl text-[#FAFAF8] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}>
            Rejoindre Nakhla
          </h2>
          <p className="text-[#FAFAF8]/50 mb-10" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
            L&apos;adhésion est sur invitation ou sur candidature approuvée par notre comité.
          </p>
          <motion.a
            href="/affiliation"
            className="inline-block px-12 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}
            whileHover={{ backgroundColor: '#E8C96A', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Faire une demande
          </motion.a>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NakhlaPage;
