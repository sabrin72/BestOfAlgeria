import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Building2, User, FileText, ChevronRight, Star, TrendingUp, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const steps = ['Profil', 'Activité', 'Documents', 'Confirmation'];

const benefits = [
  { icon: TrendingUp, title: 'Visibilité maximale', desc: 'Accédez à des milliers de clients qualifiés sur Best of Algeria.' },
  { icon: Star, title: 'Badge Partenaire', desc: 'Obtenez le badge officiel Best of Algeria et gagnez en crédibilité.' },
  { icon: Zap, title: 'Réservations directes', desc: 'Recevez des réservations et paiements directement via la plateforme.' },
  { icon: Shield, title: 'Support dédié', desc: 'Une équipe dédiée vous accompagne dans le développement de votre activité.' },
];

const categories = [
  'Activités & Loisirs', 'Hébergement', 'Restaurant & Café', 'Spa & Beauté',
  'Location de Véhicules', 'Conciergerie', 'Immobilier', 'Autre',
];

const wilayas = [
  'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar',
  'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger',
  'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma',
  'Constantine', 'Médéa', 'Mostaganem', 'M\'Sila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh',
  'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt',
  'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma',
  'Aïn Témouchent', 'Ghardaïa', 'Relizane', 'Timimoun', 'Bordj Badji Mokhtar',
  'Ouled Djellal', 'Béni Abbès', 'In Salah', 'In Guezzam', 'Touggourt', 'Djanet',
  'El M\'Ghair', 'El Meniaa', 'Dra El Mizan', 'Bordj El Kiffan', 'Beni Douala',
  'El Eulma', 'Debila', 'Hammam Dalaa', 'Ain Oulmene', 'Berkaoui', 'Hadjout',
  'Birtouta', 'Ain Defla',
];

