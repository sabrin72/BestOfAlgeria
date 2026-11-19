import { Sparkles, Gift, Users, Star, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const ClubPrivePage = () => {
  const benefits = [
    {
      icon: Gift,
      title: 'Avantages pratiques',
      items: [
        'Réservations prioritaires dans tous les établissements partenaires',
        'Tarifs négociés exclusifs (jusqu\'à -30% dans les hôtels)',
        'Accès anticipé aux nouvelles adresses avant ouverture',
        'Invitation aux inaugurations et événements presse',
      ],
    },
    {
      icon: Users,
      title: 'Réseau & Communauté',
      items: [
        'Accès au réseau privé de membres (entrepreneurs, décideurs)',
        'Dîners networking mensuels dans les meilleurs restaurants',
        'Groupe WhatsApp privé "Club Best Of Algeria"',
        'Annuaire interne des membres (avec consentement)',
      ],
    },
    {
      icon: Star,
      title: 'Programme de fidélité',
      items: [
        'Cumul de points à chaque réservation',
        'Paliers : Membre · Silver · Gold · Platinum',
        'Cadeaux et surprises aux membres actifs',
        'Carte membre digitale avec QR code',
      ],
    },
  ];

  const membershipTiers = [
    {
      name: 'Club Silver',
      price: '2,000 DZD',
      period: '/ mois',
      features: [
        'Réductions partenaires',
        'Invitations événements',
        'Groupe WhatsApp privé',
        'Newsletter exclusive',
      ],
      recommended: false,
    },
    {
      name: 'Club Gold',
      price: '5,000 DZD',
      period: '/ mois',
      features: [
        'Tous avantages Silver',
        'Conciergerie incluse',
        'Réductions jusqu\'à -30%',
        'Dîners networking',
        'Assistant dédié',
      ],
      recommended: true,
    },
    {
      name: 'Club Platinum',
      price: 'Sur invitation',
      period: '',
      features: [
        'Tous avantages Gold',
        'Accès total illimité',
        'Assistant personnel 24/7',
        'Événements exclusifs',
        'Priorité absolue',
      ],
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#C9A84C] rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div className="mb-8 inline-flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                <Sparkles className="text-[#C9A84C]" size={40} />
              </div>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-[#FAFAF8] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Rejoignez le Cercle
            </h1>
            <p
              className="text-3xl text-[#C9A84C] italic mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
            >
              Best Of Algeria
            </p>
            <p
              className="text-xl text-[#8B6D22] max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              L'Algérie autrement. Pour ceux qui savent.
            </p>
            <div className="mt-8">
              <div
                className="text-[#C9A84C] text-lg"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
              >
                <TrendingUp className="inline-block mr-2" size={20} />
                347 membres actifs dans le Club
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Avantages Membres
            </h2>
            <p
              className="text-[#8B6D22] text-lg"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              Un cercle exclusif pour une expérience unique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#FAFAF8] border border-[#C9A84C]/20 p-8 hover:border-[#C9A84C] transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="text-[#C9A84C]" size={28} />
                </div>
                <h3
                  className="text-2xl text-[#1A1A1A] mb-4"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
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

      {/* Membership Tiers */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Choisissez votre niveau
            </h2>
            <p
              className="text-[#8B6D22] text-lg"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              Une formule adaptée à chaque profil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white border-2 p-8 transition-all ${
                  tier.recommended
                    ? 'border-[#C9A84C] shadow-2xl scale-105'
                    : 'border-[#C9A84C]/20 hover:border-[#C9A84C]'
                }`}
              >
                {tier.recommended && (
                  <div className="text-center mb-6">
                    <span
                      className="inline-block px-4 py-1 bg-[#C9A84C] text-[#0A0A0A] text-xs uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                    >
                      Recommandé
                    </span>
                  </div>
                )}
                <h3
                  className="text-3xl text-[#1A1A1A] mb-2 text-center"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  {tier.name}
                </h3>
                <div className="text-center mb-8">
                  <span
                    className="text-4xl text-[#C9A84C]"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className="text-[#8B6D22] text-lg ml-2"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#8B6D22]"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                    >
                      <span className="text-[#C9A84C] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 transition-all text-sm uppercase tracking-[0.15em] ${
                    tier.recommended
                      ? 'bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A]'
                      : 'border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A]'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                >
                  {tier.recommended ? 'Adhérer maintenant' : 'En savoir plus'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl text-[#FAFAF8] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Demander mon adhésion
            </h2>
            <p
              className="text-[#8B6D22] text-lg"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              Rejoignez le cercle exclusif Best Of Algeria
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[#8B6D22] text-sm mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  Prénom
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
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[#8B6D22] text-sm mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  Ville
                </label>
                <select
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option>Alger</option>
                  <option>Oran</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-[#8B6D22] text-sm mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  Profession
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-[#8B6D22] text-sm mb-2"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              >
                Code de parrainage (optionnel)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-[#1A1A1A] text-[#F5EDD6] border border-[#C9A84C]/20 rounded focus:border-[#C9A84C] outline-none"
                style={{ fontFamily: 'var(--font-sans)' }}
                placeholder="Si vous avez été parrainé"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A] transition-all text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              Demander mon adhésion
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ClubPrivePage;
