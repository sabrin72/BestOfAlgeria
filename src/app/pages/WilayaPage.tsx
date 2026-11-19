import { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router';
import { Search, ArrowLeft } from 'lucide-react';
import { wilayas, regionLabels, type Region } from '../data/wilayas';
import WilayaCard from '../components/WilayaCard';

const WilayasPage = () => {
  const location = useLocation();
  const initial = (location.state as { search?: string; region?: Region }) || {};
  const [search, setSearch] = useState(initial.search ?? '');
  const [region, setRegion] = useState<Region>(initial.region ?? 'all');

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

  return (
    <section className="py-16 md:py-24 bg-[#F2EDE4] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[#8B6D22] text-sm mb-8 hover:underline">
          <ArrowLeft size={14} /> Retour à l'accueil
        </Link>

        <h1
          className="text-3xl md:text-5xl text-[#1A1A1A] mb-8"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
        >
          Toutes les wilayas
        </h1>

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
          {filtered.map((w) => (
            <WilayaCard key={w.id} wilaya={w} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-20 text-[#8B6D22]">
            Aucune wilaya ne correspond à votre recherche.
          </p>
        )}
      </div>
    </section>
  );
};

export default WilayasPage;