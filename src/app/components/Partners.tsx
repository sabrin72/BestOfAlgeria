import { useRef, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'motion/react';

const partners = [
  { name: 'Air Algérie', color: '#0A5C36', abbr: 'AH', bg: '#E8F5EE' },
  { name: 'Djezzy', color: '#E30613', abbr: 'DZ', bg: '#FEE8E9' },
  { name: 'Ooredoo', color: '#E30613', abbr: 'OO', bg: '#FEE8E9' },
  { name: 'Mobilis', color: '#00A0E3', abbr: 'MB', bg: '#E6F6FD' },
  { name: 'BNA Banque', color: '#003087', abbr: 'BNA', bg: '#E6EAF4' },
  { name: 'CPA Algeria', color: '#C9A84C', abbr: 'CPA', bg: '#FBF6E9' },
  { name: 'Hyatt Hotels', color: '#1A1A1A', abbr: 'HY', bg: '#F5F5F5' },
  { name: 'Marriott', color: '#8B0000', abbr: 'MR', bg: '#F7E6E6' },
  { name: 'Algérie Télécom', color: '#0062AC', abbr: 'AT', bg: '#E5EFF8' },
  { name: 'CAAT Assurance', color: '#C9A84C', abbr: 'CA', bg: '#FBF6E9' },
];

// Duplicate for seamless loop
const allPartners = [...partners, ...partners];

const SPEED = 40; // px/sec

const Partners = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useAnimationFrame((_, delta) => {
    if (paused.current || !containerRef.current) return;
    const half = containerRef.current.scrollWidth / 2;
    let next = x.get() - (delta / 1000) * SPEED;
    if (next <= -half) next = 0;
    x.set(next);
  });

  return (
    <section className="py-14 bg-white border-t border-[#C9A84C]/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 mb-8">
        <p
          className="text-center text-[#8B6D22] text-xs tracking-[0.35em] uppercase"
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
        >
          Nos partenaires de confiance
        </p>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max"
          style={{ x }}
        >
          {allPartners.map((p, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 px-6 py-4 cursor-pointer shrink-0"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {/* Logo block */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center shadow-sm border border-black/5"
                style={{ backgroundColor: p.bg }}
              >
                <span
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, color: p.color, letterSpacing: '-0.02em' }}
                >
                  {p.abbr}
                </span>
              </div>
              {/* Name */}
              <span
                className="text-[#4A4A4A] text-xs whitespace-nowrap"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              >
                {p.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
