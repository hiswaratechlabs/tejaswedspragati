import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Download, RotateCcw, Sparkles, MailOpen, MapPin, Clock } from 'lucide-react';
import { FAMILY_PROFILE, Language, UI_COPY, WEDDING_EVENTS } from '../data/weddingData';
import {
  downloadIcsFile,
  downloadKeepsakeCard,
  fireAkshataShower,
  getGoogleCalendarUrl,
  ragaEngine,
} from '../utils/weddingActions';
import { GaneshaLineEmblem, ToranDivider } from './SacredArt';

interface ScratchRevealSectionProps {
  language: Language;
}

export const ScratchRevealSection: React.FC<ScratchRevealSectionProps> = ({ language }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [downloadedToast, setDownloadedToast] = useState(false);

  const copy = UI_COPY[language];
  const profile = FAMILY_PROFILE;
  const weddingEvent = WEDDING_EVENTS[2];
  const isMr = language === 'mr';

  const handleOpenEnvelope = () => {
    if (isOpened) return;
    setIsOpened(true);
    ragaEngine.playBellChime();
    window.setTimeout(() => {
      fireAkshataShower('grand');
    }, 750);
  };

  const handleCloseEnvelope = () => {
    setIsOpened(false);
  };

  return (
    <section id="scratch" className="relative py-16 sm:py-20 bg-[#FAF5EB] text-[#132823] bg-silk-grain">
      <ToranDivider className="w-full mb-10 opacity-85" />
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-caps tracking-[0.24em] uppercase text-[#9C7228] font-bold">
            {copy.scratchEyebrow}
          </p>
          <h2
            className={`mt-2 text-3xl sm:text-5xl text-[#071E1B] ${
              isMr ? 'font-mr-display' : 'font-display font-semibold'
            }`}
          >
            {copy.scratchTitle}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-[#4D625B] ${isMr ? 'font-mr-body' : ''}`}>
            {copy.scratchSubtitle}
          </p>
        </div>

        {/* Centered Interactive Royal Envelope & Keepsake Stack */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Physical 3D Hinged Envelope Stage */}
          <div className="relative" style={{ perspective: '1400px' }}>
            <motion.div
              layout
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              onClick={!isOpened ? handleOpenEnvelope : undefined}
              role={!isOpened ? 'button' : undefined}
              tabIndex={!isOpened ? 0 : undefined}
              onKeyDown={
                !isOpened
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenEnvelope();
                      }
                    }
                  : undefined
              }
              aria-label={!isOpened ? copy.scratchRevealBtn : undefined}
              className={`group relative w-full rounded-3xl bg-gradient-to-br from-[#0D2B26] via-[#071E1B] to-[#051614] border-2 border-[#D4A853]/75 shadow-[0_24px_65px_rgba(7,30,27,0.28)] overflow-hidden transition-shadow ${
                !isOpened
                  ? 'h-[320px] sm:h-[360px] cursor-pointer hover:shadow-[0_30px_75px_rgba(7,30,27,0.36)]'
                  : 'p-4 sm:p-6'
              }`}
            >
              {/* Inner Gold Filigree Border */}
              <div className="absolute inset-3 rounded-2xl border border-[#D4A853]/25 pointer-events-none z-0" />

              {/* Envelope Pocket Fold Lines (always visible as physical pocket) */}
              <svg
                viewBox="0 0 600 360"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90"
                aria-hidden="true"
              >
                <line x1="0" y1="360" x2="225" y2="160" stroke="#D4A853" strokeOpacity="0.28" strokeWidth="1.2" />
                <line x1="600" y1="360" x2="375" y2="160" stroke="#D4A853" strokeOpacity="0.28" strokeWidth="1.2" />
                <path d="M0 360 L235 170 Q300 130 365 170 L600 360 Z" fill="#061916" fillOpacity="0.55" />
              </svg>

              {/* 3D Hinged Top Flap */}
              <motion.div
                initial={false}
                animate={{
                  rotateX: isOpened ? -175 : 0,
                  opacity: isOpened ? 0 : 1,
                }}
                transition={{
                  rotateX: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.45, delay: isOpened ? 0.65 : 0 },
                }}
                style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                className="absolute inset-x-0 top-0 h-[215px] sm:h-[235px] pointer-events-none z-20"
              >
                <svg viewBox="0 0 600 235" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_10px_22px_rgba(0,0,0,0.45)]">
                  <polygon
                    points="0,0 600,0 300,210"
                    fill="#0E312B"
                    stroke="#D4A853"
                    strokeOpacity="0.65"
                    strokeWidth="2"
                  />
                  <polygon
                    points="28,10 572,10 300,192"
                    fill="none"
                    stroke="#D4A853"
                    strokeOpacity="0.22"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>

              {/* Closed State: Wax Seal & Prompt */}
              <AnimatePresence>
                {!isOpened && (
                  <motion.div
                    key="closed-seal-layer"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="relative z-30 h-full flex flex-col items-center justify-between py-7 px-4 text-center"
                  >
                    <p className="text-[10px] sm:text-xs font-caps tracking-[0.26em] uppercase text-[#ECCD86]">
                      {copy.ganeshaInvocation}
                    </p>

                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center my-auto">
                      <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#ECCD86]/65 animate-slow-spin" />
                      <span className="absolute inset-2 rounded-full bg-gradient-to-br from-[#F3D892] via-[#C8963E] to-[#8F6520] shadow-[0_10px_30px_rgba(212,168,83,0.55),inset_0_2px_6px_rgba(255,255,255,0.45)] flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <span className="font-script text-2xl sm:text-3xl text-[#071E1B] leading-none">
                          T &amp; P
                        </span>
                        <span className="mt-1 text-[8px] font-caps tracking-[0.2em] uppercase text-[#071E1B] font-bold">
                          12 · 12 · 26
                        </span>
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853] text-[#071E1B] text-xs font-bold tracking-wide shadow-md group-hover:brightness-105 transition">
                      <MailOpen className="w-3.5 h-3.5" />
                      <span>{copy.scratchHint}</span>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Opened State: Letter Rising Slowly from Inside the Envelope */}
              <AnimatePresence>
                {isOpened && (
                  <motion.div
                    key="opened-letter-layer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="relative z-10"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="flex items-center justify-between text-xs text-[#ECCD86] mb-4 px-1"
                    >
                      <span className="inline-flex items-center gap-1.5 font-semibold">
                        <MailOpen className="w-4 h-4" />
                        <span>{isMr ? 'शुभविवाह मुहूर्त पत्रिका' : 'Muhurat Letter Unveiled'}</span>
                      </span>
                      <button
                        type="button"
                        onClick={handleCloseEnvelope}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4A853]/45 text-[#ECCD86] hover:bg-[#123630] transition cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>{copy.scratchResetBtn}</span>
                      </button>
                    </motion.div>

                    {/* Rising Ivory Patrika Card */}
                    <motion.div
                      initial={{ y: 140, opacity: 0, scale: 0.94 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{
                        duration: 1.15,
                        delay: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative rounded-2xl bg-gradient-to-b from-[#FAF5EB] to-[#F2E9D8] text-[#071E1B] border-2 border-[#D4A853] p-6 sm:p-8 text-center shadow-[0_18px_45px_rgba(0,0,0,0.4)]"
                    >
                      <div className="absolute inset-2 rounded-xl border border-[#D4A853]/35 pointer-events-none" />

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.95 }}
                        className="relative z-10 flex flex-col items-center"
                      >
                        <GaneshaLineEmblem className="w-12 h-12 mb-2" color="#9C7228" />
                        <p className="text-[11px] font-caps tracking-[0.22em] uppercase text-[#8F1E3C] font-bold">
                          {copy.ganeshaInvocation}
                        </p>
                        <p className="mt-2 text-xs font-caps tracking-[0.18em] uppercase text-[#4D625B] font-semibold">
                          {isMr
                            ? 'शनिवार · मिती मार्गशीर्ष शु. १ शके १९४८'
                            : 'SATURDAY · MARGASHIRSHA SHUDDHA 1, SHAKE 1948'}
                        </p>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                        className={`relative z-10 mt-3 text-3xl sm:text-5xl text-[#071E1B] ${
                          isMr ? 'font-mr-display' : 'font-display font-bold'
                        }`}
                      >
                        {isMr ? '१२ डिसेंबर २०२६' : '12 December 2026'}
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.45 }}
                        className="relative z-10 mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#071E1B] border border-[#D4A853] text-[#ECCD86] text-sm font-semibold shadow-md"
                      >
                        <Clock className="w-4 h-4" />
                        <span>
                          {isMr ? 'शुभ मुहूर्त: दुपारी १२.२० मि.' : '12:20 PM IST • Abhijit Muhurat'}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.7 }}
                        className="relative z-10 mt-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-[#4D625B] font-medium"
                      >
                        <MapPin className="w-4 h-4 text-[#8F1E3C] shrink-0" />
                        <span>
                          {isMr
                            ? 'आदित्य लॉन्स, चाळीसगाव रोड, भडगाव (जि. जळगाव)'
                            : 'Aditya Lawns, Chalisgaon Road, Bhadgaon, Dist. Jalgaon'}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.95 }}
                        className="relative z-10 mt-4 pt-3 border-t border-[#D4A853]/30 flex items-center justify-center gap-1.5 text-xs text-[#8F1E3C] font-semibold"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isMr ? profile.hostsShortMr : profile.hostsShortEn}</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Trending 3D Foil-Stamped Keepsake Pass & Calendar Export */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-gradient-to-b from-[#FAF5EB] to-[#EFE4CE] border-2 border-[#D4A853]/65 p-6 sm:p-8 shadow-[0_22px_55px_rgba(7,30,27,0.14)] overflow-hidden"
          >
            {/* Subtle Corner Ornament */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4A853]/60 rounded-tl-md pointer-events-none" />
            <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4A853]/60 rounded-tr-md pointer-events-none" />
            <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4A853]/60 rounded-bl-md pointer-events-none" />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4A853]/60 rounded-br-md pointer-events-none" />

            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#071E1B] text-[#ECCD86] text-[11px] font-caps tracking-widest uppercase shadow-sm">
                <Sparkles className="w-3 h-3" />
                {isMr ? 'डिजिटल निमंत्रण पत्रिका' : 'Official Keepsake Card'}
              </span>
              <h3
                className={`mt-3 text-2xl sm:text-4xl text-[#071E1B] ${
                  isMr ? 'font-mr-display' : 'font-display font-semibold'
                }`}
              >
                {isMr ? 'आपली आठवणीची पत्रिका जतन करा' : 'Save & Download Your Keepsake Card'}
              </h3>
              <p className={`mt-2 text-xs sm:text-sm text-[#4D625B] max-w-lg mx-auto leading-relaxed ${isMr ? 'font-mr-body' : ''}`}>
                {isMr
                  ? 'विवाह सोहळ्याची तारीख आपल्या कॅलेंडरमध्ये नोंदवा किंवा खास तयार केलेले सुवर्ण निमंत्रण कार्ड (PNG) मोबाइलवर जतन करा.'
                  : 'Lock the auspicious Muhurat into your calendar or download your bespoke Emerald & Gold invitation card.'}
              </p>
            </div>

            {/* Interactive 3D Foil-Shimmering Mini Ticket Preview */}
            <motion.div
              whileHover={{ rotateX: 3, rotateY: -3, y: -4, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative max-w-md mx-auto mb-7 rounded-2xl bg-gradient-to-br from-[#0B2924] via-[#071E1B] to-[#051614] border-2 border-[#D4A853] p-5 text-[#FAF5EB] shadow-[0_18px_40px_rgba(7,30,27,0.35)] overflow-hidden"
            >
              {/* Animated Diagonal Gold Foil Sheen */}
              <motion.div
                aria-hidden="true"
                animate={{ x: ['-120%', '220%'] }}
                transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#ECCD86]/20 to-transparent pointer-events-none"
              />

              {/* Ticket Side Perforation Notches */}
              <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#F5ECD9] border-r-2 border-[#D4A853]" />
              <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#F5ECD9] border-l-2 border-[#D4A853]" />

              <div className="relative z-10 flex items-center justify-between gap-3 border-b border-dashed border-[#D4A853]/35 pb-3.5 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F3D892] to-[#9C7228] flex items-center justify-center text-[#071E1B] font-script text-lg font-bold shadow">
                    T♥P
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-caps tracking-[0.2em] uppercase text-[#ECCD86]">
                      {isMr ? 'शुभविवाह सोहळा' : 'Shubh Vivaah Invite'}
                    </p>
                    <p className={`text-sm font-bold text-[#FAF5EB] ${isMr ? 'font-mr-display' : 'font-display text-base'}`}>
                      {isMr ? profile.coupleMr : profile.coupleEn}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#8F1E3C]/85 border border-[#D4A853]/50 text-[10px] font-caps tracking-wider uppercase text-[#ECCD86]">
                  {isMr ? 'निमंत्रित' : 'Invited'}
                </span>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 text-left text-xs">
                <div>
                  <p className="text-[10px] font-caps tracking-widest uppercase text-[#D9CEBA]/70">
                    {isMr ? 'दिनांक व वेळ' : 'Date & Muhurat'}
                  </p>
                  <p className="font-semibold text-[#ECCD86] mt-0.5">
                    {isMr ? '१२ डिसें. २०२६ • १२:२०' : '12 Dec 2026 • 12:20 PM'}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-caps tracking-widest uppercase text-[#D9CEBA]/70">
                    {isMr ? 'स्थळ' : 'Venue'}
                  </p>
                  <p className="font-semibold text-[#FAF5EB] mt-0.5 truncate">
                    {isMr ? 'आदित्य लॉन्स, भडगाव' : 'Aditya Lawns, Bhadgaon'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Primary & Calendar Action Buttons */}
            <div className="max-w-md mx-auto space-y-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  downloadKeepsakeCard(language);
                  fireAkshataShower('gentle');
                  setDownloadedToast(true);
                  window.setTimeout(() => setDownloadedToast(false), 2600);
                }}
                className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#071E1B] via-[#0F352E] to-[#071E1B] border border-[#D4A853] text-[#ECCD86] font-semibold text-sm shadow-[0_12px_28px_rgba(7,30,27,0.28)] transition cursor-pointer"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#ECCD86]/20 to-transparent" />
                <Download className="relative z-10 w-4 h-4" />
                <span className="relative z-10">
                  {downloadedToast
                    ? isMr
                      ? 'निमंत्रण कार्ड डाउनलोड झाले! ✨'
                      : 'Keepsake Card Downloaded! ✨'
                    : copy.downloadPassBtn}
                </span>
              </motion.button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={getGoogleCalendarUrl(weddingEvent)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FAF5EB] hover:bg-white border border-[#9C7228]/45 text-[#071E1B] font-semibold text-xs transition shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#9C7228] shrink-0" />
                  <span className="truncate">{copy.googleCalBtn}</span>
                </motion.a>

                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => downloadIcsFile(weddingEvent)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FAF5EB]/70 hover:bg-white border border-[#071E1B]/20 text-[#132823] font-semibold text-xs transition cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#4D625B] shrink-0" />
                  <span className="truncate">{copy.icsBtn}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
