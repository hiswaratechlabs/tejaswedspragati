import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flame,
  Heart,
  MessageSquareHeart,
  Sparkles,
  Check,
} from 'lucide-react';
import {
  BlessingEntry,
  Language,
  PRESET_ASHIRWAD,
  SEEDED_BLESSINGS,
  UI_COPY,
} from '../data/weddingData';
import { fireAkshataShower, ragaEngine } from '../utils/weddingActions';

interface RsvpSectionProps {
  language: Language;
}

const STORAGE_WALL_KEY = 'tejas_pragati_blessings_wall_v4';
const STORAGE_RITUAL_KEY = 'tejas_pragati_ritual_counts_v1';

const REACTION_OPTIONS = [
  { id: 'diya', emoji: '🪔', labelEn: 'Light a Diya', labelMr: 'दिवा प्रज्वलित करा' },
  { id: 'akshata', emoji: '🌾', labelEn: 'Shower Akshata', labelMr: 'अक्षता अर्पण करा' },
  { id: 'love', emoji: '❤️', labelEn: 'Send Love', labelMr: 'प्रेम व शुभेच्छा' },
  { id: 'vivaah', emoji: '💐', labelEn: 'Shubh Vivaah', labelMr: 'शुभमंगल आशीर्वाद' },
] as const;

const SEAL_EMOJIS = ['🪔', '🌾', '❤️', '✨'];

