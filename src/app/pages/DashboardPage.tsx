import { useState } from 'react';
import {
  LayoutDashboard, CalendarCheck, Users, Star, TrendingUp,
  ShoppingBag, MessageSquare, Settings, LogOut, Bell,
  ChevronRight, ArrowUpRight, ArrowDownRight,
  Clock, CheckCircle, XCircle, AlertCircle, Car,
  Utensils, Bed, Waves, Menu, UserCheck, Link2,
  AlertTriangle, CreditCard, Download, Eye, Shield,
  Crown, BarChart2, Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts';

// ─── DATA ────────────────────────────────────────────────────────────────────

const revenueByPeriod = {
  day: [
    { label: '08h', revenue: 45000, bookings: 4 },
    { label: '10h', revenue: 78000, bookings: 7 },
    { label: '12h', revenue: 120000, bookings: 11 },
    { label: '14h', revenue: 95000, bookings: 9 },
    { label: '16h', revenue: 140000, bookings: 13 },
    { label: '18h', revenue: 180000, bookings: 16 },
    { label: '20h', revenue: 110000, bookings: 10 },
  ],
  week: [
    { label: 'Lun', revenue: 180000, bookings: 16 },
    { label: 'Mar', revenue: 220000, bookings: 20 },
    { label: 'Mer', revenue: 195000, bookings: 18 },
    { label: 'Jeu', revenue: 260000, bookings: 24 },
    { label: 'Ven', revenue: 310000, bookings: 29 },
    { label: 'Sam', revenue: 420000, bookings: 39 },
    { label: 'Dim', revenue: 380000, bookings: 35 },
  ],
  month: [
    { label: 'S1', revenue: 1200000, bookings: 112 },
    { label: 'S2', revenue: 1450000, bookings: 134 },
    { label: 'S3', revenue: 1680000, bookings: 155 },
    { label: 'S4', revenue: 1940000, bookings: 181 },
  ],
  year: [
    { label: 'Jan', revenue: 4200000, bookings: 380 },
    { label: 'Fév', revenue: 3850000, bookings: 340 },
    { label: 'Mar', revenue: 5100000, bookings: 470 },
    { label: 'Avr', revenue: 6800000, bookings: 610 },
    { label: 'Mai', revenue: 7200000, bookings: 680 },
    { label: 'Jun', revenue: 8900000, bookings: 820 },
    { label: 'Jul', revenue: 10500000, bookings: 970 },
    { label: 'Aoû', revenue: 9800000, bookings: 910 },
    { label: 'Sep', revenue: 7600000, bookings: 720 },
    { label: 'Oct', revenue: 6400000, bookings: 590 },
    { label: 'Nov', revenue: 5200000, bookings: 480 },
    { label: 'Déc', revenue: 7500000, bookings: 700 },
  ],
};

const topWilayas = [
  { name: 'Oran', bookings: 842, pct: 100 },
  { name: 'Alger', bookings: 731, pct: 87 },
  { name: 'Béjaïa', bookings: 412, pct: 49 },
  { name: 'Tlemcen', bookings: 298, pct: 35 },
  { name: 'Annaba', bookings: 241, pct: 29 },
  { name: 'Tamanrasset', bookings: 189, pct: 22 },
];

const topCategories = [
  { name: 'Activités', bookings: 1284, color: '#C9A84C' },
  { name: 'Hébergement', bookings: 1124, color: '#E8C96A' },
  { name: 'Restaurants', bookings: 803, color: '#A07A28' },
  { name: 'Spa', bookings: 481, color: '#D4B86A' },
  { name: 'Chauffeur', bookings: 321, color: '#8B6914' },
];

const affiliatePending = [
  { id: 'AFF-0291', name: 'Riad El Boustane', category: 'Hébergement', wilaya: 'Tlemcen', submitted: '10 Jun 2026', docs: true },
  { id: 'AFF-0290', name: 'Beach Sports Béjaïa', category: 'Activités', wilaya: 'Béjaïa', submitted: '09 Jun 2026', docs: true },
  { id: 'AFF-0289', name: 'Café Atlas', category: 'Restaurant', wilaya: 'Oran', submitted: '08 Jun 2026', docs: false },
  { id: 'AFF-0288', name: 'Spa Andalous', category: 'Spa & Beauté', wilaya: 'Alger', submitted: '07 Jun 2026', docs: true },
];

const disputedBookings = [
  { id: 'BOA-2820', client: 'Tarek Mansouri', provider: 'Jet Ski Oran Bay', amount: '8 000 DZD', reason: 'Prestation non conforme', status: 'open', date: '05 Jun' },
  { id: 'BOA-2815', client: 'Lila Hamdi', provider: 'Riad Sidi Bou', amount: '25 000 DZD', reason: 'Annulation tardive', status: 'investigating', date: '04 Jun' },
  { id: 'BOA-2808', client: 'Omar Benali', provider: 'El Firdaous', amount: '12 500 DZD', reason: 'Paiement non crédité', status: 'resolved', date: '02 Jun' },
];

const payoutSchedule = [
  { provider: 'Méridien Oran', amount: '145 000 DZD', date: '15 Jun 2026', status: 'scheduled', bookings: 8 },
  { provider: 'El Firdaous Restaurant', amount: '68 000 DZD', date: '15 Jun 2026', status: 'scheduled', bookings: 12 },
  { provider: 'Jet Ski Oran Bay', amount: '32 000 DZD', date: '15 Jun 2026', status: 'processing', bookings: 5 },
  { provider: 'Hammam El Andalous', amount: '22 000 DZD', date: '20 Jun 2026', status: 'pending', bookings: 4 },
  { provider: 'Quad Sahara Adventures', amount: '75 000 DZD', date: '20 Jun 2026', status: 'pending', bookings: 6 },
];

const users = [
  { name: 'Yasmine Belkacem', email: 'yasmine@email.dz', role: 'client', bookings: 8, joined: 'Jan 2026', avatar: 'https://i.pravatar.cc/40?img=47' },
  { name: 'Karim Messaoud', email: 'karim@biz.dz', role: 'vip', bookings: 24, joined: 'Nov 2025', avatar: 'https://i.pravatar.cc/40?img=12' },
  { name: 'Nour Rahmani', email: 'nour@email.dz', role: 'client', bookings: 3, joined: 'Mar 2026', avatar: 'https://i.pravatar.cc/40?img=32' },
  { name: 'Sofiane Ouali', email: 'sofiane@co.dz', role: 'provider', bookings: 0, joined: 'Fév 2026', avatar: 'https://i.pravatar.cc/40?img=15' },
  { name: 'Amira Djoudi', email: 'amira@email.dz', role: 'vip', bookings: 19, joined: 'Oct 2025', avatar: 'https://i.pravatar.cc/40?img=44' },
  { name: 'Mehdi Boukhari', email: 'mehdi@guide.dz', role: 'provider', bookings: 0, joined: 'Jan 2026', avatar: 'https://i.pravatar.cc/40?img=18' },
];

const recentBookings = [
  { id: 'BOA-2847', client: 'Yasmine Belkacem', service: 'Jet Ski Oran Bay', date: '12 Jun', amount: '8 000 DZD', status: 'confirmed', icon: Waves },
  { id: 'BOA-2846', client: 'Karim Messaoud', service: 'Méridien Oran — Suite', date: '12 Jun', amount: '45 000 DZD', status: 'pending', icon: Bed },
  { id: 'BOA-2845', client: 'Nour Rahmani', service: 'El Firdaous — Dîner', date: '11 Jun', amount: '8 500 DZD', status: 'confirmed', icon: Utensils },
  { id: 'BOA-2844', client: 'Sofiane Ouali', service: 'Chauffeur VIP', date: '11 Jun', amount: '18 000 DZD', status: 'confirmed', icon: Car },
  { id: 'BOA-2843', client: 'Amira Djoudi', service: 'Hammam El Andalous', date: '10 Jun', amount: '5 500 DZD', status: 'cancelled', icon: Waves },
];

const conversionData = [
  { label: 'Visites', value: 24800, pct: 100 },
  { label: 'Recherches', value: 18400, pct: 74 },
  { label: 'Pages détails', value: 9200, pct: 37 },
  { label: 'Paniers', value: 3100, pct: 13 },
  { label: 'Réservations', value: 820, pct: 3.3 },
];

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const navItems = [
  { id: 'overview', label: "Vue d'ensemble", icon: LayoutDashboard },
  { id: 'bookings', label: 'Réservations', icon: CalendarCheck, badge: 12 },
  { id: 'affiliates', label: 'Affiliations', icon: Link2, badge: 4 },
  { id: 'disputes', label: 'Litiges', icon: AlertTriangle, badge: 2 },
  { id: 'payouts', label: 'Versements', icon: CreditCard },
  { id: 'analytics', label: 'Analytiques', icon: BarChart2 },
  { id: 'users', label: 'Utilisateurs', icon: Users },
  { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 2 },
  { id: 'settings', label: 'Paramètres', icon: Settings },
];

const statusCfg = {
  confirmed:     { label: 'Confirmé',     color: '#4CAF50', bg: '#E8F5E9' },
  pending:       { label: 'En attente',   color: '#FF9800', bg: '#FFF3E0' },
  cancelled:     { label: 'Annulé',       color: '#F44336', bg: '#FFEBEE' },
  open:          { label: 'Ouvert',       color: '#F44336', bg: '#FFEBEE' },
  investigating: { label: 'En cours',     color: '#FF9800', bg: '#FFF3E0' },
  resolved:      { label: 'Résolu',       color: '#4CAF50', bg: '#E8F5E9' },
  scheduled:     { label: 'Planifié',     color: '#2196F3', bg: '#E3F2FD' },
  processing:    { label: 'En traitement',color: '#FF9800', bg: '#FFF3E0' },
};

const roleCfg = {
  client:   { label: 'Client',       color: '#555',    bg: '#F5F5F5',  icon: Users },
  vip:      { label: 'VIP',          color: '#C9A84C', bg: '#FBF6E9',  icon: Crown },
  provider: { label: 'Prestataire',  color: '#2196F3', bg: '#E3F2FD',  icon: ShoppingBag },
  admin:    { label: 'Admin',        color: '#9C27B0', bg: '#F3E5F5',  icon: Shield },
};

const Tooltip2 = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#111] border border-[#C9A84C]/20 px-3 py-2 text-xs shadow-xl">
      <p className="text-[#8B6D22] mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-[#C9A84C] font-semibold">
          {p.dataKey === 'bookings' ? `${p.value} rés.` : `${(p.value/1000).toFixed(0)}k DZD`}
        </p>
      ))}
    </div>
  );
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const DashboardPage = () => {
  const [activeNav, setActiveNav] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [period, setPeriod] = useState<keyof typeof revenueByPeriod>('year');
  const data = revenueByPeriod[period];
  const totalRevenue = data.reduce((s, d) => s + d.revenue, 0);
  const totalBookings = data.reduce((s, d) => s + d.bookings, 0);

  const stats = [
    { label: 'Revenus', value: `${(totalRevenue/1000000).toFixed(1)}M DZD`, change: '+12.4%', up: true, icon: TrendingUp, color: '#C9A84C' },
    { label: 'Réservations', value: `${totalBookings}`, change: '+8%', up: true, icon: CalendarCheck, color: '#4CAF50' },
    { label: 'Clients actifs', value: '1 247', change: '+34', up: true, icon: Users, color: '#2196F3' },
    { label: 'Note moyenne', value: '4.82/5', change: '+0.07', up: true, icon: Star, color: '#FF9800' },
    { label: 'Conversion', value: '3.3%', change: '+0.4pt', up: true, icon: BarChart2, color: '#9C27B0' },
    { label: 'Affiliés actifs', value: '48', change: '+6', up: true, icon: Link2, color: '#00BCD4' },
  ];

  return (
    <div className="flex h-screen bg-[#0F0F0F] overflow-hidden">

      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)} />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0A0A0A] border-r border-[#C9A84C]/15 flex flex-col transition-transform duration-300`}>
        <div className="p-6 border-b border-[#C9A84C]/15">
          <a href="/" className="flex flex-col">
            <span className="text-[#FAFAF8] font-bold text-lg" style={{ fontFamily: 'var(--font-serif)' }}>Best of Algeria</span>
            <span className="text-[#C9A84C] italic text-xs tracking-[0.15em]" style={{ fontFamily: 'var(--font-serif)' }}>Admin Dashboard</span>
          </a>
        </div>

        <nav className="flex-1 py-3 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <motion.button key={item.id}
                onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
                className="w-full flex items-center gap-3 px-5 py-3 relative"
                style={{ color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.4)' }}
                whileHover={{ color: '#C9A84C', x: 3 }}
              >
                {isActive && (
                  <motion.div className="absolute inset-0 border-r-2 border-[#C9A84C]"
                    style={{ backgroundColor: 'rgba(201,168,76,0.07)' }}
                    layoutId="nav-hl" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
                <Icon size={16} className="shrink-0 relative z-10" />
                <span className="text-sm relative z-10" style={{ fontFamily: 'var(--font-sans)', fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto relative z-10 min-w-[20px] h-5 bg-[#C9A84C] text-[#0A0A0A] rounded-full flex items-center justify-center text-xs font-bold px-1.5">{item.badge}</span>
                )}
              </motion.button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#C9A84C]/15">
          <div className="flex items-center gap-3 p-3 hover:bg-white/5 cursor-pointer rounded transition-colors">
            <img src="https://i.pravatar.cc/40?img=3" className="w-9 h-9 rounded-full border border-[#C9A84C]/30" alt="Admin" />
            <div className="flex-1 min-w-0">
              <p className="text-[#FAFAF8] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Admin BOA</p>
              <p className="text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Super Admin</p>
            </div>
            <LogOut size={14} className="text-[#8B6D22]" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-[#0A0A0A] border-b border-[#C9A84C]/15 px-6 py-4 flex items-center gap-4 shrink-0">
          <button className="lg:hidden text-[#C9A84C]" onClick={() => setSidebarOpen(true)}><Menu size={22} /></button>
          <div className="flex-1">
            <h1 className="text-[#FAFAF8] text-lg" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
              {navItems.find(n => n.id === activeNav)?.label}
            </h1>
            <p className="text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>Vendredi 12 juin 2026</p>
          </div>
          <a href="/" className="hidden md:flex items-center gap-1.5 px-3 py-1.5 border border-[#C9A84C]/30 text-[#C9A84C] text-xs hover:border-[#C9A84C] transition-colors" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
            <Globe size={13} /> Voir le site
          </a>
          <motion.button className="relative w-9 h-9 bg-[#111] border border-[#C9A84C]/20 flex items-center justify-center" whileHover={{ borderColor: '#C9A84C' }}>
            <Bell size={15} className="text-[#8B6D22]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A84C] text-[#0A0A0A] rounded-full flex items-center justify-center" style={{ fontSize: '9px', fontWeight: 700 }}>7</span>
          </motion.button>
          <img src="https://i.pravatar.cc/40?img=3" className="w-9 h-9 rounded-full border border-[#C9A84C]/30 cursor-pointer" alt="Admin" />
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">

          {/* OVERVIEW */}
          {activeNav === 'overview' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div key={i} className="bg-[#111] border border-[#C9A84C]/12 p-4"
                      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                      whileHover={{ y: -2, borderColor: 'rgba(201,168,76,0.4)' }}>
                      <div className="flex justify-between items-start mb-3">
                        <p className="text-[#8B6D22] text-[10px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{s.label}</p>
                        <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: s.color + '18' }}>
                          <Icon size={13} style={{ color: s.color }} />
                        </div>
                      </div>
                      <p className="text-[#FAFAF8] text-xl mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700 }}>{s.value}</p>
                      <div className="flex items-center gap-1">
                        {s.up ? <ArrowUpRight size={11} className="text-green-500" /> : <ArrowDownRight size={11} className="text-red-500" />}
                        <span className="text-[10px]" style={{ fontFamily: 'var(--font-sans)', color: s.up ? '#4CAF50' : '#F44336' }}>{s.change}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Revenue chart */}
              <motion.div className="bg-[#111] border border-[#C9A84C]/12 p-5" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[#FAFAF8] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Revenus & Réservations</p>
                    <p className="text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                      Total : {(totalRevenue/1000000).toFixed(2)}M DZD · {totalBookings} réservations
                    </p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {(['day','week','month','year'] as const).map(p => (
                      <motion.button key={p} onClick={() => setPeriod(p)}
                        className="px-3 py-1.5 text-xs uppercase tracking-wider transition-colors"
                        style={{
                          fontFamily: 'var(--font-sans)', fontWeight: 500,
                          backgroundColor: period === p ? '#C9A84C' : 'transparent',
                          color: period === p ? '#0A0A0A' : '#8B6D22',
                          border: `1px solid ${period === p ? '#C9A84C' : 'rgba(201,168,76,0.25)'}`,
                        }}
                        whileTap={{ scale: 0.96 }}>
                        {p === 'day' ? 'Jour' : p === 'week' ? 'Semaine' : p === 'month' ? 'Mois' : 'Année'}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={data} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.08)" />
                    <XAxis dataKey="label" tick={{ fill: '#8B6D22', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#8B6D22', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<Tooltip2 />} />
                    <Area type="monotone" dataKey="revenue" stroke="#C9A84C" strokeWidth={2.5} fill="url(#g1)" dot={false} activeDot={{ r: 5, fill: '#C9A84C', stroke: '#0A0A0A', strokeWidth: 2 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Recent bookings */}
              <motion.div className="bg-[#111] border border-[#C9A84C]/12 p-5" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[#FAFAF8] text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Réservations récentes</p>
                  <button className="flex items-center gap-1 text-[#C9A84C] text-xs" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }} onClick={() => setActiveNav('bookings')}>Voir tout <ChevronRight size={12} /></button>
                </div>
                {recentBookings.map((b, i) => {
                  const s = statusCfg[b.status as keyof typeof statusCfg];
                  const Icon = b.icon;
                  return (
                    <div key={b.id} className="flex items-center gap-3 py-2.5 border-b border-[#C9A84C]/5 last:border-0 hover:bg-white/3 px-2 transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-[#C9A84C]/10 flex items-center justify-center shrink-0"><Icon size={14} className="text-[#C9A84C]" /></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#FAFAF8] text-sm truncate" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{b.client}</p>
                        <p className="text-[#8B6D22] text-xs truncate" style={{ fontFamily: 'var(--font-sans)' }}>{b.service} · {b.date}</p>
                      </div>
                      <span className="text-[#C9A84C] text-sm shrink-0" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{b.amount}</span>
                      <span className="hidden md:inline-flex px-2 py-0.5 text-[10px] uppercase tracking-wider shrink-0" style={{ backgroundColor: s.bg, color: s.color, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{s.label}</span>
                    </div>
                  );
                })}
              </motion.div>
            </>
          )}

          {/* BOOKINGS */}
          {activeNav === 'bookings' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-between">
                <div className="flex gap-2 flex-wrap">
                  {['Tous', 'Confirmé', 'En attente', 'Annulé'].map(f => (
                    <button key={f} className="px-4 py-2 text-xs border border-[#C9A84C]/20 text-[#8B6D22] hover:border-[#C9A84C] uppercase tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>{f}</button>
                  ))}
                </div>
                <motion.button className="flex items-center gap-2 px-4 py-2 bg-[#C9A84C] text-[#0A0A0A] text-xs uppercase tracking-wide" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }} whileHover={{ backgroundColor: '#E8C96A' }}>
                  <Download size={13} /> Exporter CSV
                </motion.button>
              </div>
              <div className="bg-[#111] border border-[#C9A84C]/12 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#C9A84C]/10">
                      {['ID', 'Client', 'Service', 'Date', 'Montant', 'Statut', ''].map(h => (
                        <th key={h} className="px-4 py-3 text-left text-[10px] uppercase tracking-widest text-[#8B6D22]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((b, i) => {
                      const s = statusCfg[b.status as keyof typeof statusCfg];
                      const Icon = b.icon;
                      return (
                        <tr key={b.id} className="border-b border-[#C9A84C]/5 hover:bg-white/3 transition-colors">
                          <td className="px-4 py-3 text-[#C9A84C] text-xs font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{b.id}</td>
                          <td className="px-4 py-3 text-[#FAFAF8] text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{b.client}</td>
                          <td className="px-4 py-3 text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{b.service}</td>
                          <td className="px-4 py-3 text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{b.date}</td>
                          <td className="px-4 py-3 text-[#C9A84C] text-sm font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>{b.amount}</td>
                          <td className="px-4 py-3"><span className="px-2 py-0.5 text-[10px] uppercase" style={{ backgroundColor: s.bg, color: s.color, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{s.label}</span></td>
                          <td className="px-4 py-3"><button className="text-[#8B6D22] hover:text-[#C9A84C]"><Eye size={14} /></button></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* AFFILIATES */}
          {activeNav === 'affiliates' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {[{ label: 'En attente', value: '4', c: '#FF9800' }, { label: 'Affiliés actifs', value: '48', c: '#4CAF50' }, { label: 'Revenus partenaires', value: '12.4M DZD', c: '#C9A84C' }].map((s, i) => (
                  <div key={i} className="bg-[#111] border border-[#C9A84C]/12 p-4">
                    <p className="text-[#8B6D22] text-xs uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{s.label}</p>
                    <p style={{ color: s.c, fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 20 }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#111] border border-[#C9A84C]/12 p-5">
                <p className="text-[#FAFAF8] text-sm mb-4" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>File d'approbation</p>
                <div className="space-y-3">
                  {affiliatePending.map((a, i) => (
                    <motion.div key={a.id} className="flex flex-wrap items-center gap-4 p-4 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-colors"
                      initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                      <div className="flex-1 min-w-[180px]">
                        <p className="text-[#FAFAF8] text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{a.name}</p>
                        <p className="text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{a.category} · {a.wilaya} · {a.submitted}</p>
                      </div>
                      <span className={`text-[10px] px-2 py-1 uppercase tracking-wider font-semibold ${a.docs ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'}`} style={{ fontFamily: 'var(--font-sans)' }}>
                        {a.docs ? 'Docs OK' : 'Docs manquants'}
                      </span>
                      <div className="flex gap-2">
                        <motion.button className="px-4 py-1.5 bg-[#C9A84C] text-[#0A0A0A] text-xs uppercase tracking-wide font-semibold" whileHover={{ backgroundColor: '#E8C96A' }} whileTap={{ scale: 0.96 }}>Approuver</motion.button>
                        <motion.button className="px-4 py-1.5 border border-red-500/40 text-red-400 text-xs uppercase tracking-wide" whileHover={{ borderColor: '#ef4444' }} whileTap={{ scale: 0.96 }}>Refuser</motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* DISPUTES */}
          {activeNav === 'disputes' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#111] border border-[#C9A84C]/12 p-5 space-y-3">
              <p className="text-[#FAFAF8] text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-sans)' }}>Réservations en litige</p>
              {disputedBookings.map((d, i) => {
                const s = statusCfg[d.status as keyof typeof statusCfg];
                return (
                  <motion.div key={d.id} className="p-4 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-colors"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <div className="flex flex-wrap items-start gap-4 justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[#C9A84C] text-xs font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{d.id}</span>
                          <span className="px-2 py-0.5 text-[10px] uppercase" style={{ backgroundColor: s.bg, color: s.color, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{s.label}</span>
                        </div>
                        <p className="text-[#FAFAF8] text-sm font-medium" style={{ fontFamily: 'var(--font-sans)' }}>{d.client} → {d.provider}</p>
                        <p className="text-[#8B6D22] text-xs mt-0.5" style={{ fontFamily: 'var(--font-sans)' }}>{d.reason} · {d.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#C9A84C] text-lg font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>{d.amount}</p>
                        <div className="flex gap-2 mt-2">
                          <motion.button className="px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs" whileHover={{ backgroundColor: 'rgba(201,168,76,0.2)' }}>Voir</motion.button>
                          {d.status !== 'resolved' && (
                            <motion.button className="px-3 py-1 bg-green-900/30 border border-green-500/30 text-green-400 text-xs" whileHover={{ backgroundColor: 'rgba(76,175,80,0.2)' }}>Résoudre</motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* PAYOUTS */}
          {activeNav === 'payouts' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {[{ label: 'À verser ce mois', value: '342 000 DZD', c: '#C9A84C' }, { label: 'En traitement', value: '32 000 DZD', c: '#FF9800' }, { label: 'Versé ce mois', value: '1.2M DZD', c: '#4CAF50' }].map((s, i) => (
                  <div key={i} className="bg-[#111] border border-[#C9A84C]/12 p-4">
                    <p className="text-[#8B6D22] text-xs uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{s.label}</p>
                    <p style={{ color: s.c, fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 20 }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#111] border border-[#C9A84C]/12 p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[#FAFAF8] text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Planning des versements</p>
                  <motion.button className="px-4 py-1.5 bg-[#C9A84C] text-[#0A0A0A] text-xs uppercase tracking-wide font-semibold" whileHover={{ backgroundColor: '#E8C96A' }}>Tout verser</motion.button>
                </div>
                <div className="space-y-3">
                  {payoutSchedule.map((p, i) => {
                    const s = statusCfg[p.status as keyof typeof statusCfg];
                    return (
                      <motion.div key={i} className="flex flex-wrap items-center gap-4 p-4 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-colors"
                        initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                        <div className="flex-1 min-w-[160px]">
                          <p className="text-[#FAFAF8] text-sm font-medium" style={{ fontFamily: 'var(--font-sans)' }}>{p.provider}</p>
                          <p className="text-[#8B6D22] text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{p.bookings} rés. · Échéance : {p.date}</p>
                        </div>
                        <span className="text-[#C9A84C] text-lg font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>{p.amount}</span>
                        <span className="px-2 py-0.5 text-[10px] uppercase" style={{ backgroundColor: s.bg, color: s.color, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{s.label}</span>
                        <motion.button className="px-3 py-1.5 border border-[#C9A84C]/30 text-[#C9A84C] text-xs" whileHover={{ borderColor: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.05)' }} whileTap={{ scale: 0.97 }}>Verser</motion.button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* ANALYTICS */}
          {activeNav === 'analytics' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#111] border border-[#C9A84C]/12 p-5">
                  <p className="text-[#FAFAF8] text-sm font-semibold mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Top Wilayas</p>
                  <div className="space-y-3">
                    {topWilayas.map((w, i) => (
                      <div key={w.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[#FAFAF8] text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{w.name}</span>
                          <span className="text-[#C9A84C] text-xs font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{w.bookings} rés.</span>
                        </div>
                        <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                          <motion.div className="h-full bg-[#C9A84C] rounded-full" initial={{ width: 0 }} animate={{ width: `${w.pct}%` }} transition={{ delay: i * 0.1, duration: 0.7 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#111] border border-[#C9A84C]/12 p-5">
                  <p className="text-[#FAFAF8] text-sm font-semibold mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Entonnoir de conversion</p>
                  <div className="space-y-2.5">
                    {conversionData.map((c, i) => (
                      <div key={c.label} className="flex items-center gap-3">
                        <span className="text-[#8B6D22] text-xs w-28 shrink-0" style={{ fontFamily: 'var(--font-sans)' }}>{c.label}</span>
                        <div className="flex-1 h-6 bg-[#1A1A1A] rounded overflow-hidden">
                          <motion.div className="h-full flex items-center px-2 min-w-[40px]"
                            style={{ backgroundColor: `rgba(201,168,76,${0.3 + (c.pct/100)*0.7})` }}
                            initial={{ width: 0 }} animate={{ width: `${c.pct}%` }} transition={{ delay: i * 0.1, duration: 0.7 }}>
                            <span className="text-[#0A0A0A] text-[10px] font-semibold">{c.value.toLocaleString()}</span>
                          </motion.div>
                        </div>
                        <span className="text-[#8B6D22] text-xs w-8 shrink-0">{c.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#111] border border-[#C9A84C]/12 p-5">
                <p className="text-[#FAFAF8] text-sm font-semibold mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Réservations par catégorie</p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={topCategories} margin={{ left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.08)" vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: '#8B6D22', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#8B6D22', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 0 }} />
                    <Bar dataKey="bookings" fill="#C9A84C" radius={[3, 3, 0, 0]} maxBarSize={52} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}

          {/* USERS */}
          {activeNav === 'users' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-between">
                <div className="flex gap-2 flex-wrap">
                  {['Tous', 'Client', 'VIP', 'Prestataire', 'Admin'].map(f => (
                    <button key={f} className="px-4 py-2 text-xs border border-[#C9A84C]/20 text-[#8B6D22] hover:border-[#C9A84C] uppercase tracking-wide">{f}</button>
                  ))}
                </div>
                <motion.button className="flex items-center gap-2 px-4 py-2 bg-[#C9A84C] text-[#0A0A0A] text-xs uppercase tracking-wide font-semibold" whileHover={{ backgroundColor: '#E8C96A' }}>
                  <UserCheck size={13} /> Ajouter
                </motion.button>
              </div>
              <div className="bg-[#111] border border-[#C9A84C]/12 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#C9A84C]/10">
                      {['Utilisateur', 'Email', 'Rôle', 'Résas', 'Inscrit', 'Actions'].map(h => (
                        <th key={h} className="px-4 py-3 text-left text-[10px] uppercase tracking-widest text-[#8B6D22] font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u, i) => {
                      const r = roleCfg[u.role as keyof typeof roleCfg];
                      const RoleIcon = r.icon;
                      return (
                        <motion.tr key={i} className="border-b border-[#C9A84C]/5 hover:bg-white/3 transition-colors"
                          initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <img src={u.avatar} className="w-8 h-8 rounded-full object-cover" alt={u.name} />
                              <span className="text-[#FAFAF8] text-sm font-medium">{u.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-[#8B6D22] text-xs">{u.email}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold"
                              style={{ backgroundColor: r.bg, color: r.color }}>
                              <RoleIcon size={10} /> {r.label}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[#FAFAF8] text-sm">{u.bookings}</td>
                          <td className="px-4 py-3 text-[#8B6D22] text-xs">{u.joined}</td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2">
                              <button className="text-[#8B6D22] hover:text-[#C9A84C]"><Eye size={14} /></button>
                              {u.role === 'client' && (
                                <motion.button
                                  className="flex items-center gap-1 px-2 py-0.5 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] uppercase font-semibold"
                                  whileHover={{ borderColor: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.08)' }}
                                  title="Promouvoir VIP"
                                >
                                  <Crown size={9} /> VIP
                                </motion.button>
                              )}
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* MESSAGES */}
          {activeNav === 'messages' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#111] border border-[#C9A84C]/12 p-5">
              <p className="text-[#FAFAF8] text-sm font-semibold mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Boîte de réception</p>
              {[
                { name: 'Yasmine B.', text: 'Bonjour, puis-je modifier ma réservation ?', time: '14:32', unread: true, avatar: 'https://i.pravatar.cc/40?img=47' },
                { name: 'Karim M.', text: 'La chambre est-elle disponible le 15 ?', time: '12:10', unread: true, avatar: 'https://i.pravatar.cc/40?img=12' },
                { name: 'Sofiane O.', text: 'Merci pour le service exceptionnel !', time: '10:05', unread: false, avatar: 'https://i.pravatar.cc/40?img=15' },
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-3 p-3 border-b border-[#C9A84C]/5 hover:bg-white/3 cursor-pointer transition-colors">
                  <div className="relative">
                    <img src={m.avatar} className="w-10 h-10 rounded-full" alt={m.name} />
                    {m.unread && <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#C9A84C] rounded-full border-2 border-[#111]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-0.5">
                      <p className="text-[#FAFAF8] text-sm" style={{ fontWeight: m.unread ? 600 : 400 }}>{m.name}</p>
                      <span className="text-[#8B6D22] text-xs">{m.time}</span>
                    </div>
                    <p className="text-[#8B6D22] text-xs truncate">{m.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* SETTINGS */}
          {activeNav === 'settings' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#111] border border-[#C9A84C]/12 p-8 text-center">
              <Settings size={40} className="text-[#C9A84C]/30 mx-auto mb-4" />
              <p className="text-[#FAFAF8] text-lg" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>Paramètres de la plateforme</p>
              <p className="text-[#8B6D22] text-sm mt-2">Commissions, paiements, notifications, intégrations...</p>
            </motion.div>
          )}

        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
