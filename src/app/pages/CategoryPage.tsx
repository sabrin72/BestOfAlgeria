import { Star, MapPin, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

interface Establishment {
  name: string;
  type: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  priceUnit?: string;
  image: string;
  featured?: boolean;
}

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  establishments: Establishment[];
  filters?: string[];
}

const CategoryPage = ({ title, subtitle, description, heroImage, establishments, filters }: CategoryPageProps) => {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
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
                {title}
              </h1>
              <p
                className="text-xl text-[#C9A84C] italic mb-4"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
              >
                {subtitle}
              </p>
              <p
                className="text-[#8B6D22] text-lg"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      {filters && filters.length > 0 && (
        <section className="bg-white border-b border-[#C9A84C]/10 sticky top-[72px] z-40">
          <div className="max-w-[1600px] mx-auto px-6 py-6">
            <div className="flex flex-wrap gap-3">
              <button
                className="px-5 py-2 bg-[#C9A84C] text-[#0A0A0A] text-sm uppercase tracking-wide transition-all"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
              >
                Tous
              </button>
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className="px-5 py-2 border border-[#C9A84C]/30 text-[#1A1A1A] hover:bg-[#C9A84C] hover:text-[#0A0A0A] text-sm uppercase tracking-wide transition-all"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Establishments Grid */}
      <section className="py-16">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {establishments.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
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
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3
                      className="text-2xl text-[#1A1A1A] mb-2 group-hover:text-[#C9A84C] transition-colors"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-[#8B6D22] text-sm mb-2"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      {item.type}
                    </p>
                    <div className="flex items-center gap-1 text-[#8B6D22] text-sm">
                      <MapPin size={14} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(item.rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span
                      className="text-[#1A1A1A] text-sm"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                    >
                      {item.rating}
                    </span>
                    <span
                      className="text-[#8B6D22] text-sm"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      ({item.reviews})
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
                    <div>
                      <span
                        className="text-[#C9A84C] text-2xl"
                        style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                      >
                        {item.price}
                      </span>
                      {item.priceUnit && (
                        <span
                          className="text-[#8B6D22] text-sm ml-1"
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                        >
                          {item.priceUnit}
                        </span>
                      )}
                    </div>
                    <button
                      className="px-5 py-2 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A] transition-all flex items-center gap-2 group/btn"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                    >
                      <span className="text-sm uppercase tracking-wide">Voir</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryPage;
