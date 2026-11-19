import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Search, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { wilayas, regionLabels, type Region } from '../data/wilayas';
import WilayaCard from './WilayaCard';

const PREVIEW_COUNT = 10;

const WilayaDiscovery = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<Region>('all');

  const filtered = useMemo(() => {
    return wilayas.filter((w) => {
      const matchesSearch =
        search === '' ||
        w.name.toLowerCase().includes(search.toLowerCase()) ||
        w.spots.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      const matchesRegion = region === 'all' || w.region === region;
      return matchesSearch && matchesRegion;
    });
  }, [search, region]);

  const preview = filtered.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-24 md:py-32 bg-[#F2EDE4]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] mb-4 font-semibold">
            Accès gratuit
          </p>
          <h2
            className="text-4xl md:text-6xl text-[#1A1A1A] mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
          >
            Bons lieux en Algérie,<br />
            <span className="text-[#8B6D22] italic">par wilaya</span>
          </h2>
          <p className="text-[#5A5A5A] max-w-xl mx-auto">
            Sites naturels, vestiges historiques, panoramas sauvages — découvrez les trésors gratuits des 69 wilayas.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B6D22]" />
            <input
              type="text"
              placeholder="Rechercher une wilaya ou un lieu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#C9A84C]/20 focus:border-[#C9A84C] outline-none text-[#1A1A1A] text-sm rounded-xl"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(['all', 'nord', 'hauts', 'sud'] as Region[]).map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider rounded-full transition-all border ${
                  region === r
                    ? 'bg-[#C9A84C] text-[#0A0A0A] border-[#C9A84C]'
                    : 'border-[#C9A84C]/30 text-[#5A5A5A] hover:border-[#C9A84C]'
                }`}
              >
                {regionLabels[r]}
              </button>
            ))}
          </div>
          <span className="text-[#8B6D22] text-sm shrink-0 font-medium">
            {filtered.length} wilaya{filtered.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {preview.map((w) => (
            <WilayaCard key={w.id} wilaya={w} />
          ))}
        </div>

        {preview.length === 0 && (
          <p className="text-center py-20 text-[#8B6D22]">
            Aucune wilaya ne correspond à votre recherche.
          </p>
        )}

        {filtered.length > PREVIEW_COUNT && (
          <div className="text-center mt-12">
            <button
             onClick={() => {
  sessionStorage.setItem(
    'wilayaFilters',
    JSON.stringify({ search, region })
  );
  window.location.href = '/wilayas';
}}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#F2EDE4] px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-[#0A0A0A] transition-colors"
            >
              Voir plus
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WilayaDiscovery;