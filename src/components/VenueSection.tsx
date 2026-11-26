import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Train,
  Car,
  Navigation,
  Phone,
  CheckCircle2,
  Compass,
  Sparkles,
} from 'lucide-react';
import {
  FAMILY_PROFILE,
  Language,
  TRAVEL_HUBS,
  UI_COPY,
} from '../data/weddingData';

interface VenueSectionProps {
  language: Language;
}

type VenueKey = 'bhadgaon' | 'nashik';

export const VenueSection: React.FC<VenueSectionProps> = ({ language }) => {
  const [selectedVenue, setSelectedVenue] = useState<VenueKey>('bhadgaon');
  const [selectedHubId, setSelectedHubId] = useState<string>('pachora');

  const copy = UI_COPY[language];
  const profile = FAMILY_PROFILE;
  const isMr = language === 'mr';

  const venues: Record<
    VenueKey,
    {
      tagEn: string;
      tagMr: string;
      titleEn: string;
      titleMr: string;
      addressEn: string;
      addressMr: string;
      mapQuery: string;
      eventsEn: string;
      eventsMr: string;
    }
  > = {
    bhadgaon: {
      tagEn: 'Main Wedding Venue',
      tagMr: 'मुख्य विवाह व हळदीचे स्थळ',
      titleEn: 'Aditya Lawns, Bhadgaon',
      titleMr: 'आदित्य लॉन्स, भडगाव',
      addressEn: 'Chalisgaon Road, Bhadgaon, Tal. Bhadgaon, Dist. Jalgaon, Maharashtra 424105',
      addressMr: 'चाळीसगाव रोड, भडगाव, ता. भडगाव, जि. जळगाव, महाराष्ट्र ४२४१०५',
      mapQuery: 'Aditya Lawns, Chalisgaon Road, Bhadgaon, Maharashtra',
      eventsEn: 'Haldi & Sangeet (11 Dec) • Shubh Vivaah (12 Dec, 12:20 PM)',
      eventsMr: 'हळदी व संगीत (११ डिसेंबर) • शुभविवाह (१२ डिसेंबर, दु. १२.२० वा.)',
    },
    nashik: {
      tagEn: "Groom's Mehendi Venue",
      tagMr: 'वरपक्ष मेंहदी स्थळ',
      titleEn: '2, Sai Guru Row House, Ambika Nagar',
      titleMr: '२, साई गुरु रो हाऊसेस, अंबिका नगर',
      addressEn: 'Ambika Nagar, Nashik, Maharashtra (Salunkhe Family Residence)',
      addressMr: 'अंबिका नगर, नाशिक, महाराष्ट्र (साळुंखे परिवार निवासस्थान)',
      mapQuery: 'Sai Guru Row House, Ambika Nagar, Nashik, Maharashtra',
      eventsEn: 'Mehendi Ceremony • Thursday, 10 Dec 2026 at 7:00 PM',
      eventsMr: 'मेंहदीचा कार्यक्रम • गुरुवार, १० डिसेंबर सायं. ७:०० वा.',
    },
  };

  const activeVenue = venues[selectedVenue];
  const activeHub = TRAVEL_HUBS.find((h) => h.id === selectedHubId) || TRAVEL_HUBS[0];

  return (
    <section
      id="venue"
      className="relative py-16 sm:py-20 bg-[#FAF5EB] text-[#132823] bg-silk-grain"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-caps tracking-[0.24em] uppercase text-[#9C7228] font-bold">
            {copy.venueEyebrow}
          </p>
          <h2
            className={`mt-2 text-3xl sm:text-5xl text-[#071E1B] ${
              isMr ? 'font-mr-display' : 'font-display font-semibold'
            }`}
          >
            {copy.venueTitle}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-[#4D625B] ${isMr ? 'font-mr-body' : ''}`}>
            {copy.venueSubtitle}
          </p>
        </div>

        {/* Animated Venue Switcher Pills */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-[#F2E9D8] border border-[#D4A853]/45 p-1.5 shadow-sm">
            {(['bhadgaon', 'nashik'] as VenueKey[]).map((key) => {
              const v = venues[key];
              const active = selectedVenue === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedVenue(key)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    active ? 'text-[#ECCD86]' : 'text-[#132823] hover:text-[#9C7228]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="venue-tab-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-[#071E1B] border border-[#D4A853] shadow-md"
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{isMr ? v.titleMr : v.titleEn}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Destination Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          {/* Left: Royal Destination Card */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVenue}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#0D2B26] via-[#071E1B] to-[#051614] text-[#FAF5EB] p-6 sm:p-7 border-2 border-[#D4A853]/60 shadow-[0_20px_50px_rgba(7,30,27,0.28)] overflow-hidden"
              >
                {/* Corner Filigree Brackets */}
                <span className="absolute top-3 left-3 w-3.5 h-3.5 border-t border-l border-[#D4A853]/60 rounded-tl-sm pointer-events-none" />
                <span className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b border-r border-[#D4A853]/60 rounded-br-sm pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/45 text-[#ECCD86] text-[10px] font-caps tracking-widest uppercase">
                      <Sparkles className="w-3 h-3" />
                      {isMr ? activeVenue.tagMr : activeVenue.tagEn}
                    </span>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75D1AC] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#75D1AC]" />
                    </span>
                  </div>

                  <h3
                    className={`mt-4 text-2xl sm:text-3xl text-[#FAF5EB] leading-snug ${
                      isMr ? 'font-mr-display' : 'font-display font-semibold'
                    }`}
                  >
                    {isMr ? activeVenue.titleMr : activeVenue.titleEn}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#ECCD86] font-medium">
                    {isMr ? activeVenue.eventsMr : activeVenue.eventsEn}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#D4A853]/20 flex items-start gap-2.5 text-sm text-[#D9CEBA]">
                    <MapPin className="w-4 h-4 text-[#ECCD86] mt-0.5 shrink-0" />
                    <p className={isMr ? 'font-mr-body leading-relaxed' : 'leading-relaxed'}>
                      {isMr ? activeVenue.addressMr : activeVenue.addressEn}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      activeVenue.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#ECCD86] to-[#D4A853] text-[#071E1B] text-xs sm:text-sm font-bold shadow-[0_10px_25px_rgba(212,168,83,0.35)] transition"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                    <Navigation className="relative z-10 w-4 h-4" />
                    <span className="relative z-10">
                      {isMr ? 'गूगल मॅप्सवरून मार्ग पहा' : 'Get Driving Directions'}
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Live Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[340px] sm:min-h-[380px] rounded-3xl overflow-hidden border-2 border-[#D4A853]/60 shadow-[0_20px_50px_rgba(7,30,27,0.18)] bg-[#0D2B26] relative">
              <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071E1B]/90 backdrop-blur-md border border-[#D4A853]/45 text-[10px] font-caps tracking-widest uppercase text-[#ECCD86] shadow-md pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#75D1AC]" />
                <span>{isMr ? 'थेट नकाशा' : 'Live Map'}</span>
              </div>
              <iframe
                key={activeVenue.mapQuery}
                title={activeVenue.titleEn}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  activeVenue.mapQuery
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[340px] sm:min-h-[380px]"
              />
            </div>
          </div>
        </div>

        {/* Royal Travel Boarding-Pass & Animated Arc Route Concierge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0B2924] via-[#071E1B] to-[#051614] text-[#FAF5EB] border-2 border-[#D4A853]/60 p-6 sm:p-8 shadow-[0_24px_60px_rgba(7,30,27,0.28)] mb-6 overflow-hidden"
        >
          {/* Ambient Gold Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-48 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.16),transparent_70%)] pointer-events-none"
          />

          {/* Header */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/45 flex items-center justify-center text-[#ECCD86]">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-caps tracking-[0.22em] uppercase text-[#ECCD86]">
                  {isMr ? 'प्रवास मार्गदर्शिका' : 'Royal Arrival Guide'}
                </p>
                <h4
                  className={`text-lg sm:text-2xl font-semibold text-[#FAF5EB] ${
                    isMr ? 'font-mr-body' : 'font-display'
                  }`}
                >
                  {isMr
                    ? 'भडगाव विवाहस्थळी पोहोचण्यासाठी प्रवास मार्गदर्शिका'
                    : 'Interactive Arrival Calculator to Bhadgaon'}
                </h4>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EB]/8 border border-[#D4A853]/30 text-[10px] font-caps tracking-widest uppercase text-[#ECCD86]">
              {isMr ? 'प्रवास मार्ग निवडा' : 'Select Origin Hub'}
            </span>
          </div>

          {/* Animated Origin Hub Selector Chips */}
          <div className="relative z-10 flex flex-wrap gap-2 mb-6">
            {TRAVEL_HUBS.map((hub) => {
              const active = hub.id === activeHub.id;
              return (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => setSelectedHubId(hub.id)}
                  className={`relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'text-[#071E1B]'
                      : 'bg-[#0D2B26]/90 text-[#D9CEBA] border border-[#D4A853]/30 hover:border-[#ECCD86] hover:text-[#FAF5EB]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="travel-hub-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ECCD86] to-[#D4A853] shadow-[0_6px_18px_rgba(212,168,83,0.35)]"
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    {hub.type === 'rail' ? (
                      <Train className="w-3.5 h-3.5" />
                    ) : (
                      <Car className="w-3.5 h-3.5" />
                    )}
                    <span>{isMr ? hub.cityMr : hub.cityEn}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                        active ? 'bg-[#071E1B]/15 text-[#071E1B]' : 'bg-[#071E1B] text-[#ECCD86]'
                      }`}
                    >
                      {hub.distanceKm}km
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Animated Boarding-Pass Route Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHub.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 rounded-2xl bg-gradient-to-b from-[#FAF5EB] to-[#F2E9D8] text-[#071E1B] border-2 border-[#D4A853] p-5 sm:p-6 shadow-xl overflow-hidden"
            >
              {/* Boarding Pass Side Perforation Notches */}
              <span className="hidden sm:block absolute -left-3 top-[58%] -translate-y-1/2 w-6 h-6 rounded-full bg-[#071E1B] border-r-2 border-[#D4A853]" />
              <span className="hidden sm:block absolute -right-3 top-[58%] -translate-y-1/2 w-6 h-6 rounded-full bg-[#071E1B] border-l-2 border-[#D4A853]" />

              {/* Curved SVG Flight-Style Route Arc */}
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 pb-5 border-b border-dashed border-[#D4A853]/55">
                {/* Origin */}
                <div className="sm:col-span-4 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#071E1B]/10 text-[#9C7228] text-[10px] font-caps tracking-widest uppercase font-bold">
                    {activeHub.type === 'rail'
                      ? isMr
                        ? 'रेल्वे जंक्शन'
                        : 'Rail Origin'
                      : isMr
                        ? 'रस्ते महामार्ग'
                        : 'Road Origin'}
                  </span>
                  <h5 className="mt-1.5 text-lg sm:text-xl font-bold text-[#071E1B]">
                    {isMr ? activeHub.cityMr : activeHub.cityEn}
                  </h5>
                </div>

                {/* Animated SVG Arc */}
                <div className="sm:col-span-4 relative flex flex-col items-center justify-center py-1">
                  <svg viewBox="0 0 220 64" className="w-full max-w-[220px] h-14 overflow-visible" aria-hidden="true">
                    {/* Faint Base Arc */}
                    <path
                      d="M 16 50 Q 110 -4 204 50"
                      fill="none"
                      stroke="#D4A853"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />
                    {/* Animated Draw-In Gold Arc */}
                    <motion.path
                      d="M 16 50 Q 110 -4 204 50"
                      fill="none"
                      stroke="#9C7228"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {/* Origin & Destination Dots */}
                    <circle cx="16" cy="50" r="5" fill="#071E1B" stroke="#D4A853" strokeWidth="2" />
                    <circle cx="204" cy="50" r="5" fill="#1A6B52" stroke="#D4A853" strokeWidth="2" />
                  </svg>

                  {/* Gliding Mode Badge */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, y: [0, -3, 0] }}
                    transition={{
                      scale: { duration: 0.35, delay: 0.25 },
                      opacity: { duration: 0.35, delay: 0.25 },
                      y: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="-mt-7 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071E1B] border border-[#D4A853] text-[#ECCD86] text-[11px] font-bold shadow-md"
                  >
                    {activeHub.type === 'rail' ? (
                      <Train className="w-3.5 h-3.5" />
                    ) : (
                      <Car className="w-3.5 h-3.5" />
                    )}
                    <span>{activeHub.distanceKm} km</span>
                  </motion.div>
                </div>

                {/* Destination */}
                <div className="sm:col-span-4 text-center sm:text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1A6B52]/15 text-[#1A6B52] text-[10px] font-caps tracking-widest uppercase font-bold">
                    {isMr ? 'शुभविवाह स्थळ' : 'Destination'}
                  </span>
                  <h5 className="mt-1.5 text-lg sm:text-xl font-bold text-[#071E1B]">
                    {isMr ? 'आदित्य लॉन्स, भडगाव' : 'Aditya Lawns'}
                  </h5>
                </div>
              </div>

              {/* Telemetry Strip + Route Note + Direct Maps Route */}
              <div className="pt-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="rounded-xl bg-[#FAF5EB] border border-[#D4A853]/35 px-3.5 py-2.5">
                    <span className="text-[10px] font-caps tracking-wider uppercase text-[#9C7228] font-bold block">
                      {isMr ? 'अंतर' : 'Distance'}
                    </span>
                    <span className="font-bold text-[#071E1B] text-sm">{activeHub.distanceKm} km</span>
                  </div>
                  <div className="rounded-xl bg-[#FAF5EB] border border-[#D4A853]/35 px-3.5 py-2.5 sm:col-span-2">
                    <span className="text-[10px] font-caps tracking-wider uppercase text-[#9C7228] font-bold block">
                      {isMr ? 'अंदाजित वेळ व मार्ग' : 'Estimated Journey'}
                    </span>
                    <span className="font-bold text-[#1A6B52] text-sm">
                      {isMr ? activeHub.durationMr : activeHub.durationEn}
                    </span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm text-[#4D625B] leading-relaxed ${isMr ? 'font-mr-body' : ''}`}>
                  {isMr ? activeHub.routeNoteMr : activeHub.routeNoteEn}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#D4A853]/30">
                  <div className="flex items-center gap-2 text-xs text-[#071E1B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1A6B52] shrink-0" />
                    <span>
                      {isMr
                        ? 'प्रशस्त व मोफत पार्किंग सुविधा उपलब्ध'
                        : 'Complimentary valet & guest parking'}
                    </span>
                  </div>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
                      `${activeHub.cityEn}, Maharashtra`
                    )}&destination=${encodeURIComponent(
                      'Aditya Lawns, Chalisgaon Road, Bhadgaon, Maharashtra'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#071E1B] text-[#ECCD86] text-xs font-semibold hover:bg-[#0D2B26] transition shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{isMr ? 'येथून मार्ग पहा' : 'Route in Maps'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* 3D Royal Hospitality Desk Plaque */}
        <div style={{ perspective: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ rotateX: 3.5, rotateY: -2.5, y: -5, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="group relative rounded-3xl bg-gradient-to-br from-[#0E322B] via-[#071E1B] to-[#041412] text-[#FAF5EB] border-2 border-[#D4A853]/70 p-6 sm:p-7 shadow-[0_22px_55px_rgba(7,30,27,0.32)] overflow-hidden"
          >
            {/* Animated Diagonal Gold Foil Sheen */}
            <motion.div
              aria-hidden="true"
              animate={{ x: ['-120%', '220%'] }}
              transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#ECCD86]/14 to-transparent pointer-events-none"
            />

            {/* Corner Gold Filigree Brackets */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4A853]/65 rounded-tl-md pointer-events-none" />
            <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4A853]/65 rounded-tr-md pointer-events-none" />
            <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4A853]/65 rounded-bl-md pointer-events-none" />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4A853]/65 rounded-br-md pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              {/* Left: 3D Elevated Concierge Emblem & Host Details */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F3D892] via-[#C8963E] to-[#8F6520] text-[#071E1B] flex items-center justify-center shadow-[0_12px_28px_rgba(212,168,83,0.4),inset_0_2px_4px_rgba(255,255,255,0.45)] shrink-0"
                >
                  <Sparkles className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75D1AC] opacity-80" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#75D1AC] border border-[#071E1B]" />
                  </span>
                </motion.div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[11px] font-caps tracking-[0.22em] uppercase text-[#ECCD86] font-bold">
                      {isMr ? 'आदरातिथ्य व मदत कक्ष' : 'Hospitality Desk'}
                    </p>
                    <span className="px-2 py-0.5 rounded-full bg-[#8F1E3C]/85 border border-[#D4A853]/45 text-[9px] font-caps tracking-wider uppercase text-[#FAF5EB]">
                      {isMr ? 'सस्नेह स्वागत' : 'Warm Welcome'}
                    </span>
                  </div>
                  <h4
                    className={`text-lg sm:text-2xl font-semibold text-[#FAF5EB] mt-1 ${
                      isMr ? 'font-mr-display' : 'font-display'
                    }`}
                  >
                    {isMr ? profile.hostsShortMr : profile.hostsShortEn}
                  </h4>
                  <p className="text-xs text-[#D9CEBA]/85 mt-0.5">
                    {isMr
                      ? 'प्रवास, निवास व विवाहस्थळ मार्गदर्शनासाठी सदैव तत्पर'
                      : 'Dedicated family welcome & arrival assistance across Nashik & Bhadgaon'}
                  </p>
                </div>
              </div>

              {/* Right: 3D Layered Desk / Helpline Badges */}
              <div className="flex flex-wrap gap-2.5 sm:justify-end">
                {profile.helplines.map((h) =>
                  h.tel ? (
                    <motion.a
                      key={h.tel}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href={`tel:${h.tel}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#ECCD86] text-[#071E1B] text-xs font-bold shadow-[0_8px_20px_rgba(212,168,83,0.3)] transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{h.phoneDisplay}</span>
                    </motion.a>
                  ) : (
                    <motion.div
                      key={h.nameEn}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF5EB]/10 border border-[#D4A853]/50 text-[#ECCD86] text-xs font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#ECCD86] shrink-0" />
                      <span>{h.phoneDisplay}</span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
