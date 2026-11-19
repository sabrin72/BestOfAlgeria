import { useState } from 'react';
import { Star, MapPin, ArrowRight, Users, Heart, UserCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

type Group = 'all' | 'famille' | 'amis' | 'couple';
type ActivityFilter = string;

const activities = [
  {
    name: 'Jet Ski Oran Bay',
    type: 'Sports Nautiques',
    location: 'Ain El Turck',
    rating: 4.8,
    reviews: 234,
    price: '8,000 DZD',
    priceUnit: '/ 30min',
    image: 'https://images.unsplash.com/photo-1761418741187-c21e38180ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    featured: true,
    groups: ['amis', 'couple'] as Group[],
    category: 'Jet Ski',
  },
  {
    name: 'Karting International',
    type: 'Karting',
    location: 'Bir El Djir',
    rating: 4.7,
    reviews: 312,
    price: '3,500 DZD',
    priceUnit: '/ session',
    image: 'https://images.unsplash.com/photo-1596199235118-7afdc7da1bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    featured: true,
    groups: ['famille', 'amis'] as Group[],
    category: 'Karting',
  },
  {
    name: 'Plongée Les Aiguades',
    type: 'Plongée Sous-Marine',
    location: 'Les Aiguades',
    rating: 4.9,
    reviews: 189,
    price: '12,000 DZD',
    priceUnit: '/ sortie',
    image: 'https://images.unsplash.com/photo-1764056230965-570f10082acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    featured: true,
    groups: ['couple', 'amis'] as Group[],
    category: 'Plongée',
  },
  {
    name: 'Quad Adventures Sahara',
    type: 'Quad & 4x4',
    location: 'Sahara',
    rating: 4.8,
    reviews: 267,
    price: '15,000 DZD',
    priceUnit: '/ journée',
    image: 'https://images.unsplash.com/photo-1690942566395-f80f79320f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    featured: false,
    groups: ['famille', 'amis', 'couple'] as Group[],
    category: 'Quad',
  },
  {
    name: 'Escape Room Alger',
    type: 'Escape Game',
    location: 'Alger Centre',
    rating: 4.6,
    reviews: 423,
    price: '2,500 DZD',
    priceUnit: '/ personne',
    image: 'https://images.unsplash.com/photo-1769234549179-f761882f7f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    featured: false,
    groups: ['famille', 'amis'] as Group[],
    category: 'Escape Game',
  },
  {
    name: 'Bowling Premium',
    type: 'Bowling & Loisirs',
    location: 'Oran',
    rating: 4.5,
    reviews: 345,
    price: '1,800 DZD',
    priceUnit: '/ partie',
    image: 'https://images.unsplash.com/photo-1656176892356-68bfc9cd9f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    featured: false,
    groups: ['famille', 'amis'] as Group[],
    category: 'Bowling',
  },
  {
    name: 'Dîner Romantique en Mer',
    type: 'Croisière Privée',
    location: 'Port d\'Oran',
    rating: 4.9,
    reviews: 87,
    price: '22,000 DZD',
    priceUnit: '/ couple',
    image: 'https://images.unsplash.com/photo-1633149668746-2891c0ff7334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    featured: true,
    groups: ['couple'] as Group[],
    category: 'Jet Ski',
  },
  {
    name: 'Randonnée Hoggar',
    type: 'Trek & Aventure',
    location: 'Tamanrasset',
    rating: 4.8,
    reviews: 142,
    price: '9,500 DZD',
    priceUnit: '/ personne',
    image: 'https://images.unsplash.com/photo-1628604540712-f93fc71275d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    featured: false,
    groups: ['famille', 'amis'] as Group[],
    category: 'Quad',
  },
];

const categoryFilters = ['Jet Ski', 'Karting', 'Plongée', 'Quad', 'Bowling', 'Escape Game'];

const groupOptions: { key: Group; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'Toutes', icon: null },
  { key: 'famille', label: 'Famille', icon: <Users size={15} /> },
  { key: 'amis', label: 'Entre amis', icon: <UserCheck size={15} /> },
  { key: 'couple', label: 'Couple', icon: <Heart size={15} /> },
];

