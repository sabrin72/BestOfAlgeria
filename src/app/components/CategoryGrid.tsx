// import { ArrowRight } from 'lucide-react';
// import { motion } from 'motion/react';

// const categories = [
//   {
//     title: 'Activités & Loisirs',
//     description: 'Jet Ski · Karting · Plongée · Quad · Bowling',
//     count: '68 activités',
//     href: '/activites',
//     image: 'https://images.unsplash.com/photo-1761418741187-c21e38180ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
//   },
//   {
//     title: 'Hébergement et Immobilier',
//     description: 'Hôtels 5* · Riads · Villas · Location courte durée',
//     count: '132 annonces',
//     href: '/immobilier',
//     image: 'https://images.unsplash.com/photo-1720975658810-3d82b928474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
//   },
//   {
//     title: 'Restaurants & Gastronomie',
//     description: 'Gastronomie · Cafés · Brunch · Pâtisseries',
//     count: '124 adresses',
//     href: '/restaurants',
//     image: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
//   },
//   {
//     title: 'Location de Véhicules',
//     description: 'Berlines · SUV · 4×4 Sahara · Avec chauffeur',
//     count: '32 loueurs',
//     href: '/location-voitures',
//     image: 'https://images.unsplash.com/photo-1728953885765-33ef475d8baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
//   },
//   {
//     title: 'Spa & Beauté',
//     description: 'Hammams · Spas · Instituts · Barbershops',
//     count: '52 adresses',
//     href: '/spa-beaute',
//     image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
//   },
//   {
//     title: 'Conciergerie VIP',
//     description: 'Services privés · Transferts · Événements',
//     count: 'Sur mesure',
//     href: '/conciergerie-vip',
//     image: 'https://images.unsplash.com/photo-1633149668746-2891c0ff7334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
//   },
// ];

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08 } },
// };
// const item = {
//   hidden: { opacity: 0, y: 28 },
//   show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 28 } },
// };

// const CategoryGrid = () => {
//   return (
//     <section id="prestations" className="py-14 md:py-20 bg-[#FAFAF8]">
//       <div className="max-w-[1600px] mx-auto px-4 md:px-6">
//         {/* Section Title */}
//         <motion.div
//           className="text-center mb-10 md:mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2
//             className="text-3xl md:text-5xl lg:text-6xl text-[#C9A84C] italic mb-3"
//             style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
//           >
//             Toutes les prestations,
//           </h2>
//           <p
//             className="text-xl md:text-3xl text-[#1A1A1A]"
//             style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
//           >
//             réunies en un seul endroit
//           </p>
//         </motion.div>

//         {/* Category Grid — 2 cols mobile, 3 cols desktop */}
//         <motion.div
//           className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: '-60px' }}
//         >
//           {categories.map((category) => (
//             <motion.a
//               key={category.title}
//               href={category.href}
//               className="group relative bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C] overflow-hidden transition-colors duration-300 hover:shadow-xl rounded-2xl"
//               whileHover={{ y: -4 }}
//               transition={{ type: 'spring', stiffness: 400, damping: 30 }}
//             >
//               {/* Image */}
//               <div className="relative h-36 md:h-64 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
//                 <motion.img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.6 }}
//                 />
//               </div>

//               {/* Content */}
//               <div className="relative p-4 md:p-8">
//                 <h3
//                   className="text-base md:text-2xl text-[#1A1A1A] mb-1 md:mb-3 group-hover:text-[#C9A84C] transition-colors leading-snug"
//                   style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
//                 >
//                   {category.title}
//                 </h3>
//                 <p
//                   className="hidden md:block text-[#8B6D22] text-sm mb-4 leading-relaxed"
//                   style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
//                 >
//                   {category.description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <span
//                     className="text-[#C9A84C] text-xs md:text-sm tracking-wide"
//                     style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
//                   >
//                     {category.count}
//                   </span>
//                   <ArrowRight
//                     className="text-[#C9A84C] group-hover:translate-x-1.5 transition-transform"
//                     size={16}
//                   />
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CategoryGrid;


import { motion } from 'motion/react';

const categories = [
  {
    title: 'Hébergement & Hôtels',
    href: '/immobilier',
    image: 'https://images.unsplash.com/photo-1771218829768-16501433f7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Gastronomie',
    href: '/restaurants',
    image: 'https://images.unsplash.com/photo-1773932479972-81d143066ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Activités & Loisirs',
    href: '/activites',
    image: 'https://images.unsplash.com/photo-1523496922380-91d5afba98a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Aventures Sahariennes',
    href: '/activites',
    image: 'https://images.unsplash.com/photo-1714313164992-4c33788bd6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Bien-Être & Spas',
    href: '/spa-beaute',
    image: 'https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Club Privé',
    href: '/club-prive',
    image: 'https://images.unsplash.com/photo-1781955781178-6ea29c66e860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 28 } },
};

const CategoryGrid = () => {
  return (
    <section id="prestations" className="bg-[#0D0D0D] py-14 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">

        {/* Minimal header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-[#C9A84C] text-[10px] uppercase tracking-[0.5em] mb-4"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
          >
            Best of Algeria
          </p>
          <h2
            className="text-2xl md:text-4xl text-[#FAFAF8] italic"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}
          >
            Nos Prestations
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A84C]/50 mx-auto mt-5" />
        </motion.div>

        {/* Grid — 2 cols on all screens, 3 on large desktop */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {categories.map((category) => (
            <motion.a
              key={category.title}
              href={category.href}
              className="group block overflow-hidden border border-white/[0.06] hover:border-[#C9A84C]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle overlay darkens on non-hover, lightens on hover */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Label strip */}
              <div className="bg-[#111111] border-t border-white/[0.06] py-4 md:py-5 px-3 text-center">
                <span
                  className="text-[#FAFAF8] text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.45em] group-hover:text-[#C9A84C] transition-colors duration-400"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                  {category.title}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;
