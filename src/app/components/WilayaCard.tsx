import { MapPin } from 'lucide-react';
import { regionColors, regionLabels, type Region } from '../data/wilayas';

type Wilaya = {
  id: number;
  name: string;
  region: string;
  spots: string[];
};

const WilayaCard = ({ wilaya }: { wilaya: Wilaya }) => {
  const color = regionColors[wilaya.region as Region];
  const imgQuery = encodeURIComponent(`${wilaya.name} Algeria landscape`);
  const fallback = `https://picsum.photos/seed/${wilaya.id}/500/400`;

  const regionLabel =
    wilaya.region === 'nord' ? 'Nord' : wilaya.region === 'hauts' ? 'Hauts Pl.' : 'Grand Sud';

  return (
    <div className="bg-white border border-[#C9A84C]/15 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EDE4]">
        <img
          src={`https://source.unsplash.com/500x400/?${imgQuery}`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallback;
          }}
          alt={wilaya.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className="absolute top-2 left-2 text-[9px] uppercase tracking-wider px-2 py-1 rounded-full font-semibold"
          style={{ color, backgroundColor: '#fff' }}
        >
          {regionLabel}
        </span>
      </div>
      <div className="p-3">
        <h3
          className="text-sm text-[#1A1A1A] leading-snug mb-1"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
        >
          {wilaya.name}
        </h3>
        <p className="flex items-start gap-1 text-[11px] text-[#8B6D22] leading-snug line-clamp-1">
          <MapPin size={11} className="shrink-0 mt-0.5" />
          {wilaya.spots[0]}
        </p>
      </div>
    </div>
  );
};

export default WilayaCard;