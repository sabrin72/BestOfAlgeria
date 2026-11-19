import { useState, useEffect } from 'react';
import { Menu, X, User, Search, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

type Lang = 'FR' | 'EN' | 'AR';

const clubPriveDropdown = [
  { name: 'Nakhla', href: '/club-prive/nakhla' },
  { name: 'Nissa Circle', href: '/club-prive/nissa' },
];

const navLinks = [
  { name: 'BOA El Kheir', href: '/boa-el-kheir' },
  { name: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { name: 'Devenir partenaire', href: '/affiliation' },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clubOpen, setClubOpen] = useState(false);
  const [mobileClubOpen, setMobileClubOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('FR');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(true);
  }, []);

  const isHome = typeof window !== 'undefined' && window.location.pathname === '/';
  const langLabels: Record<Lang, string> = { FR: 'Français', EN: 'English', AR: 'العربية' };

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isHome) {
      document.getElementById('prestations')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#prestations';
    }
  };

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#C9A84C]/20'
    : 'bg-transparent border-b border-transparent';
  const logoMain = scrolled ? 'text-[#1A1A1A]' : 'text-[#FAFAF8]';
  const logoSub = scrolled ? 'text-[#8B6D22]' : 'text-[#C9A84C]';
  const linkClass = scrolled
    ? 'text-[#1A1A1A] hover:text-[#8B6D22]'
    : 'text-[#F5EDD6] hover:text-[#C9A84C]';
  const iconClass = scrolled
    ? 'text-[#4A4A4A] hover:text-[#8B6D22]'
    : 'text-[#FAFAF8]/80 hover:text-[#C9A84C]';
  const dropdownBg = 'bg-[#0D0D0D] border border-[#C9A84C]/25 shadow-2xl';

  return (
    <>
      <div className="h-[72px]" />

      <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${navBg}`}>
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

<Link to="/" className="flex items-center gap-2">

  <div className="flex flex-col leading-tight">
    <span
      className="text-[#050504] tracking-wider"
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      <span className="font-bold text-lg md:text-xl">
        Best of Algeria
      </span>
    </span>

    <span
      className="text-[#C9A84C] italic text-[10px] md:text-xs tracking-[0.15em]"
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      Endless Discovery
    </span>
  </div>
</Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#prestations"
                onClick={handleScrollToServices}
                className={`transition-colors text-xs tracking-[0.2em] uppercase ${linkClass}`}
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              >
                Nos Services
              </a>

              {/* Club Privé */}
              <div className="relative" onMouseLeave={() => setClubOpen(false)}>
                <button
                  className={`flex items-center gap-1 transition-colors text-xs tracking-[0.2em] uppercase ${linkClass}`}
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                  onMouseEnter={() => setClubOpen(true)}
                >
                  Club Privé
                  <ChevronDown size={12} className={`transition-transform duration-200 ${clubOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {clubOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className={`absolute top-full left-0 mt-3 w-52 z-50 ${dropdownBg}`}
                    >
                      {clubPriveDropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between px-5 py-3.5 text-[#F5EDD6] hover:text-[#C9A84C] hover:bg-[#C9A84C]/5 text-xs tracking-[0.15em] uppercase transition-colors border-b border-[#C9A84C]/10 last:border-0"
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                        >
                          <span>{item.name}</span>
                          {'nameAr' in item && (
                            <span className="text-[#C9A84C]/60 text-sm" style={{ fontFamily: 'var(--font-serif)' }}>
                           
                            </span>
                          )}
                        </a>
                      ))}
                      <a
                        href="/club-prive"
                        className="block px-5 py-3 text-[#C9A84C]/60 hover:text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase transition-colors"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Voir le Club →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors text-xs tracking-[0.2em] uppercase ${linkClass}`}
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <button
                  className={`flex items-center gap-1.5 transition-colors ${iconClass}`}
                  onClick={() => setLangOpen(!langOpen)}
                >
                  <Globe size={16} />
                  <span className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{lang}</span>
                  <ChevronDown size={11} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`absolute top-full right-0 mt-3 w-36 z-50 ${dropdownBg}`}
                    >
                      {(['FR', 'EN', 'AR'] as Lang[]).map((l) => (
                        <button
                          key={l}
                          className={`w-full text-left px-4 py-2.5 text-xs tracking-wider uppercase transition-colors border-b border-[#C9A84C]/10 last:border-0 ${lang === l ? 'text-[#C9A84C]' : 'text-[#F5EDD6] hover:text-[#C9A84C]'}`}
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: lang === l ? 700 : 400 }}
                          onClick={() => { setLang(l); setLangOpen(false); }}
                          dir={l === 'AR' ? 'rtl' : 'ltr'}
                        >
                          {langLabels[l]}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className={`w-px h-5 transition-colors duration-500 ${scrolled ? 'bg-[#1A1A1A]/20' : 'bg-[#C9A84C]/30'}`} />

              <button className={`transition-colors p-1 ${iconClass}`}><Search size={18} /></button>
              <button className={`transition-colors p-1 ${iconClass}`}><User size={18} /></button>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#1A1A1A]' : 'text-[#C9A84C]'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-[#0D0D0D] border-t border-[#C9A84C]/20"
            >
              <div className="px-6 py-5 space-y-1">

                {/* Nos Services */}
                <a
                  href="#prestations"
                  onClick={handleScrollToServices}
                  className="block text-[#F5EDD6] hover:text-[#C9A84C] transition-colors text-sm py-3 border-b border-white/5"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  Nos Services
                </a>

                {/* Club Privé */}
                <div className="border-b border-white/5">
                  <button
                    className="flex items-center justify-between w-full text-[#F5EDD6] hover:text-[#C9A84C] transition-colors text-sm py-3"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                    onClick={() => setMobileClubOpen(!mobileClubOpen)}
                  >
                    <span>Club Privé</span>
                    <ChevronDown size={14} className={`transition-transform ${mobileClubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileClubOpen && (
                    <div className="pl-4 pb-3 space-y-2">
                      {clubPriveDropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-2 text-[#8B6D22] hover:text-[#C9A84C] text-sm py-1.5"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {item.name}
                          
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-[#F5EDD6] hover:text-[#C9A84C] transition-colors text-sm py-3 border-b border-white/5"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Mobile icons */}
                <div className="pt-4 flex items-center gap-5">
                 <button className="text-[#8B6D22] hover:text-[#C9A84C] transition-colors p-1" title="Rechercher">
                <Search size={18} />
              </button>            
              <button className="text-[#8B6D22] hover:text-[#C9A84C] transition-colors p-1" title="Profil">
                <User size={18} />
              </button>
            </div>

                {/* Lang switcher */}
                <div className="pt-3 flex gap-2">
                  {(['FR', 'EN', 'AR'] as Lang[]).map((l) => (
                    <button
                      key={l}
                      className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-colors rounded-sm ${lang === l ? 'bg-[#C9A84C] text-[#0A0A0A] border-[#C9A84C]' : 'border-[#C9A84C]/30 text-[#8B6D22] hover:border-[#C9A84C]'}`}
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      onClick={() => setLang(l)}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;