const AffiliationPage = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    businessName: '', category: '', wilaya: '', address: '',
    website: '', description: '',
    rc: false, patente: false, photos: false,
  });

  const set = (key: string, val: string | boolean) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = () => setSubmitted(true);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[45vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628604540712-f93fc71275d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Affiliation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-[1600px] mx-auto px-6 pb-14 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                Rejoindre Best of Algeria
              </p>
              <h1 className="text-4xl md:text-6xl text-[#FAFAF8] leading-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                Demande d'Affiliation
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-b border-[#C9A84C]/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <p className="text-[#1A1A1A] text-sm mb-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{b.title}</p>
                  <p className="text-[#555] text-xs leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-[860px] mx-auto px-6">

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                <motion.div
                  className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                >
                  <CheckCircle size={40} className="text-green-500" />
                </motion.div>
                <h2 className="text-3xl text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  Demande envoyée !
                </h2>
                <p className="text-[#555] max-w-md mx-auto mb-8" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                  Votre demande d'affiliation a été reçue. Notre équipe l'examinera et vous contactera dans les 48h ouvrées.
                </p>
                <a href="/" className="px-8 py-3 bg-[#C9A84C] text-[#0A0A0A] text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Retour à l'accueil
                </a>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {/* Stepper */}
                <div className="flex items-center justify-between mb-10">
                  {steps.map((s, i) => (
                    <div key={i} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <motion.div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-sm border-2 transition-colors"
                          animate={{
                            backgroundColor: i < step ? '#C9A84C' : i === step ? '#C9A84C' : 'transparent',
                            borderColor: i <= step ? '#C9A84C' : '#D0C9B8',
                            color: i <= step ? '#0A0A0A' : '#9A8960',
                          }}
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                        >
                          {i < step ? <CheckCircle size={16} /> : i + 1}
                        </motion.div>
                        <span className="text-xs mt-1.5 hidden md:block" style={{ fontFamily: 'var(--font-sans)', color: i <= step ? '#1A1A1A' : '#9A8960', fontWeight: i === step ? 600 : 400 }}>{s}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="flex-1 h-px mx-2" style={{ backgroundColor: i < step ? '#C9A84C' : '#E0D9C8' }} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-[#C9A84C]/15 p-8">
                  <AnimatePresence mode="wait">
                    {/* Step 0: Profile */}
                    {step === 0 && (
                      <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3 className="text-xl text-[#1A1A1A] mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                          <User size={20} className="text-[#C9A84C]" /> Informations personnelles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {[
                            { label: 'Prénom', key: 'firstName', placeholder: 'Votre prénom' },
                            { label: 'Nom', key: 'lastName', placeholder: 'Votre nom' },
                            { label: 'Email professionnel', key: 'email', placeholder: 'contact@exemple.dz', type: 'email' },
                            { label: 'Téléphone', key: 'phone', placeholder: '+213 XXX XXX XXX' },
                          ].map(f => (
                            <div key={f.key}>
                              <label className="block text-xs uppercase tracking-wider text-[#555] mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{f.label}</label>
                              <input
                                type={f.type || 'text'}
                                value={form[f.key as keyof typeof form] as string}
                                onChange={e => set(f.key, e.target.value)}
                                placeholder={f.placeholder}
                                className="w-full px-4 py-3 border border-[#E0D9C8] focus:border-[#C9A84C] outline-none text-[#1A1A1A] text-sm transition-colors bg-[#FAFAF8]"
                                style={{ fontFamily: 'var(--font-sans)' }}
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 1: Activity */}
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3 className="text-xl text-[#1A1A1A] mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                          <Building2 size={20} className="text-[#C9A84C]" /> Votre activité
                        </h3>
                        <div className="space-y-5">
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#555] mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Nom de l'établissement</label>
                            <input value={form.businessName} onChange={e => set('businessName', e.target.value)} placeholder="Nom de votre entreprise" className="w-full px-4 py-3 border border-[#E0D9C8] focus:border-[#C9A84C] outline-none text-[#1A1A1A] text-sm bg-[#FAFAF8]" style={{ fontFamily: 'var(--font-sans)' }} />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-xs uppercase tracking-wider text-[#555] mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Catégorie</label>
                              <select value={form.category} onChange={e => set('category', e.target.value)} className="w-full px-4 py-3 border border-[#E0D9C8] focus:border-[#C9A84C] outline-none text-[#1A1A1A] text-sm bg-[#FAFAF8]" style={{ fontFamily: 'var(--font-sans)' }}>
                                <option value="">Choisir une catégorie</option>
                                {categories.map(c => <option key={c}>{c}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs uppercase tracking-wider text-[#555] mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Wilaya</label>
                              <select value={form.wilaya} onChange={e => set('wilaya', e.target.value)} className="w-full px-4 py-3 border border-[#E0D9C8] focus:border-[#C9A84C] outline-none text-[#1A1A1A] text-sm bg-[#FAFAF8]" style={{ fontFamily: 'var(--font-sans)' }}>
                                <option value="">Choisir une wilaya</option>
                                {wilayas.map(w => <option key={w}>{w}</option>)}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#555] mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Site web (optionnel)</label>
                            <input value={form.website} onChange={e => set('website', e.target.value)} placeholder="https://votre-site.dz" className="w-full px-4 py-3 border border-[#E0D9C8] focus:border-[#C9A84C] outline-none text-[#1A1A1A] text-sm bg-[#FAFAF8]" style={{ fontFamily: 'var(--font-sans)' }} />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#555] mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Description de votre activité</label>
                            <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={4} placeholder="Décrivez votre activité, vos services, votre positionnement..." className="w-full px-4 py-3 border border-[#E0D9C8] focus:border-[#C9A84C] outline-none text-[#1A1A1A] text-sm bg-[#FAFAF8] resize-none" style={{ fontFamily: 'var(--font-sans)' }} />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Documents */}
                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3 className="text-xl text-[#1A1A1A] mb-2 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                          <FileText size={20} className="text-[#C9A84C]" /> Documents requis
                        </h3>
                        <p className="text-[#555] text-sm mb-6" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>Confirmez que vous disposez des documents suivants. Ils seront demandés lors de la validation.</p>
                        <div className="space-y-4">
                          {[
                            { key: 'rc', label: 'Registre de Commerce (RC)', desc: 'Document officiel d\'enregistrement de votre entreprise' },
                            { key: 'patente', label: 'Patente en cours de validité', desc: 'Attestation de paiement de la taxe professionnelle' },
                            { key: 'photos', label: 'Photos de l\'établissement', desc: 'Minimum 5 photos de qualité professionnelle' },
                          ].map(doc => (
                            <label key={doc.key} className="flex items-start gap-4 p-4 border border-[#E0D9C8] cursor-pointer hover:border-[#C9A84C] transition-colors" onClick={() => set(doc.key, !form[doc.key as keyof typeof form])}>
                              <div className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${form[doc.key as keyof typeof form] ? 'bg-[#C9A84C] border-[#C9A84C]' : 'border-[#D0C9B8]'}`}>
                                {form[doc.key as keyof typeof form] && <CheckCircle size={13} className="text-[#0A0A0A]" />}
                              </div>
                              <div>
                                <p className="text-[#1A1A1A] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{doc.label}</p>
                                <p className="text-[#555] text-xs mt-0.5" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{doc.desc}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Confirmation */}
                    {step === 3 && (
                      <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3 className="text-xl text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>Récapitulatif</h3>
                        <div className="space-y-3 mb-8">
                          {[
                            { label: 'Contact', value: `${form.firstName} ${form.lastName} · ${form.email}` },
                            { label: 'Établissement', value: form.businessName || '—' },
                            { label: 'Catégorie', value: form.category || '—' },
                            { label: 'Wilaya', value: form.wilaya || '—' },
                          ].map(r => (
                            <div key={r.label} className="flex gap-4 py-3 border-b border-[#F0EBE0]">
                              <span className="text-xs uppercase tracking-wider text-[#9A8960] w-28 shrink-0" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{r.label}</span>
                              <span className="text-[#1A1A1A] text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{r.value}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[#555] text-xs leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                          En soumettant cette demande, vous acceptez les conditions d'affiliation de Best of Algeria. Notre équipe examinera votre dossier et vous contactera sous 48h ouvrées.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Nav buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-[#F0EBE0]">
                    <motion.button
                      onClick={() => setStep(s => Math.max(0, s - 1))}
                      className="px-6 py-2.5 border border-[#D0C9B8] text-[#555] text-sm uppercase tracking-wide"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, opacity: step === 0 ? 0 : 1 }}
                      whileHover={{ borderColor: '#C9A84C' }}
                      disabled={step === 0}
                    >
                      Retour
                    </motion.button>
                    <motion.button
                      onClick={() => step < 3 ? setStep(s => s + 1) : handleSubmit()}
                      className="flex items-center gap-2 px-8 py-2.5 bg-[#C9A84C] text-[#0A0A0A] text-sm uppercase tracking-wide"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                      whileHover={{ backgroundColor: '#E8C96A' }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {step === 3 ? 'Envoyer ma demande' : 'Continuer'}
                      <ChevronRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliationPage;