const ActivitiesPage = () => {
  const [groupFilter, setGroupFilter] = useState<Group>('all');
  const [categoryFilter, setCategoryFilter] = useState<ActivityFilter>('all');

  const filtered = activities.filter((a) => {
    const groupOk = groupFilter === 'all' || a.groups.includes(groupFilter);
    const catOk = categoryFilter === 'all' || a.category === categoryFilter;
    return groupOk && catOk;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761418741187-c21e38180ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Activités"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-[1600px] mx-auto px-6 pb-16 w-full">
            <div className="max-w-3xl">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl text-[#FAFAF8] mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Activités & Loisirs
              </h1>
              <p className="text-xl text-[#C9A84C] italic" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                Vivez des expériences inoubliables
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-white border-b border-[#C9A84C]/10 sticky top-[72px] z-40">
        <div className="max-w-[1600px] mx-auto px-6 py-5">
          {/* Group filter */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[#8B6D22] text-xs uppercase tracking-wider mr-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
              Pour qui :
            </span>
            {groupOptions.map((g) => (
              <button
                key={g.key}
                onClick={() => setGroupFilter(g.key)}
                className={`flex items-center gap-1.5 px-5 py-2 text-sm uppercase tracking-wide transition-all border ${groupFilter === g.key ? 'bg-[#C9A84C] text-[#0A0A0A] border-[#C9A84C]' : 'border-[#C9A84C]/30 text-[#1A1A1A] hover:border-[#C9A84C] hover:bg-[#C9A84C]/5'}`}
                style={{ fontFamily: 'var(--font-sans)', fontWeight: groupFilter === g.key ? 600 : 500 }}
              >
                {g.icon}
                {g.label}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-4 py-1.5 text-xs uppercase tracking-wide transition-all ${categoryFilter === 'all' ? 'bg-[#1A1A1A] text-white' : 'border border-gray-200 text-[#4A4A4A] hover:border-[#1A1A1A]'}`}
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              Tous
            </button>
            {categoryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setCategoryFilter(f)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wide transition-all ${categoryFilter === f ? 'bg-[#1A1A1A] text-white' : 'border border-gray-200 text-[#4A4A4A] hover:border-[#1A1A1A]'}`}
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-[1600px] mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#8B6D22] text-lg" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Aucune activité ne correspond à cette sélection.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#0A0A0A] px-4 py-1.5 text-xs uppercase tracking-wider"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                      >
                        Recommandé
                      </div>
                    )}
                    {/* Group badges */}
                    <div className="absolute bottom-3 left-3 flex gap-1.5">
                      {item.groups.map((g) => (
                        <span
                          key={g}
                          className="px-2.5 py-1 bg-black/60 text-white text-xs uppercase tracking-wide backdrop-blur-sm"
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                        >
                          {g === 'famille' ? 'Famille' : g === 'amis' ? 'Amis' : 'Couple'}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-2xl text-[#1A1A1A] mb-2 group-hover:text-[#C9A84C] transition-colors"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-[#8B6D22] text-sm mb-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item.type}</p>
                    <div className="flex items-center gap-1 text-[#8B6D22] text-sm mb-3">
                      <MapPin size={14} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item.location}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className={i < Math.floor(item.rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-gray-300'} />
                        ))}
                      </div>
                      <span className="text-[#1A1A1A] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{item.rating}</span>
                      <span className="text-[#8B6D22] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>({item.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
                      <div>
                        <span className="text-[#C9A84C] text-xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{item.price}</span>
                        <span className="text-[#8B6D22] text-sm ml-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item.priceUnit}</span>
                      </div>
                      <a
                        href="/activite-detail"
                        className="flex items-center gap-2 px-5 py-2 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A] transition-all group/btn"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                      >
                        <span className="text-sm uppercase tracking-wide">Réserver</span>
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ActivitiesPage;