export const RsvpSection: React.FC<RsvpSectionProps> = ({ language }) => {
  const copy = UI_COPY[language];
  const isMr = language === 'mr';

  // Interactive Diya & Akshata Ritual state
  const [ritualCounts, setRitualCounts] = useState({
    diya: 108,
    akshata: 251,
    love: 184,
    vivaah: 96,
  });
  const [diyaLitByUser, setDiyaLitByUser] = useState(false);
  const [floatingPulse, setFloatingPulse] = useState<string | null>(null);

  // Zero-Friction Ashirwad Postcard Composer
  const [guestName, setGuestName] = useState('');
  const [cityOrRelation, setCityOrRelation] = useState('');
  const [blessingText, setBlessingText] = useState('');
  const [selectedSeal, setSelectedSeal] = useState('🪔');
  const [blessingsWall, setBlessingsWall] = useState<BlessingEntry[]>(SEEDED_BLESSINGS);
  const [pinnedBanner, setPinnedBanner] = useState(false);

  useEffect(() => {
    try {
      const savedWall = localStorage.getItem(STORAGE_WALL_KEY);
      if (savedWall) {
        const parsedWall = JSON.parse(savedWall) as BlessingEntry[];
        if (Array.isArray(parsedWall) && parsedWall.length > 0) {
          setBlessingsWall(parsedWall);
        }
      }
      const savedCounts = localStorage.getItem(STORAGE_RITUAL_KEY);
      if (savedCounts) {
        const parsedCounts = JSON.parse(savedCounts) as typeof ritualCounts;
        if (parsedCounts && typeof parsedCounts.diya === 'number') {
          setRitualCounts(parsedCounts);
        }
      }
    } catch {
      // Ignore storage read issues
    }
  }, []);

  const handleRitualTap = (id: keyof typeof ritualCounts, emoji: string) => {
    const next = { ...ritualCounts, [id]: ritualCounts[id] + 1 };
    setRitualCounts(next);
    if (id === 'diya') setDiyaLitByUser(true);
    setFloatingPulse(`${emoji} +1`);
    window.setTimeout(() => setFloatingPulse(null), 1100);

    try {
      localStorage.setItem(STORAGE_RITUAL_KEY, JSON.stringify(next));
    } catch {
      // Ignore
    }

    ragaEngine.playBellChime();
    fireAkshataShower(id === 'akshata' || id === 'diya' ? 'grand' : 'gentle');
  };

  const handlePinBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = guestName.trim() || (isMr ? 'स्नेही पाहुणे' : 'Warm Well-Wisher');
    const finalMsg =
      blessingText.trim() ||
      (isMr ? PRESET_ASHIRWAD[0].textMr : PRESET_ASHIRWAD[0].textEn);

    const newEntry: BlessingEntry = {
      id: `ashirwad-${Date.now()}`,
      name: finalName,
      relationOrCity: cityOrRelation.trim() || undefined,
      events: ['wedding'],
      guests: 2,
      message: finalMsg,
      sealEmoji: selectedSeal,
      timestamp: new Date().toISOString(),
    };

    const nextWall = [newEntry, ...blessingsWall];
    setBlessingsWall(nextWall);
    setGuestName('');
    setCityOrRelation('');
    setBlessingText('');
    setPinnedBanner(true);
    window.setTimeout(() => setPinnedBanner(false), 2600);

    try {
      localStorage.setItem(STORAGE_WALL_KEY, JSON.stringify(nextWall));
    } catch {
      // Ignore
    }

    ragaEngine.playBellChime();
    fireAkshataShower('grand');
  };

  return (
    <section
      id="rsvp"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#071E1B] via-[#0B2823] to-[#051614] text-[#FAF5EB] bg-jali-pattern"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-caps tracking-[0.24em] uppercase text-[#ECCD86]">
            {copy.rsvpEyebrow}
          </p>
          <h2
            className={`mt-2 text-3xl sm:text-5xl text-[#FAF5EB] ${
              isMr ? 'font-mr-display' : 'font-display font-semibold'
            }`}
          >
            {isMr ? 'शुभाशीर्वाद भिंत' : 'Ashirwad Wall'}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-[#D9CEBA] ${isMr ? 'font-mr-body' : ''}`}>
            {isMr
              ? 'मंगल दिवा प्रज्वलित करा, अक्षता अर्पण करा आणि आपले शुभाशीर्वाद आमच्या आठवणींच्या भिंतीवर जतन करा.'
              : 'Light a blessing diya, shower Mangal Akshata, and pin a heartfelt wish postcard to our Ashirwad Wall.'}
          </p>
        </div>

        {/* 1. Interactive "Light a Diya & Shower Akshata" Ritual Bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0E322B]/95 via-[#071E1B]/95 to-[#051614]/95 border-2 border-[#D4A853]/55 p-6 sm:p-8 shadow-[0_20px_55px_rgba(0,0,0,0.42)] overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Animated Glowing Diya & Counter */}
            <div className="flex items-center gap-4 text-left">
              <motion.button
                type="button"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => handleRitualTap('diya', '🪔')}
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8F1E3C] to-[#5E1126] border-2 border-[#D4A853] flex items-center justify-center shadow-[0_0_28px_rgba(227,157,37,0.4)] cursor-pointer shrink-0"
                aria-label="Light a blessing diya"
              >
                <motion.div
                  animate={{ scale: [1, 1.18, 1], opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-[#F5DDA3]"
                >
                  <Flame className="w-8 h-8 fill-[#E39D25]" />
                </motion.div>
                <AnimatePresence>
                  {floatingPulse && (
                    <motion.span
                      key={floatingPulse}
                      initial={{ opacity: 0, y: 0, scale: 0.8 }}
                      animate={{ opacity: 1, y: -34, scale: 1.1 }}
                      exit={{ opacity: 0, y: -48 }}
                      className="absolute -top-2 px-2 py-0.5 rounded-full bg-[#D4A853] text-[#071E1B] text-[11px] font-bold shadow-md pointer-events-none whitespace-nowrap"
                    >
                      {floatingPulse}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <div>
                <p className="text-[11px] font-caps tracking-[0.2em] uppercase text-[#ECCD86]">
                  {isMr ? 'मंगल आशीर्वाद विधी' : 'One-Tap Blessing Ritual'}
                </p>
                <h3
                  className={`text-xl sm:text-2xl text-[#FAF5EB] ${
                    isMr ? 'font-mr-display' : 'font-display font-semibold'
                  }`}
                >
                  {diyaLitByUser
                    ? isMr
                      ? 'आपला शुभाशीर्वाद दिवा प्रज्वलित झाला! ✨'
                      : 'Your Blessing Diya is Glowing! ✨'
                    : isMr
                      ? 'तेजस व प्रगतीसाठी दिवा व अक्षता अर्पण करा'
                      : 'Send Instant Blessings to Tejas & Pragati'}
                </h3>
                <p className="text-xs text-[#D9CEBA] mt-0.5">
                  {isMr
                    ? `${ritualCounts.diya + ritualCounts.akshata} मंगल शुभेच्छा व अक्षता अर्पण`
                    : `${ritualCounts.diya + ritualCounts.akshata} collective diyas & akshata showered`}
                </p>
              </div>
            </div>

            {/* 4 One-Tap Reaction Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
              {REACTION_OPTIONS.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRitualTap(item.id, item.emoji)}
                  className="flex flex-col items-center justify-center px-3 py-2.5 rounded-2xl bg-[#0D2B26] hover:bg-[#143D36] border border-[#D4A853]/35 hover:border-[#ECCD86] transition cursor-pointer"
                >
                  <span className="text-xl leading-none">{item.emoji}</span>
                  <span className="text-[11px] font-semibold text-[#FAF5EB] mt-1.5 whitespace-nowrap">
                    {isMr ? item.labelMr : item.labelEn}
                  </span>
                  <span className="text-[10px] font-mono text-[#ECCD86] mt-0.5 tabular-nums">
                    {ritualCounts[item.id]}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2. Zero-Friction Ashirwad Postcard Composer + Floating Postcard Wall */}
        <div className="rounded-3xl bg-[#0D2B26]/90 border border-[#D4A853]/40 p-6 sm:p-8 shadow-xl space-y-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#8F1E3C]/65 border border-[#D4A853]/50 flex items-center justify-center text-[#ECCD86]">
                <MessageSquareHeart className="w-5 h-5" />
              </span>
              <div>
                <h3
                  className={`text-xl sm:text-3xl text-[#FAF5EB] ${
                    isMr ? 'font-mr-display' : 'font-display font-semibold'
                  }`}
                >
                  {copy.blessingsWallTitle}
                </h3>
                <p className="text-xs text-[#B8AD99]">
                  {blessingsWall.length} {isMr ? 'मंगल संदेश जतन केले आहेत' : 'pinned blessing postcards'}
                </p>
              </div>
            </div>

            {pinnedBanner && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A6B52]/35 border border-[#75D1AC] text-[#75D1AC] text-xs font-semibold"
              >
                <Check className="w-3.5 h-3.5" />
                {isMr ? 'आपला आशीर्वाद जोडला गेला!' : 'Blessing Pinned to Wall! ✨'}
              </motion.span>
            )}
          </div>

          {/* 1-Tap Postcard Pinning Bar */}
          <form
            onSubmit={handlePinBlessing}
            className="rounded-2xl bg-[#071E1B]/85 border border-[#D4A853]/30 p-4 sm:p-5 space-y-4"
          >
            {/* Curated 1-Tap Preset Ashirwad Chips */}
            <div>
              <p className="text-[11px] font-caps tracking-widest uppercase text-[#ECCD86] mb-2">
                {isMr ? 'तयार शुभाशीर्वाद निवडा किंवा स्वतः लिहा' : 'Tap a Preset Blessing or Write Your Own'}
              </p>
              <div className="flex flex-wrap gap-2">
                {PRESET_ASHIRWAD.map((preset) => {
                  const text = isMr ? preset.textMr : preset.textEn;
                  const active = blessingText === text;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setBlessingText(text)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer border ${
                        active
                          ? 'bg-[#D4A853] text-[#071E1B] border-[#ECCD86] font-semibold'
                          : 'bg-[#0D2B26] text-[#FAF5EB] border-[#D4A853]/30 hover:border-[#ECCD86]'
                      }`}
                    >
                      {isMr ? preset.labelMr : preset.labelEn}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder={isMr ? 'आपले नाव *' : 'Your Name *'}
                className="sm:col-span-4 rounded-xl bg-[#0D2B26] border border-[#D4A853]/35 focus:border-[#ECCD86] focus:outline-none px-4 py-2.5 text-sm text-[#FAF5EB] placeholder:text-[#7E928B]"
              />
              <input
                type="text"
                value={cityOrRelation}
                onChange={(e) => setCityOrRelation(e.target.value)}
                placeholder={isMr ? 'शहर / नाते (ऐच्छिक)' : 'City / Relation (Optional)'}
                className="sm:col-span-4 rounded-xl bg-[#0D2B26] border border-[#D4A853]/35 focus:border-[#ECCD86] focus:outline-none px-4 py-2.5 text-sm text-[#FAF5EB] placeholder:text-[#7E928B]"
              />
              <div className="sm:col-span-4 flex items-center justify-between gap-2 rounded-xl bg-[#0D2B26] border border-[#D4A853]/35 px-3 py-1.5">
                <span className="text-[11px] text-[#D9CEBA]">{isMr ? 'मुद्रा:' : 'Seal:'}</span>
                <div className="flex items-center gap-1">
                  {SEAL_EMOJIS.map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => setSelectedSeal(em)}
                      className={`w-7 h-7 rounded-full text-sm flex items-center justify-center transition cursor-pointer ${
                        selectedSeal === em
                          ? 'bg-[#D4A853] scale-110 shadow'
                          : 'hover:bg-[#FAF5EB]/10'
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                maxLength={320}
                value={blessingText}
                onChange={(e) => setBlessingText(e.target.value)}
                placeholder={
                  isMr
                    ? 'आपला शुभाशीर्वाद येथे लिहा किंवा वरील पर्याय निवडा...'
                    : 'Type a short wish or tap a preset above...'
                }
                className="flex-1 rounded-xl bg-[#0D2B26] border border-[#D4A853]/35 focus:border-[#ECCD86] focus:outline-none px-4 py-2.5 text-sm text-[#FAF5EB] placeholder:text-[#7E928B]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#ECCD86] text-[#071E1B] font-bold text-xs sm:text-sm shadow-md cursor-pointer shrink-0"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isMr ? 'आशीर्वाद जोडा' : 'Pin Blessing'}</span>
              </motion.button>
            </div>
          </form>

          {/* Floating Ashirwad Postcards Grid */}
          {blessingsWall.length === 0 ? (
            <div className="rounded-2xl bg-[#071E1B]/70 border border-dashed border-[#D4A853]/40 p-8 text-center">
              <p className="text-sm sm:text-base text-[#ECCD86] font-medium">
                {isMr
                  ? 'तेजस आणि प्रगतीसाठी पहिला शुभाशीर्वाद आपण नोंदवा! ✨'
                  : 'Be the first to pin a heartfelt blessing for Tejas & Pragati! ✨'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence initial={false}>
                {blessingsWall.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
                    whileHover={{ y: -5, rotate: 0 }}
                    className={`relative rounded-2xl bg-gradient-to-b from-[#FAF5EB] to-[#F2E9D8] text-[#071E1B] border-2 border-[#D4A853]/70 p-5 shadow-[0_14px_32px_rgba(0,0,0,0.28)] transition-transform ${
                      idx % 2 === 0 ? 'md:-rotate-1' : 'md:rotate-1'
                    }`}
                  >
                    {/* Gold Wax Pin */}
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-[#F3D892] to-[#9C7228] border border-[#071E1B]/40 shadow flex items-center justify-center text-[10px]">
                      {item.sealEmoji || '✨'}
                    </span>

                    <p className="mt-1 text-xs sm:text-sm text-[#132823] leading-relaxed italic">
                      “{item.message}”
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#D4A853]/35 flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-bold text-[#071E1B]">{item.name}</p>
                        {item.relationOrCity && (
                          <p className="text-[10px] font-medium text-[#8F1E3C]">{item.relationOrCity}</p>
                        )}
                      </div>
                      <Heart className="w-3.5 h-3.5 text-[#8F1E3C] fill-[#8F1E3C]/30 shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
