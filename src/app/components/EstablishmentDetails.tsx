import { useState } from 'react';
import { Star, MapPin, Phone, Mail, Clock, Wifi, Car, Coffee, Utensils, Sparkles, Share2, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface Review {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface Amenity {
  icon: any;
  label: string;
}

interface EstablishmentDetailsProps {
  name: string;
  type: string;
  location: string;
  rating: number;
  totalReviews: number;
  price: string;
  priceUnit?: string;
  description: string;
  images: string[];
  amenities: Amenity[];
  reviews: Review[];
  phone?: string;
  email?: string;
  hours?: string;
  relatedEstablishments?: any[];
}

const EstablishmentDetails = ({
  name,
  type,
  location,
  rating,
  totalReviews,
  price,
  priceUnit,
  description,
  images,
  amenities,
  reviews,
  phone,
  email,
  hours,
  relatedEstablishments = []
}: EstablishmentDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Image Gallery Hero */}
      <section className="pt-20">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[500px]">
            {/* Main Image */}
            <div
              className="md:col-span-2 md:row-span-2 relative overflow-hidden cursor-pointer group"
              onClick={() => { setShowGallery(true); setCurrentImageIndex(0); }}
            >
              <img
                src={images[0]}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* Secondary Images */}
            {images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => { setShowGallery(true); setCurrentImageIndex(index + 1); }}
              >
                <img
                  src={image}
                  alt={`${name} ${index + 2}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span
                      className="text-white text-2xl"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                    >
                      +{images.length - 5} photos
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1
                      className="text-4xl md:text-5xl text-[#1A1A1A] mb-2"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                    >
                      {name}
                    </h1>
                    <p
                      className="text-[#8B6D22] text-lg mb-3"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      {type}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`p-3 border-2 transition-all ${
                        isFavorite
                          ? 'border-[#C9A84C] bg-[#C9A84C] text-white'
                          : 'border-[#C9A84C]/30 text-[#C9A84C] hover:border-[#C9A84C]'
                      }`}
                    >
                      <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                    </button>
                    <button className="p-3 border-2 border-[#C9A84C]/30 text-[#C9A84C] hover:border-[#C9A84C] transition-all">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Rating & Location */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < Math.floor(rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span
                      className="text-[#1A1A1A]"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                    >
                      {rating}
                    </span>
                    <span
                      className="text-[#8B6D22]"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      ({totalReviews} avis)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#8B6D22]">
                    <MapPin size={18} className="text-[#C9A84C]" />
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                      {location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-12 pb-12 border-b border-[#C9A84C]/10">
                <h2
                  className="text-2xl text-[#1A1A1A] mb-4"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  À propos
                </h2>
                <p
                  className="text-[#18150e] text-lg leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                  {description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-12 pb-12 border-b border-[#C9A84C]/10">
                <h2
                  className="text-2xl text-[#1A1A1A] mb-6"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Équipements & Services
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="text-[#C9A84C]" size={20} />
                      </div>
                      <span
                        className="text-[#1A1A1A]"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                      >
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="mb-12">
                <h2
                  className="text-2xl text-[#1A1A1A] mb-6"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Avis clients
                </h2>

                {/* Review Summary */}
                <div className="bg-white border border-[#C9A84C]/10 p-8 mb-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="text-center">
                      <div
                        className="text-5xl text-[#C9A84C] mb-2"
                        style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                      >
                        {rating}
                      </div>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <p
                        className="text-[#8B6D22] text-sm"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                      >
                        {totalReviews} avis
                      </p>
                    </div>

                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3">
                          <span
                            className="text-sm text-[#8B6D22] w-12"
                            style={{ fontFamily: 'var(--font-sans)' }}
                          >
                            {stars} étoiles
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#C9A84C]"
                              style={{ width: `${Math.random() * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-white border border-[#C9A84C]/10 p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4
                              className="text-[#1A1A1A]"
                              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                            >
                              {review.name}
                            </h4>
                            <span
                              className="text-sm text-[#8B6D22]"
                              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                            >
                              {review.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={i < review.rating ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                          <p
                            className="text-[#2c271a]"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                          >
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border-2 border-[#C9A84C]/20 p-8">
                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#C9A84C]/10">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-4xl text-[#C9A84C]"
                        style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                      >
                        {price}
                      </span>
                      {priceUnit && (
                        <span
                          className="text-[#8B6D22]"
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                        >
                          {priceUnit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Booking Form */}
                  <form className="space-y-4 mb-6">
                    <div>
                      <label
                        className="block text-[#1A1A1A] text-sm mb-2"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Date d'arrivée
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[#1A1A1A] text-sm mb-2"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Date de départ
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[#1A1A1A] text-sm mb-2"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Nombre de personnes
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <option>1 personne</option>
                        <option>2 personnes</option>
                        <option>3 personnes</option>
                        <option>4+ personnes</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A] transition-all text-sm uppercase tracking-[0.15em]"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                    >
                      Réserver maintenant
                    </button>
                  </form>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-6 border-t border-[#C9A84C]/10">
                    {phone && (
                      <a
                        href={`tel:${phone}`}
                        className="flex items-center gap-3 text-[#8B6D22] hover:text-[#C9A84C] transition-colors"
                      >
                        <Phone size={18} />
                        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                          {phone}
                        </span>
                      </a>
                    )}
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-3 text-[#8B6D22] hover:text-[#C9A84C] transition-colors"
                      >
                        <Mail size={18} />
                        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                          {email}
                        </span>
                      </a>
                    )}
                    {hours && (
                      <div className="flex items-center gap-3 text-[#8B6D22]">
                        <Clock size={18} />
                        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                          {hours}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Establishments */}
      {relatedEstablishments.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1600px] mx-auto px-6">
            <h2
              className="text-3xl text-[#1A1A1A] mb-8"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Vous pourriez aussi aimer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedEstablishments.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="group bg-[#FAFAF8] border border-[#C9A84C]/10 hover:border-[#C9A84C] overflow-hidden transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl text-[#1A1A1A] mb-2"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-[#8B6D22] text-sm mb-4"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      {item.type}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[#C9A84C] text-xl"
                        style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                      >
                        {item.price}
                      </span>
                      <button
                        className="text-[#C9A84C] hover:text-[#E8C96A] transition-colors"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                      >
                        Voir →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Lightbox */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-6 right-6 text-white hover:text-[#C9A84C] transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-[#C9A84C] transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`${name} ${currentImageIndex + 1}`}
            className="max-w-[90%] max-h-[90%] object-contain"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-[#C9A84C] transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
            <span style={{ fontFamily: 'var(--font-sans)' }}>
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EstablishmentDetails;
