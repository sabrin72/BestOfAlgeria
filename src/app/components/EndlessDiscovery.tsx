import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1628604540712-f93fc71275d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    alt: 'Méditerranée algérienne',
    className: 'h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1690942566395-f80f79320f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    alt: 'Sahara',
    className: 'h-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    alt: 'Gastronomie algérienne',
    className: 'h-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1633149668746-2891c0ff7334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    alt: 'Beach Club',
    className: 'h-64',
  },
];

const titleWords = [
  { text: "BOA", gold: false },
  { text: 'jamais', gold: true },
  { text: 'vue', gold: true },
];

const EndlessDiscovery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const isTextInView = useInView(textRef, { once: true, margin: '-5%' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.55], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div ref={textRef}>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              {titleWords.map((w, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.28em]"
                  initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
                  animate={isTextInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  style={w.gold ? { color: '#C9A84C', fontStyle: 'italic' } : {}}
                >
                  {w.text}
                </motion.span>
              ))}
            </h2>

            {/* Scroll-driven underline */}
            <div className="mb-7 h-[2px] bg-[#F0EBE0] relative overflow-hidden">
              <motion.div className="absolute inset-y-0 left-0 bg-[#C9A84C]" style={{ width: lineWidth }} />
            </div>

            <motion.p
              className="text-[#555] text-lg leading-relaxed mb-5"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              initial={{ opacity: 0, y: 18 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.52 }}
            >
              Best Of Algeria est votre partenaire exclusif pour découvrir, vivre et profiter du meilleur de l'Algérie.
              Gastronomie, sport, culture, loisirs, événements, et bien plus encore. Notre mission : offrir des expériences inoubliables.
            </motion.p>

            <motion.p
              className="text-[#555] text-lg leading-relaxed mb-9"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              initial={{ opacity: 0, y: 18 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.66 }}
            >
              Des plages turquoises de la Méditerranée aux dunes dorées du Sahara, en passant par les tables gastronomiques d'Oran et d'Alger,
              nous sélectionnons pour vous le meilleur de chaque destination.
            </motion.p>

            <motion.a
              href="/qui-sommes-nous"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all group"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              initial={{ opacity: 0, y: 16 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="text-sm tracking-[0.1em] uppercase">Découvrir notre histoire</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right: Parallax mosaic */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="space-y-4" style={{ y: y1 }}>
              {images.slice(0, 2).map((img, i) => (
                <motion.div
                  key={i}
                  className={`${img.className} overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.25 + i * 0.15 }}
                >
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="space-y-4 pt-8" style={{ y: y2 }}>
              {images.slice(2, 4).map((img, i) => (
                <motion.div
                  key={i}
                  className={`${img.className} overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
                >
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EndlessDiscovery;
