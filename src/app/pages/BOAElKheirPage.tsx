import { motion } from 'motion/react';
import { Heart, BookOpen, TrendingUp, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const pillars = [
  {
    icon: BookOpen,
    title: 'Éducation',
    titleAr: 'التعليم',
    description: "Soutien aux jeunes talents algériens via des bourses, des formations et des mentorats. Parce que l'excellence de demain se prépare aujourd'hui.",
  },
  {
    icon: Heart,
    title: 'Solidarité',
    titleAr: 'التضامن',
    description: "Actions concrètes dans les régions défavorisées — aide alimentaire, accès aux soins, reconstruction de liens sociaux.",
  },
  {
    icon: TrendingUp,
    title: 'Transparence',
    titleAr: 'الشفافية',
    description: "Chaque dinar collecté est tracé et publié. Nous publions nos comptes trimestriels et nos rapports d'impact en ligne, sans exception.",
  },
];

const projects = [
  {
    title: 'Mille Lecteurs',
    location: 'Wilaya de Tamanrasset',
    description: "Distribution de 1 000 livres scolaires dans les zones isolées du Grand Sud algérien.",
    status: 'En cours',
    progress: 72,
  },
  {
    title: 'Eau & Dignité',
    location: 'Hauts Plateaux',
    description: "Réhabilitation de 12 points d'eau potable dans 3 communes rurales.",
    status: 'En cours',
    progress: 45,
  },
  {
    title: 'Artisanes du Sud',
    location: 'Wilaya d\'Adrar',
    description: "Formation et mise en réseau de 80 artisanes pour valoriser l'artisanat saharien sur les marchés nationaux et internationaux.",
    status: 'Terminé',
    progress: 100,
  },
];

const BOAElKheirPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630212372458-91cfa6583eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Algérie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            className="text-[#C9A84C] text-xs uppercase tracking-[0.5em] mb-5"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Une initiative Best of Algeria
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <h1
              className="text-6xl md:text-8xl text-[#C9A84C] mb-2"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}
            >
              El Kheir
            </h1>
            <p
              className="text-3xl md:text-4xl text-[#FAFAF8]/80 mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, direction: 'rtl' }}
            >
              الخير
            </p>
          </motion.div>

          <motion.p
            className="text-[#F5EDD6]/70 text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            "Partager pour mieux construire."
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] mb-5" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                Notre Mission
              </p>
              <h2
                className="text-4xl md:text-5xl text-[#1A1A1A] mb-7 leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
              >
                L&apos;excellence<br />
                <span className="text-[#8B6D22] italic">au service du bien commun</span>
              </h2>
              <div className="space-y-5 text-[#3A3A3A]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: 1.85 }}>
                <p>
                  BOA El Kheir est le bras philanthropique de Best of Algeria. Convaincus que le luxe a une responsabilité sociale, nous reversons une part de chaque transaction réalisée sur la plateforme à des projets concrets sur le terrain algérien.
                </p>
                <p>
                  Pas de promesses vagues. Des projets identifiés, des communautés précises, des résultats mesurables et publiés en toute transparence à nos membres et au grand public.
                </p>
                <p>
                  BOA El Kheir, c&apos;est la preuve que l&apos;excellence algérienne peut se mettre au service de l&apos;Algérie entière.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="bg-[#13100A] p-10 text-center">
                <p className="text-[#C9A84C]/60 text-xs uppercase tracking-[0.4em] mb-6" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Impact 2025
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '3', unit: 'projets', label: 'actifs' },
                    { value: '1 800+', unit: 'bénéficiaires', label: 'directs' },
                    { value: '100%', unit: 'traçabilité', label: 'des fonds' },
                    { value: '5%', unit: 'reversé', label: 'de chaque vente' },
                  ].map((s) => (
                    <div key={s.unit} className="text-center">
                      <p className="text-[#C9A84C] text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}>{s.value}</p>
                      <p className="text-[#FAFAF8] text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{s.unit}</p>
                      <p className="text-[#C9A84C]/50 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#C9A84C]/25" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
              Nos trois piliers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="bg-white p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className="w-12 h-12 bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                  <p.icon size={24} className="text-[#C9A84C]" />
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}>{p.title}</h3>
                  <span className="text-[#C9A84C]/60" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: '1.1rem' }}>{p.titleAr}</span>
                </div>
                <p className="text-[#5A5A5A] leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '0.9rem' }}>
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] mb-4" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Transparence</p>
            <h2 className="text-4xl md:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Nos projets en cours</h2>
          </motion.div>

          <div className="space-y-5">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                className="border border-[#C9A84C]/15 p-6 md:p-8 bg-white hover:border-[#C9A84C]/40 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}>{proj.title}</h3>
                      <span
                        className={`text-[10px] uppercase tracking-wider px-2.5 py-1 ${proj.status === 'Terminé' ? 'bg-green-100 text-green-700' : 'bg-[#C9A84C]/15 text-[#8B6D22]'}`}
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                      >
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-[#C9A84C] text-xs uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                      <Users size={11} className="inline mr-1.5" />{proj.location}
                    </p>
                    <p className="text-[#5A5A5A] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>{proj.description}</p>
                  </div>
                  <div className="md:w-48 shrink-0">
                    <div className="flex justify-between text-xs text-[#8B6D22] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                      <span>Avancement</span>
                      <span className="font-semibold">{proj.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-[#C9A84C]/15 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#C9A84C] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proj.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — contribute */}
      <section className="py-32 bg-[#13100A] text-center">
        <motion.div
          className="max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-4xl md:text-6xl text-[#FAFAF8] mb-4 leading-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
            Contribuez à<br />
            <span className="text-[#C9A84C] italic">El Kheir</span>
          </h2>
          <p className="text-[#F5EDD6]/60 mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
            En réservant sur Best of Algeria, vous contribuez déjà. Pour aller plus loin, contactez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/affiliation"
              className="px-10 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}
              whileHover={{ backgroundColor: '#E8C96A', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Devenir partenaire
            </motion.a>
            <motion.a
              href="/"
              className="px-10 py-4 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
              whileHover={{ borderColor: '#C9A84C', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explorer BOA
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BOAElKheirPage;
