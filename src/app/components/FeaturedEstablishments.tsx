import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const featured = [
  {
    name: 'Méridien Oran',
    type: 'Hôtel 5 étoiles',
    location: 'Oran Centre',
    rating: 4.9,
    reviews: 342,
    price: '45,000 DZD',
    priceUnit: '/ nuit',
    badge: 'Coup de coeur',
    badgeColor: 'bg-[#C9A84C]',
    image: 'https://images.unsplash.com/photo-1720975658810-3d82b928474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    name: 'El Firdaous',
    type: 'Restaurant Gastronomique',
    location: 'Les Falaises, Oran',
    rating: 4.8,
    reviews: 567,
    price: '8,500 DZD',
    priceUnit: '/ personne',
    badge: 'Tendance',
    badgeColor: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    name: 'St Trop Beach Club',
    type: 'Beach Club Premium',
    location: 'Ain El Turck',
    rating: 4.7,
    reviews: 289,
    price: '12,000 DZD',
    priceUnit: '/ journée',
    badge: 'Nouveau',
    badgeColor: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1633149668746-2891c0ff7334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    name: 'Quad Adventures Sahara',
    type: 'Activité Aventure',
    location: 'Grand Erg Occidental',
    rating: 4.9,
    reviews: 198,
    price: '15,000 DZD',
    priceUnit: '/ journée',
    badge: 'Exclusif',
    badgeColor: 'bg-[#8B4513]',
    image: 'https://images.unsplash.com/photo-1690942566395-f80f79320f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    name: 'Hammam El Andalous',
    type: 'Spa & Bien-être',
    location: 'Alger Médina',
    rating: 4.8,
    reviews: 412,
    price: '5,500 DZD',
    priceUnit: '/ séance',
    badge: 'Best of',
    badgeColor: 'bg-[#C9A84C]',
    image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

const FeaturedEstablishments = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(310);
  const total = featured.length;

  // Responsive card width
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1536) setCardWidth(420);
      else if (window.innerWidth >= 1280) setCardWidth(380);
      else if (window.innerWidth >= 1024) setCardWidth(340);
      else if (window.innerWidth >= 768) setCardWidth(310);
      else setCardWidth(Math.min(window.innerWidth - 48, 300));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, total - 1));
    setActiveIndex(clamped);
  };

  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  // Swipe handler
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  // return (

  //   <section className="py-24 bg-[#0A0A0A] overflow-hidden">
  //     <div className="max-w-[1600px] mx-auto px-6">
  //       {/* Header */}
  //       <motion.div
  //         className="text-center mb-16"
  //         initial={{ opacity: 0, y: 30 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ duration: 0.7 }}
  //       >
  //         <h2
  //           className="text-4xl md:text-5xl text-[#FAFAF8] mb-3"
  //           style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
  //         >
  //           Les mieux notés du moment
  //         </h2>
  //         <p className="text-[#8B6D22]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
  //           Sélection hebdomadaire par notre équipe
  //         </p>
  //       </motion.div>

  //       {/* 3D Carousel */}
  //       <motion.div
  //         className="relative flex items-center justify-center select-none"
  //         style={{ perspective: '1400px', height: cardWidth * 1.45 }}
  //         drag="x"
  //         dragConstraints={{ left: 0, right: 0 }}
  //         dragElastic={0.1}
  //         onDragEnd={handleDragEnd}
  //       >
  //         {featured.map((item, index) => {
  //           const rawOffset = index - activeIndex;
  //           let offset = rawOffset;
  //           if (offset > Math.floor(total / 2)) offset -= total;
  //           if (offset < -Math.floor(total / 2)) offset += total;

  //           const absOffset = Math.abs(offset);
  //           if (absOffset > 2) return null;

  //           const zIndex = 10 - absOffset;
  //           const scale = offset === 0 ? 1 : absOffset === 1 ? 0.84 : 0.70;
  //           const xPct = offset === 0 ? '0%' : `${offset * 60}%`;
  //           const rotateY = offset === 0 ? 0 : offset > 0 ? -20 : 20;
  //           const opacity = absOffset === 2 ? 0.45 : absOffset === 1 ? 0.85 : 1;
  //           const brightness = absOffset === 0 ? 1 : absOffset === 1 ? 0.65 : 0.45;

  //           return (
  //             <motion.div
  //               key={item.name}
  //               className="absolute cursor-pointer"
  //               style={{ zIndex, width: cardWidth, transformStyle: 'preserve-3d' }}
  //               animate={{ x: xPct, scale, rotateY, opacity }}
  //               transition={{ type: 'spring', stiffness: 260, damping: 32, mass: 0.8 }}
  //               onClick={() => offset !== 0 && setActiveIndex(index)}
  //               whileHover={offset !== 0 ? { scale: scale * 1.04 } : {}}
  //             >
  //               <div
  //                 className="bg-[#111111] border-2 border-[#C9A84C]/20 overflow-hidden shadow-2xl rounded-4xl"
  //                 style={{ filter: `brightness(${brightness})` }}
  //               >
  //                 {/* Image */}
  //                 <div className="relative h-44 overflow-hidden">
  //                   <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
  //                   <div className={`absolute top-3 right-3 ${item.badgeColor} text-white px-3 py-1 text-[10px] uppercase tracking-wider`}
  //                     style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
  //                   >
  //                     {item.badge}
  //                   </div>
  //                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  //                 </div>

  //                 {/* Content */}
  //                 <div className="p-5">
  //                   <h3 className="text-lg text-[#FAFAF8] mb-0.5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{item.name}</h3>
  //                   <p className="text-[#8B6D22] text-xs mb-3" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
  //                     {item.type} · {item.location}
  //                   </p>

  //                   <div className="flex items-center gap-1.5 mb-3">
  //                     <div className="flex items-center gap-0.5">
  //                       {[...Array(5)].map((_, i) => (
  //                         <Star key={i} size={11} className={i < Math.floor(item.rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-gray-600'} />
  //                       ))}
  //                     </div>
  //                     <span className="text-[#FAFAF8] text-xs" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{item.rating}</span>
  //                     <span className="text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>({item.reviews})</span>
  //                   </div>

  //                   <div className="flex items-center justify-between pt-3 border-t border-[#C9A84C]/15">
  //                     <div>
  //                       <span className="text-[#C9A84C] text-lg" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{item.price}</span>
  //                       <span className="text-[#8B6D22] text-[10px] ml-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item.priceUnit}</span>
  //                     </div>
  //                     <motion.button
  //                       className="px-4 py-1.5 bg-[#C9A84C] text-[#0A0A0A] text-xs uppercase tracking-wide"
  //                       style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
  //                       whileTap={{ scale: 0.96 }}
  //                     >
  //                       Réserver
  //                     </motion.button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </motion.div>
  //           );
  //         })}
  //       </motion.div>

  //       {/* Controls */}
  //       <div className="hidden md:flex items-center justify-center gap-8 mt-6">
  //         <motion.button
  //           onClick={prev}
  //           className="w-11 h-11 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-colors flex items-center justify-center"
  //           whileTap={{ scale: 0.92 }}
  //           whileHover={{ borderColor: '#C9A84C' }}
  //         >
  //           <ChevronLeft size={20} />
  //         </motion.button>

  //         <div className="flex items-center gap-2">
  //           {featured.map((_, i) => (
  //             <motion.button
  //               key={i}
  //               onClick={() => setActiveIndex(i)}
  //               className="rounded-full bg-[#C9A84C]/30 hover:bg-[#C9A84C]/70 transition-colors"
  //               animate={{ width: i === activeIndex ? 28 : 8, height: 8, backgroundColor: i === activeIndex ? '#C9A84C' : 'rgba(201,168,76,0.3)' }}
  //               transition={{ type: 'spring', stiffness: 400, damping: 30 }}
  //             />
  //           ))}
  //         </div>

  //         <motion.button
  //           onClick={next}
  //           className="w-11 h-11 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-colors flex items-center justify-center"
  //           whileTap={{ scale: 0.92 }}
  //         >
  //           <ChevronRight size={20} />
  //         </motion.button>
  //       </div>
  //     </div>
  //   </section>
  // );



  return (
    <section className="relative py-24 overflow-hidden">
      {/* soft ambient warmth instead of flat white */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-[#C9A84C]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[10%] w-[400px] h-[400px] bg-[#C9A84C]/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-[#B8944A] text-[11px] uppercase tracking-[0.35em] mb-3"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
          >
            Sélection N°01
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#141310] mb-4"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Les mieux notés du moment
          </h2>
          {/* <div className="w-14 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" /> */}
        </motion.div>

        {/* 3D Carousel */}
        <motion.div
          className="relative flex items-center justify-center select-none"
          style={{ perspective: '1400px', height: cardWidth * 1.9 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {featured.map((item, index) => {
            const rawOffset = index - activeIndex;
            let offset = rawOffset;
            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;

            const absOffset = Math.abs(offset);
            if (absOffset > 2) return null;

            const isActive = offset === 0;
            const zIndex = 10 - absOffset;
            const scale = isActive ? 1 : absOffset === 1 ? 0.84 : 0.70;
            const xPct = isActive ? '0%' : `${offset * 60}%`;
            const rotateY = isActive ? 0 : offset > 0 ? -20 : 20;
            const opacity = absOffset === 2 ? 0.5 : absOffset === 1 ? 0.85 : 1;

            return (
              <motion.div
                key={item.name}
                className="absolute cursor-pointer"
                style={{ zIndex, width: cardWidth, transformStyle: 'preserve-3d' }}
                animate={{ x: xPct, scale, rotateY, opacity }}
                transition={{ type: 'spring', stiffness: 260, damping: 32, mass: 0.8 }}
                onClick={() => !isActive && setActiveIndex(index)}
                whileHover={!isActive ? { scale: scale * 1.04 } : { y: -4 }}
              >
                {/* foil-edge ring, lit gold only when active */}
                <div
                  className="rounded-[2rem] p-[1px]"
                  style={{
                    background: isActive
                      ? 'linear-gradient(155deg, #C9A84C 0%, #E8C978 45%, #C9A84C 100%)'
                      : 'linear-gradient(155deg, rgba(20,19,16,0.12) 0%, rgba(20,19,16,0.04) 100%)',
                    boxShadow: isActive
                      ? '0 25px 55px -20px rgba(20,19,16,0.35), 0 0 30px -8px rgba(201,168,76,0.35)'
                      : '0 15px 35px -18px rgba(20,19,16,0.25)',
                  }}
                >
                  <div className="bg-[#FFFFFE] rounded-[calc(2rem-1px)] overflow-hidden">
                    {/* Image */}
                    <div className="relative h-84 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div
                        className="absolute top-3 right-3 backdrop-blur-md bg-white/70 border border-[#141310]/10 text-[#141310] px-3 py-1 text-[10px] uppercase tracking-wider rounded-full"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        {item.badge}
                      </div>
                      <div
                        className="absolute top-3 left-3 backdrop-blur-md bg-black/30 text-white/90 text-[11px] tracking-wide px-2 py-0.5 rounded-full"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        N°{String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg text-[#141310] mb-0.5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{item.name}</h3>
                      <p className="text-[#8B6D22] text-xs mb-3" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
                        {item.type} · {item.location}
                      </p>

                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} className={i < Math.floor(item.rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-[#E4E0D6]'} />
                          ))}
                        </div>
                        <span className="text-[#141310] text-xs" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{item.rating}</span>
                        <span className="text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>({item.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#141310]/8">
                        <div>
                          <span className="text-[#B8944A] text-lg" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{item.price}</span>
                          <span className="text-[#8B6D22]/70 text-[10px] ml-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}>{item.priceUnit}</span>
                        </div>
                        <motion.button
                          className="px-4 py-1.5 bg-[#141310] text-[#F5F1E8] text-xs uppercase tracking-wide rounded-full"
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                          whileHover={{ backgroundColor: '#C9A84C', color: '#141310' }}
                          whileTap={{ scale: 0.96 }}
                        >
                          Réserver
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Controls
        <div className="hidden md:flex items-center justify-center gap-8 mt-10">
          <motion.button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-[#141310]/15 text-[#141310] flex items-center justify-center"
            whileHover={{ backgroundColor: '#141310', color: '#F5F1E8', borderColor: '#141310' }}
            whileTap={{ scale: 0.92 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div className="flex items-center gap-2">
            {featured.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="rounded-full"
                animate={{
                  width: i === activeIndex ? 28 : 6,
                  height: 6,
                  backgroundColor: i === activeIndex ? '#C9A84C' : 'rgba(20,19,16,0.15)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            className="w-11 h-11 rounded-full border border-[#141310]/15 text-[#141310] flex items-center justify-center"
            whileHover={{ backgroundColor: '#141310', color: '#F5F1E8', borderColor: '#141310' }}
            whileTap={{ scale: 0.92 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedEstablishments;
