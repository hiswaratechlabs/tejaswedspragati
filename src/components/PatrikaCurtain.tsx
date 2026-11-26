import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';
import { FAMILY_PROFILE, Language, UI_COPY } from '../data/weddingData';
import { ragaEngine } from '../utils/weddingActions';
import { GaneshaLineEmblem, MandalaHalo } from './SacredArt';

interface PatrikaCurtainProps {
  isOpen: boolean;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onEnter: (withAudio: boolean) => void;
}

export const PatrikaCurtain: React.FC<PatrikaCurtainProps> = ({
  isOpen,
  language,
  onLanguageChange,
  onEnter,
}) => {
  const [isParting, setIsParting] = useState(false);
  const copy = UI_COPY[language];
  const profile = FAMILY_PROFILE;

  const handleOpen = (withAudio: boolean) => {
    if (isParting) return;
    if (withAudio) {
      // Trigger audio synchronously inside user click gesture so mobile/desktop browsers never block playback
      ragaEngine.playBellChime();
      ragaEngine.start();
    }
    setIsParting(true);
    setTimeout(() => {
      onEnter(withAudio);
      setIsParting(false);
    }, 850);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="patrika-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#051614]"
        >
          {/* Left Velvet Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isParting ? '-100%' : '0%' }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-[#071E1B] via-[#0C2B26] to-[#051614] border-r border-[#D4A853]/45 bg-jali-pattern shadow-[inset_-24px_0_60px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-4 sm:inset-8 border border-[#D4A853]/25 pointer-events-none rounded-l-3xl" />
          </motion.div>

          {/* Right Velvet Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isParting ? '100%' : '0%' }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-[#071E1B] via-[#0C2B26] to-[#051614] border-l border-[#D4A853]/45 bg-jali-pattern shadow-[inset_24px_0_60px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-4 sm:inset-8 border border-[#D4A853]/25 pointer-events-none rounded-r-3xl" />
          </motion.div>

          {/* Ambient Spinning Mandala behind Seal */}
          <motion.div
            animate={{ opacity: isParting ? 0 : 0.3, scale: isParting ? 1.18 : 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <MandalaHalo className="w-[460px] h-[460px] sm:w-[660px] sm:h-[660px] animate-slow-spin" opacity={0.35} />
          </motion.div>

          {/* Top Controls: Language Switcher */}
          <motion.div
            animate={{ opacity: isParting ? 0 : 1, y: isParting ? -18 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-5 sm:top-7 inset-x-4 z-30 flex flex-wrap items-center justify-center sm:justify-end max-w-4xl mx-auto gap-2.5"
          >
            {/* Language Pill (hidden for now) */}
            <div className="hidden items-center rounded-full bg-[#071E1B]/90 border border-[#D4A853]/40 p-1 backdrop-blur-md shadow-lg">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#D4A853] text-[#071E1B]'
                    : 'text-[#FAF5EB]/80 hover:text-[#E8CA82]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('mr')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer font-mr-body ${
                  language === 'mr'
                    ? 'bg-[#D4A853] text-[#071E1B]'
                    : 'text-[#FAF5EB]/80 hover:text-[#E8CA82]'
                }`}
              >
                मराठी
              </button>
            </div>
          </motion.div>

          {/* Center Interactive Wax & Gold Patrika Medallion */}
          <motion.div
            animate={{
              opacity: isParting ? 0 : 1,
              scale: isParting ? 1.15 : 1,
            }}
            transition={{ duration: 0.5 }}
            className="relative z-20 flex flex-col items-center text-center px-6 max-w-lg"
          >
            <GaneshaLineEmblem className="w-16 h-16 sm:w-20 sm:h-20 mb-2 drop-shadow-[0_4px_20px_rgba(212,168,83,0.3)]" />

            <p
              className={`text-xs sm:text-sm tracking-[0.22em] text-[#E8CA82] uppercase mb-4 ${
                language === 'mr' ? 'font-mr-body tracking-normal text-sm' : 'font-caps'
              }`}
            >
              {copy.ganeshaInvocation}
            </p>

            {/* Tactile Golden Seal Button */}
            <motion.button
              type="button"
              onClick={() => handleOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative w-44 h-44 sm:w-52 sm:h-52 rounded-full flex items-center justify-center cursor-pointer focus:outline-none mb-6"
              aria-label={copy.unsealBtn}
            >
              <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4A853]/65 animate-slow-spin" />
              <span className="absolute inset-3 rounded-full bg-gradient-to-br from-[#F3D892] via-[#C8963E] to-[#8F6520] shadow-[0_12px_45px_rgba(212,168,83,0.45),inset_0_2px_6px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center p-4 transition-transform duration-300 group-hover:shadow-[0_16px_55px_rgba(212,168,83,0.65)]">
                <span className="absolute inset-2 rounded-full border border-[#071E1B]/30 pointer-events-none" />
                <span className="font-script text-4xl sm:text-5xl text-[#071E1B] leading-none">
                  T & P
                </span>
                <span className="mt-2 text-[10px] sm:text-[11px] font-caps tracking-[0.22em] uppercase text-[#071E1B] font-bold">
                  12 · 12 · 2026
                </span>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#071E1B]/85 bg-[#FAF5EB]/45 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  {language === 'mr' ? 'स्पर्श करा' : 'Unseal'}
                </span>
              </span>
            </motion.button>

            <h1
              className={`text-3xl sm:text-5xl text-[#FAF5EB] mb-2 ${
                language === 'mr' ? 'font-mr-display' : 'font-display font-semibold'
              }`}
            >
              {language === 'mr' ? profile.coupleMr : profile.coupleEn}
            </h1>

            <p
              className={`text-xs sm:text-sm text-[#D9CEBA] mb-6 max-w-sm ${
                language === 'mr' ? 'font-mr-body leading-relaxed' : ''
              }`}
            >
              {language === 'mr' ? profile.hostsFullMr : profile.hostsFullEn}
            </p>

            {/* Primary & Silent Enter CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A853] via-[#ECCD86] to-[#D4A853] text-[#071E1B] font-semibold text-xs sm:text-sm tracking-wide shadow-[0_8px_28px_rgba(212,168,83,0.4)] hover:brightness-105 transition cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>{copy.unsealBtn}</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpen(false)}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-[#D4A853]/45 bg-[#0D2B26]/80 text-[#FAF5EB] hover:border-[#E8CA82] hover:text-[#E8CA82] text-xs sm:text-sm font-medium transition cursor-pointer"
              >
                <VolumeX className="w-4 h-4 opacity-80" />
                <span>{copy.unsealSilentBtn}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
