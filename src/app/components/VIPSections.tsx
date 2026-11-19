import { useState } from 'react';
import { Crown, Sparkles, Car, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const chauffeurOptions = [
  { id: 'city', label: 'Transfert Ville', desc: 'Aéroport → Hôtel, bureau, événement', price: '4 500 DZD' },
  { id: 'day', label: 'Journée Complète', desc: 'Mise à disposition 8h avec chauffeur', price: '18 000 DZD' },
  { id: 'vip', label: 'Limousine VIP', desc: 'Véhicule premium, chauffeur en uniforme', price: '32 000 DZD' },
  { id: 'sahara', label: 'Expédition Sahara', desc: '4x4 + chauffeur-guide, multi-jours', price: 'Sur devis' },
];

const vipServices = [
  'Réservations exclusives restaurants & hôtels',
  'Organisation d\'événements privés',
  'Accès aux établissements partenaires VIP',
  'Conciergerie disponible 24h/24',
  'Chauffeur et transferts sur mesure',
  'Planning de séjour personnalisé',
];

const VIPSections = () => {
  const [selectedChauffeur, setSelectedChauffeur] = useState<string | null>(null);
  const [showChauffeur, setShowChauffeur] = useState(false);

  return (
    <>
      {/* Concierge VIP Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                  <Crown className="text-[#C9A84C]" size={32} />
                </div>
                <h2
                  className="text-3xl md:text-5xl text-[#FAFAF8] mb-4 leading-tight"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Conciergerie VIP<br />
                  <span className="text-[#C9A84C] italic">Best Of Algeria</span>
                </h2>
                <p
                  className="text-[#8B6D22] leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                  Voyages sur-mesure, réservations exclusives, accès aux événements privés — notre équipe s'occupe de tout.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {vipServices.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <Check size={14} className="text-[#C9A84C] shrink-0" />
                    <span className="text-[#8B6D22] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="/conciergerie-vip"
                  className="px-8 py-3.5 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.12em] uppercase"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                  whileHover={{ backgroundColor: '#E8C96A' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Découvrir la Conciergerie
                </motion.a>
                <motion.button
                  className="flex items-center gap-2 px-8 py-3.5 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-[0.12em] uppercase"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                  onClick={() => setShowChauffeur(!showChauffeur)}
                  whileHover={{ borderColor: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.05)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Car size={16} />
                  Réserver un Chauffeur
                </motion.button>
              </div>
            </motion.div>

            {/* Right: chauffeur options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-[#111111] border border-[#C9A84C]/20 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Car size={18} className="text-[#C9A84C]" />
                  <span
                    className="text-[#FAFAF8] text-sm tracking-wider uppercase"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                  >
                    Services Chauffeur
                  </span>
                </div>

                <div className="space-y-3">
                  {chauffeurOptions.map((opt) => (
                    <motion.button
                      key={opt.id}
                      onClick={() => setSelectedChauffeur(opt.id === selectedChauffeur ? null : opt.id)}
                      className="w-full text-left p-4 border transition-colors relative"
                      style={{
                        borderColor: selectedChauffeur === opt.id ? '#C9A84C' : 'rgba(201,168,76,0.15)',
                        backgroundColor: selectedChauffeur === opt.id ? 'rgba(201,168,76,0.06)' : 'transparent',
                      }}
                      whileHover={{ borderColor: '#C9A84C' }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className="text-[#FAFAF8] text-sm mb-0.5"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                          >
                            {opt.label}
                          </p>
                          <p
                            className="text-[#8B6D22] text-xs"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                          >
                            {opt.desc}
                          </p>
                        </div>
                        <span
                          className="text-[#C9A84C] text-sm whitespace-nowrap shrink-0"
                          style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                        >
                          {opt.price}
                        </span>
                      </div>
                      {selectedChauffeur === opt.id && (
                        <motion.div
                          className="absolute right-3 top-3 w-5 h-5 bg-[#C9A84C] rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                        >
                          <Check size={11} className="text-[#0A0A0A]" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedChauffeur && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <motion.button
                        className="mt-4 w-full py-3 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-wider uppercase"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                        whileHover={{ backgroundColor: '#E8C96A' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Réserver maintenant
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Club Privé Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0">
          {[
            { top: '25%', left: '25%', delay: 0 }, { top: '33%', right: '33%', delay: 0.4 },
            { bottom: '25%', left: '33%', delay: 0.8 }, { top: '66%', right: '25%', delay: 1.2 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#C9A84C] rounded-full"
              style={pos as React.CSSProperties}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.5, delay: pos.delay as number }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 max-w-[1200px] mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
              <Sparkles className="text-[#C9A84C]" size={40} />
            </div>
          </div>
          <h2
            className="text-4xl md:text-6xl text-[#FAFAF8] mb-4"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Rejoignez le Club Best Of Algeria
          </h2>
          <p
            className="text-[#8B6D22] text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            Accédez à des avantages exclusifs, des invitations privées et un réseau de membres sélectionnés.
          </p>
          <motion.a
            href="/club-prive"
            className="inline-block px-10 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            whileHover={{ backgroundColor: '#E8C96A', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Demander mon accès →
          </motion.a>
        </motion.div>
      </section>
    </>
  );
};

export default VIPSections;
