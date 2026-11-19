import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/30">
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-6">
              <span className="text-[#FAFAF8] tracking-wider block" style={{ fontFamily: 'var(--font-serif)' }}>
                <span className="font-bold text-2xl">Best of Algeria</span>
              </span>
              <span className="text-[#C9A84C] italic text-sm tracking-[0.15em]" style={{ fontFamily: 'var(--font-serif)' }}>
                Endless Discovery
              </span>
            </div>
            <p
              className="text-[#C8B98A] text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              Votre partenaire exclusif pour découvrir, vivre et profiter du meilleur de l'Algérie.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: 'https://instagram.com/bestofalgeriaoran' },
                { Icon: Facebook, href: 'https://facebook.com/bestofalgeriaoran' },
                { Icon: Youtube, href: 'https://youtube.com/@bestofalgeriaoran' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Rubriques */}
          <div>
            <h4
              className="text-[#FAFAF8] text-sm uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              Rubriques
            </h4>
            <ul className="space-y-3">
              {['Activités', 'Hôtels', 'Restaurants', 'Location Voitures', 'Immobilier', 'Spa & Beauté'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/ /g, '-').replace(/é/g, 'e')}`}
                    className="text-[#C8B98A] hover:text-[#C9A84C] transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4
              className="text-[#FAFAF8] text-sm uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                <a
                  href="tel:+213 774 38 56 82"
                  className="text-[#C8B98A] hover:text-[#C9A84C] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                  +213 000 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@gmail.com"
                  className="text-[#C8B98A] hover:text-[#C9A84C] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                  contact@gmail.com 
                  
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                <span
                  className="text-[#C8B98A] text-sm"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                  Oran, Algérie
                </span>
              </li>
            
            </ul>
          </div>

        {/* SERVICE PREMUIM */}
          <div>
            <h4
              className="text-[#FAFAF8] text-sm uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              Service Premuim
            </h4>
            <ul className="space-y-4">

              <li className="flex items-start gap-3">
               
                <span
                  className="text-[#C8B98A] text-sm"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                Affliation
                </span>
              </li>
              <li className="flex items-start gap-3">
               <span
                  className="text-[#C8B98A] text-sm"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                >
                  Conciergerie VIP
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;