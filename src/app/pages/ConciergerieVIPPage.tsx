import { Crown, Clock, Shield, Sparkles, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const ConciergerieVIPPage = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Réservations sur-mesure',
      items: [
        'Réservation de tables dans les restaurants les plus demandés',
        'Réservation de chambres avec vue spécifique',
        'Organisation de journées à la mer (beach club privatisé)',
        'Location de yachts et bateaux avec équipage',
      ],
    },
    {
      icon: Crown,
      title: 'Événements privés',
      items: [
        'Organisation de dîners privés et anniversaires',
        'Soirées privées dans les clubs select d\'Oran',
        'Accès aux événements sur invitation',
        'Coordination avec traiteurs et photographes',
      ],
    },
    {
      icon: Clock,
      title: 'Transfers & Logistique',
      items: [
        'Transferts aéroport en berline de luxe',
        'Véhicule avec chauffeur pour la journée',
        'Guide personnel bilingue pour visites',
        'Assistance pour démarches administratives',
      ],
    },
    {
      icon: Shield,
      title: 'Service Premium',
      items: [
        'Disponible 24h/24, 7j/7',
        'Réponse garantie sous 2h',
        'Discrétion absolue assurée',
        'Assistant dédié pour membres réguliers',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1720975658810-3d82b928474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Conciergerie VIP"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-[1600px] mx-auto px-6 pb-20 w-full">
            <div className="max-w-4xl">
              <div className="mb-8 inline-flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                  <Crown className="text-[#C9A84C]" size={32} />
                </div>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl text-[#FAFAF8] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Conciergerie VIP
              </h1>
              <p
                className="text-2xl text-[#C9A84C] italic mb-6"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
              >
                Votre vie simplifiée
              </p>
              <p
                className="text-[#8B6D22] text-xl"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                Nous gérons tout. Vous profitez de tout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Nos Services Premium
            </h2>
            <p
              className="text-[#8B6D22] text-lg"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              Un service ultra-premium pour une clientèle exigeante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#FAFAF8] border border-[#C9A84C]/20 p-8 hover:border-[#C9A84C] transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                  <service.icon className="text-[#C9A84C]" size={28} />
                </div>
                <h3
                  className="text-2xl text-[#1A1A1A] mb-4"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#8B6D22]"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      <span className="text-[#C9A84C] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl text-[#FAFAF8] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Faire une demande VIP
            </h2>
            <p
              className="text-[#8B6D22] text-lg mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              Réponse garantie sous 2h · Disponible 7j/7 · Discrétion assurée
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[#8B6D22] text-sm mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <div>
                <label
                  className="block text-[#8B6D22] text-sm mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[#8B6D22] text-sm mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <div>
                <label
                  className="block text-[#8B6D22] text-sm mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  Type de service
                </label>
                <select
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option>Réservations</option>
                  <option>Événement privé</option>
                  <option>Transfers</option>
                  <option>Autre demande</option>
                </select>
              </div>
            </div>

            <div>
              <label
                className="block text-[#8B6D22] text-sm mb-2"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              >
                Date souhaitée
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
            </div>

            <div>
              <label
                className="block text-[#8B6D22] text-sm mb-2"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              >
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none resize-none"
                style={{ fontFamily: 'var(--font-sans)' }}
                placeholder="Décrivez votre demande en détail..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A] transition-all text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              Envoyer ma demande VIP
            </button>
          </form>

          {/* Direct Contact */}
          <div className="mt-12 pt-12 border-t border-[#C9A84C]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <a
                href="tel:+213XXXXXXXXX"
                className="flex flex-col items-center gap-3 p-6 border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-all"
              >
                <Phone className="text-[#C9A84C]" size={32} />
                <div>
                  <div
                    className="text-[#FAFAF8] text-sm uppercase tracking-wider mb-1"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                  >
                    Téléphone
                  </div>
                  <div
                    className="text-[#8B6D22]"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                  >
                    +213 774 38 56 82
                  </div>
                </div>
              </a>
              <a
                href="mailto:vip@best-of-algeria.com"
                className="flex flex-col items-center gap-3 p-6 border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-all"
              >
                <Mail className="text-[#C9A84C]" size={32} />
                <div>
                  <div
                    className="text-[#FAFAF8] text-sm uppercase tracking-wider mb-1"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                  >
                    Email
                  </div>
                  <div
                    className="text-[#8B6D22]"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                  >
                    vip@best-of-algeria.com
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ConciergerieVIPPage;
