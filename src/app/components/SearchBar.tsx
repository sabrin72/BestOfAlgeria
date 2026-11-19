import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <section className="bg-[#111111] py-8 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Category */}
          <div>
            <label
              className="block text-[#8B6D22] text-xs uppercase tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              Catégorie
            </label>
            <select className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <option>Tous les services</option>
              <option>Activités</option>
              <option>Hôtels</option>
              <option>Restaurants</option>
              <option>Location Voitures</option>
              <option>Immobilier</option>
              <option>Spa & Beauté</option>
            </select>
          </div>

          {/* Destination */}
          <div>
            <label
              className="block text-[#8B6D22] text-xs uppercase tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              Destination
            </label>
            <select className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <option>Toute l'Algérie</option>
              <option>Alger</option>
              <option>Oran</option>
              <option>Sahara</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label
              className="block text-[#8B6D22] text-xs uppercase tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            />
          </div>

          {/* Budget */}
          <div>
            <label
              className="block text-[#8B6D22] text-xs uppercase tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              Budget
            </label>
            <select className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <option>Tous budgets</option>
              <option>Économique</option>
              <option>Moyen</option>
              <option>Premium</option>
              <option>Luxe</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full px-6 py-3 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A] transition-all rounded flex items-center justify-center gap-2 group"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              <Search size={18} />
              <span className="text-sm tracking-[0.15em] uppercase">Rechercher</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
