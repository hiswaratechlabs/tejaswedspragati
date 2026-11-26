import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Download, MapPin, Sparkles, ArrowRight, HeartHandshake, Heart, RotateCcw } from 'lucide-react';
import {
  ChapterId,
  FAMILY_PROFILE,
  GALLERY_PHOTOS,
  Language,
  UI_COPY,
  WEDDING_EVENTS,
  WEDDING_TARGET_ISO,
} from '../data/weddingData';
import { downloadIcsFile, fireAkshataShower, getGoogleCalendarUrl, PORTRAIT_FALLBACK_DATA_URI, ragaEngine } from '../utils/weddingActions';
import { GaneshaLineEmblem, MandalaHalo, ToranDivider } from './SacredArt';

interface HeroSectionProps {
  language: Language;
  onNavigate: (chapter: ChapterId) => void;
}

const HERO_PORTRAITS = [GALLERY_PHOTOS[0], GALLERY_PHOTOS[2], GALLERY_PHOTOS[4]];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function calculateTimeLeft(): TimeLeft {
  const diff = new Date(WEDDING_TARGET_ISO).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false,
  };
}

const PatrikaFlipTile: React.FC<{
  value: number;
  label: string;
  isMarathi: boolean;
}> = ({ value, label, isMarathi }) => {
  const formatted = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-[4/4.4] max-w-[110px] rounded-t-[26px] rounded-b-2xl bg-gradient-to-b from-[#071E1B] via-[#0B2924] to-[#051614] border border-[#D4A853]/55 shadow-[inset_0_1px_0_rgba(236,205,134,0.28),0_14px_32px_rgba(0,0,0,0.45)] flex items-center justify-center overflow-hidden">
        {/* Inner Filigree Arch Frame */}
        <div className="absolute inset-1.5 rounded-t-[20px] rounded-b-xl border border-[#D4A853]/20 pointer-events-none" />

        {/* Subtle Luxury Split-Flap Hairline */}
        <div className="absolute inset-x-2 top-1/2 h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent pointer-events-none" />

        {/* Top Crown Dot */}
        <span className="absolute top-2.5 w-1.5 h-1.5 rotate-45 bg-[#ECCD86]/75" />

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={formatted}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative z-10 font-display text-3xl sm:text-5xl font-bold text-gold-shimmer tabular-nums leading-none"
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
      </div>

      <span
        className={`mt-2.5 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-[#ECCD86] font-semibold ${
          isMarathi ? 'font-mr-body tracking-normal text-xs' : 'font-caps'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onNavigate,
}) => {
  const [portraitIdx, setPortraitIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());
  const [heartfeltOpen, setHeartfeltOpen] = useState(false);

  const copy = UI_COPY[language];
  const profile = FAMILY_PROFILE;
  const weddingEvent = WEDDING_EVENTS[2];
  const isMr = language === 'mr';

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slide = window.setInterval(() => {
      setPortraitIdx((prev) => (prev + 1) % HERO_PORTRAITS.length);
    }, 5200);
    return () => clearInterval(slide);
  }, []);

  const currentPortrait = HERO_PORTRAITS[portraitIdx];

  return (
    <section
      id="patrika"
      className="relative overflow-hidden bg-gradient-to-b from-[#071E1B] via-[#0B2823] to-[#071E1B] pt-16 sm:pt-14 pb-16 sm:pb-24 bg-jali-pattern"
    >
      {/* Background Mandala Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none opacity-25">
        <MandalaHalo className="w-[760px] h-[760px] animate-slow-spin" opacity={0.28} />
      </div>

      {/* Full-Width Top Toran Garland */}
      <ToranDivider className="relative z-10 w-full mb-5 opacity-90" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
        {/* Sacred Invocation Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent to-[#D4A853]/70" />
            <GaneshaLineEmblem className="w-12 h-12 sm:w-14 sm:h-14" />
            <span className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent to-[#D4A853]/70" />
          </div>
          <p
            className={`text-xs sm:text-sm text-[#ECCD86] tracking-[0.22em] uppercase ${
              isMr ? 'font-mr-body tracking-normal text-sm' : 'font-caps'
            }`}
          >
            {copy.ganeshaInvocation}
          </p>
          <p className="mt-1 text-[11px] sm:text-xs font-mr-body text-[#D9CEBA]/75 max-w-xl">
            {copy.shloka}
          </p>
        </motion.div>

        {/* Centered Patrika Cover Stack */}
        <div className="flex flex-col items-center text-center">
          {/* Mughal-Maratha Jharokha Arch Couple Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative w-[270px] sm:w-[320px]">
              {/* Outer Gold Filigree Arch Frame */}
              <div className="relative rounded-t-[200px] rounded-b-[32px] p-2.5 bg-gradient-to-b from-[#D4A853]/65 via-[#9C7228]/35 to-[#D4A853]/55 shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[190px] rounded-b-[24px] bg-[#071E1B]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPortrait.id}
                      src={currentPortrait.src}
                      alt={isMr ? currentPortrait.captionMr : currentPortrait.captionEn}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.dataset.fallbackStage !== '1' && img.src !== currentPortrait.fallbackSrc) {
                          img.dataset.fallbackStage = '1';
                          img.src = currentPortrait.fallbackSrc;
                        } else if (img.src !== PORTRAIT_FALLBACK_DATA_URI) {
                          img.dataset.fallbackStage = '2';
                          img.src = PORTRAIT_FALLBACK_DATA_URI;
                        }
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>

                  {/* Gradient Overlay & Caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#051614] via-[#051614]/60 to-transparent pt-14 pb-4 px-4 text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#ECCD86] font-caps">
                      {isMr ? currentPortrait.locationNoteMr : currentPortrait.locationNoteEn}
                    </p>
                    <p
                      className={`mt-1 text-xs sm:text-sm text-[#FAF5EB] ${
                        isMr ? 'font-mr-body' : 'font-display italic'
                      }`}
                    >
                      {isMr ? currentPortrait.captionMr : currentPortrait.captionEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gold Muhurat Seal Plaque (Cleanly Below Portrait) */}
            <div className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-[#FAF5EB] text-[#071E1B] px-5 py-2.5 shadow-[0_14px_34px_rgba(0,0,0,0.4)] border-2 border-[#D4A853]">
              <div className="text-left">
                <p className="text-[9px] font-caps tracking-[0.18em] uppercase text-[#8F1E3C] font-bold">
                  {isMr ? 'शुभ विवाह मुहूर्त' : 'Shubh Muhurat'}
                </p>
                <p className="font-display text-lg font-bold leading-tight text-[#071E1B]">
                  12 Dec 2026
                </p>
              </div>
              <span className="h-7 w-px bg-[#D4A853]/60" />
              <p className="text-xs font-semibold text-[#4D625B]">
                {isMr ? 'दुपारी १२:२० वा.' : '12:20 PM IST'}
              </p>
            </div>

            {/* Portrait Switcher Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {HERO_PORTRAITS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`View portrait ${idx + 1}`}
                  onClick={() => setPortraitIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    portraitIdx === idx ? 'w-7 bg-[#ECCD86]' : 'w-2 bg-[#D4A853]/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Centered Royal Patrika Announcement & Family Crests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-3xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className={`text-sm sm:text-base text-[#D9CEBA] mb-4 max-w-xl mx-auto ${
                isMr ? 'font-mr-body leading-relaxed' : 'leading-relaxed'
              }`}
            >
              {copy.invitedLine}
            </motion.p>

            {/* Monumental Couple Headline with Breathing Golden Ampersand */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.14 }}
              className={`text-5xl sm:text-7xl leading-[1.04] tracking-tight text-[#FAF5EB] mb-3 ${
                isMr ? 'font-mr-display' : 'font-display font-semibold'
              }`}
            >
              <span>{isMr ? profile.firstPersonMr : profile.firstPersonEn}</span>{' '}
              <motion.span
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                className="font-script text-5xl sm:text-7xl text-gold-shimmer inline-block px-1.5"
              >
                {isMr ? 'आणि' : '&'}
              </motion.span>{' '}
              <span>{isMr ? profile.secondPersonMr : profile.secondPersonEn}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className={`text-base sm:text-lg italic text-[#ECCD86] mb-4 ${
                isMr ? 'font-mr-body not-italic' : 'font-display'
              }`}
            >
              “{copy.tagline}”
            </motion.p>

            {/* Flanking Filigree Hashtag Crest */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#D4A853]/65" />
              <span className="px-4 py-1 rounded-full bg-[#0D2B26]/90 border border-[#D4A853]/45 text-[11px] font-mono text-[#ECCD86] shadow-[0_0_20px_rgba(212,168,83,0.18)]">
                {profile.hashtag}
              </span>
              <span className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#D4A853]/65" />
            </div>

            {/* Dual Family Lineage Crest Cards Joined by Sacred Knot */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-7 text-left">
              {/* Center Sacred Knot Medallion (Desktop) */}
              <motion.div
                animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.06, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#071E1B] border-2 border-[#D4A853] items-center justify-center shadow-[0_0_25px_rgba(212,168,83,0.45)]"
                aria-hidden="true"
              >
                <HeartHandshake className="w-5 h-5 text-[#ECCD86]" />
              </motion.div>

              {/* Groom Card */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl bg-gradient-to-br from-[#0D2B26]/95 to-[#071E1B]/95 border border-[#D4A853]/40 hover:border-[#ECCD86]/80 p-5 shadow-[0_14px_35px_rgba(0,0,0,0.38)] backdrop-blur-sm transition-colors"
              >
                <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#D4A853]/65 rounded-tl-sm" />
                <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[#D4A853]/65 rounded-br-sm" />

                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[10px] font-caps tracking-[0.2em] uppercase text-[#ECCD86] mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ECCD86]" />
                  {isMr ? 'वर · साळुंखे परिवार' : 'The Groom'}
                </span>
                <p className={`text-xs sm:text-sm text-[#FAF5EB]/95 leading-relaxed ${isMr ? 'font-mr-body' : ''}`}>
                  {isMr ? profile.groomLineMr : profile.groomLineEn}
                </p>
              </motion.div>

              {/* Bride Card */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.28 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl bg-gradient-to-bl from-[#0D2B26]/95 to-[#071E1B]/95 border border-[#D4A853]/40 hover:border-[#ECCD86]/80 p-5 shadow-[0_14px_35px_rgba(0,0,0,0.38)] backdrop-blur-sm transition-colors sm:pl-7"
              >
                <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#D4A853]/65 rounded-tr-sm" />
                <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-[#D4A853]/65 rounded-bl-sm" />

                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2E8B6E]/20 border border-[#75D1AC]/35 text-[10px] font-caps tracking-[0.2em] uppercase text-[#75D1AC] mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#75D1AC]" />
                  {isMr ? 'वधू · जिवरख - देशमुख परिवार' : 'The Bride'}
                </span>
                <p className={`text-xs sm:text-sm text-[#FAF5EB]/95 leading-relaxed ${isMr ? 'font-mr-body' : ''}`}>
                  {isMr ? profile.brideLineMr : profile.brideLineEn}
                </p>
              </motion.div>
            </div>

            {/* Host Family Blessing Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="rounded-2xl bg-[#0D2B26]/75 border border-[#D4A853]/30 px-4 py-3 mb-7 text-xs sm:text-sm text-[#ECCD86] flex items-center justify-center gap-2 shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#D4A853]" />
              <span className={isMr ? 'font-mr-body' : 'font-medium'}>
                {isMr ? profile.hostsFullMr : profile.hostsFullEn}
              </span>
            </motion.div>

            {/* Luxury Royal Ticket Strip (Date & Venue) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative rounded-2xl bg-gradient-to-r from-[#0D2B26]/90 via-[#123831]/90 to-[#0D2B26]/90 border border-[#D4A853]/45 p-3.5 sm:px-6 mb-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#FAF5EB] shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
            >
              <span className="inline-flex items-center gap-2 font-medium">
                <Calendar className="w-4 h-4 text-[#ECCD86]" />
                <span>{copy.dateBadge}</span>
              </span>
              <span className="hidden sm:block w-1.5 h-1.5 rotate-45 bg-[#D4A853]" />
              <span className="inline-flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-[#ECCD86]" />
                <span>{copy.venueShort}</span>
              </span>
            </motion.div>

            {/* Interactive 3D Flip-Reveal "Special Heartfelt Message" */}
            <div className="mb-8" style={{ perspective: '1400px' }}>
              <AnimatePresence mode="wait">
                {!heartfeltOpen ? (
                  <motion.button
                    key="heartfelt-front"
                    type="button"
                    onClick={() => {
                      setHeartfeltOpen(true);
                      ragaEngine.playBellChime();
                      fireAkshataShower('grand');
                    }}
                    initial={{ opacity: 0, rotateX: -25, scale: 0.96 }}
                    animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateX: 90, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ rotateX: 4, rotateY: -2, y: -4, scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="group relative w-full rounded-3xl bg-gradient-to-r from-[#0E312B]/95 via-[#133A33]/95 to-[#0E312B]/95 border-2 border-[#D4A853]/70 px-6 py-5 sm:px-8 sm:py-6 shadow-[0_18px_45px_rgba(0,0,0,0.42)] overflow-hidden cursor-pointer focus:outline-none"
                  >
                    {/* Continuous Gold Foil Sheen */}
                    <motion.div
                      aria-hidden="true"
                      animate={{ x: ['-120%', '220%'] }}
                      transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
                      className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#ECCD86]/16 to-transparent pointer-events-none"
                    />

                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4 text-center sm:text-left">
                        <motion.div
                          animate={{ scale: [1, 1.12, 1] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8F1E3C] to-[#5E1126] border border-[#D4A853] flex items-center justify-center text-[#ECCD86] shadow-[0_0_22px_rgba(212,168,83,0.35)] shrink-0"
                        >
                          <Heart className="w-5 h-5 fill-[#ECCD86]/35" />
                        </motion.div>
                        <div>
                          <p className="text-[10px] font-caps tracking-[0.22em] uppercase text-[#ECCD86]">
                            {isMr ? 'साळुंखे परिवाराकडून खास संदेश' : 'A Personal Note From Our Family'}
                          </p>
                          <h3
                            className={`text-lg sm:text-2xl text-[#FAF5EB] mt-0.5 ${
                              isMr ? 'font-mr-display' : 'font-display font-semibold'
                            }`}
                          >
                            {isMr ? 'विशेष स्नेह संदेश ✨' : 'Special Heartfelt Message ✨'}
                          </h3>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4A853] to-[#ECCD86] text-[#071E1B] text-xs font-bold shadow-md group-hover:brightness-105 transition shrink-0">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isMr ? 'वाचण्यासाठी स्पर्श करा' : 'Tap to Reveal'}</span>
                      </span>
                    </div>
                  </motion.button>
                ) : (
                  <motion.div
                    key="heartfelt-back"
                    initial={{ opacity: 0, rotateX: -90, scale: 0.94 }}
                    animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateX: 90, scale: 0.94 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ rotateX: 3, rotateY: -2, y: -3 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="group relative w-full rounded-3xl bg-gradient-to-br from-[#8F1E3C]/95 via-[#5E1226]/95 to-[#071E1B]/95 border-2 border-[#D4A853]/85 p-6 sm:p-8 text-center shadow-[0_24px_60px_rgba(143,30,60,0.45)] overflow-hidden"
                  >
                    {/* Continuous Diagonal Gold Foil Sheen */}
                    <motion.div
                      aria-hidden="true"
                      animate={{ x: ['-120%', '220%'] }}
                      transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
                      className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#ECCD86]/20 to-transparent pointer-events-none"
                    />

                    {/* Corner Gold Filigree Brackets */}
                    <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#ECCD86]/75 rounded-tl-md pointer-events-none" />
                    <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#ECCD86]/75 rounded-tr-md pointer-events-none" />
                    <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#ECCD86]/75 rounded-bl-md pointer-events-none" />
                    <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#ECCD86]/75 rounded-br-md pointer-events-none" />

                    {/* Flip-Back Button */}
                    <button
                      type="button"
                      onClick={() => setHeartfeltOpen(false)}
                      aria-label="Hide heartfelt message"
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#071E1B]/70 border border-[#D4A853]/45 text-[#ECCD86] hover:bg-[#071E1B] flex items-center justify-center transition cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    <div className="relative z-10 flex flex-col items-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071E1B]/75 border border-[#D4A853]/55 text-[10px] font-caps tracking-[0.22em] uppercase text-[#ECCD86] mb-3">
                        <Sparkles className="w-3 h-3 text-[#ECCD86]" />
                        <span>{isMr ? 'मनःपूर्वक सस्नेह निमंत्रण' : 'Special Heartfelt Message'}</span>
                      </span>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.18 }}
                        className="font-mr-display text-xl sm:text-3xl leading-snug text-[#FAF5EB] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] max-w-2xl"
                      >
                        “तुमच्याशिवाय आमचा आनंद अपूर्ण आहे, त्यामुळे लग्नाला नक्की यायचं हं!”
                      </motion.p>

                      {!isMr && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mt-2 text-xs sm:text-sm italic font-display text-[#ECCD86]/95"
                        >
                          “Without you, our joy is incomplete — do grace the wedding with your presence!”
                        </motion.p>
                      )}

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => onNavigate('rsvp')}
                        className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4A853] to-[#ECCD86] text-[#071E1B] text-xs font-bold shadow-md hover:brightness-105 transition cursor-pointer"
                      >
                        <span>{isMr ? 'नक्की येणार! • शुभाशीर्वाद द्या' : 'We’ll Be There! • Send Blessings'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Primary Action Row with Shimmer Hover */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('events')}
                className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4A853] via-[#ECCD86] to-[#D4A853] text-[#071E1B] font-bold text-sm shadow-[0_12px_32px_rgba(212,168,83,0.4)] transition cursor-pointer"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <span className="relative z-10">{copy.heroExploreBtn}</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('rsvp')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#8F1E3C] hover:bg-[#A62547] border border-[#D4A853]/50 text-[#FAF5EB] font-semibold text-sm shadow-[0_10px_28px_rgba(143,30,60,0.4)] transition cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#ECCD86]" />
                <span>{copy.heroRsvpBtn}</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={getGoogleCalendarUrl(weddingEvent)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full border border-[#D4A853]/45 bg-[#0D2B26]/85 hover:border-[#ECCD86] text-[#ECCD86] text-xs font-medium transition"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Google Cal</span>
              </motion.a>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => downloadIcsFile(weddingEvent)}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full border border-[#D4A853]/45 bg-[#0D2B26]/85 hover:border-[#ECCD86] text-[#D9CEBA] hover:text-[#FAF5EB] text-xs font-medium transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>.ICS</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Royal Patrika Countdown Stage */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mt-12 rounded-3xl bg-gradient-to-b from-[#0D2B26]/95 via-[#09231E]/95 to-[#071E1B]/95 border border-[#D4A853]/45 p-6 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.48)] backdrop-blur-md text-center overflow-hidden"
        >
          {/* Ambient Gold Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.16),transparent_70%)] pointer-events-none"
          />

          {/* Decorative Inner Border & Corner Diamonds */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4A853]/70" />
              <p className="text-[11px] font-caps tracking-[0.26em] uppercase text-[#ECCD86]">
                {copy.countdownEyebrow}
              </p>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4A853]/70" />
            </div>

            <h2
              className={`mt-1 text-2xl sm:text-4xl text-[#FAF5EB] ${
                isMr ? 'font-mr-display' : 'font-display font-semibold'
              }`}
            >
              {timeLeft.isPast
                ? isMr
                  ? 'शुभविवाह सोहळा संपन्न!'
                  : 'Happily Ever After Has Begun!'
                : copy.countdownTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#D9CEBA] mb-7">
              {copy.panchangBadge} • {copy.dateBadge}
            </p>

            <div className="grid grid-cols-4 gap-2.5 sm:gap-5 max-w-xl mx-auto">
              <PatrikaFlipTile value={timeLeft.days} label={copy.days} isMarathi={isMr} />
              <PatrikaFlipTile value={timeLeft.hours} label={copy.hours} isMarathi={isMr} />
              <PatrikaFlipTile value={timeLeft.minutes} label={copy.minutes} isMarathi={isMr} />
              <PatrikaFlipTile value={timeLeft.seconds} label={copy.seconds} isMarathi={isMr} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
