import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Menu,
  X,
  LockOpen,
  ScrollText,
  CalendarHeart,
  Flower2,
  Images,
  MapPin,
  MailCheck,
  Play,
  Pause,
} from 'lucide-react';
import { ChapterId, Language, UI_COPY } from '../data/weddingData';

interface NavbarProps {
  language: Language;
  activeChapter: ChapterId;
  viewMode: 'scroll' | 'deck';
  isRagaPlaying: boolean;
  onLanguageChange: (lang: Language) => void;
  onChapterSelect: (id: ChapterId) => void;
  onViewModeChange: (mode: 'scroll' | 'deck') => void;
  onToggleRaga: () => void;
  onShowerAkshata: () => void;
  onReplayCurtain: () => void;
}

const CHAPTERS: { id: ChapterId; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'patrika', icon: ScrollText },
  { id: 'scratch', icon: Sparkles },
  { id: 'events', icon: CalendarHeart },
  { id: 'heritage', icon: Flower2 },
  { id: 'gallery', icon: Images },
  { id: 'venue', icon: MapPin },
  { id: 'rsvp', icon: MailCheck },
];

export const Navbar: React.FC<NavbarProps> = ({
  language,
  activeChapter,
  isRagaPlaying,
  onLanguageChange,
  onChapterSelect,
  onToggleRaga,
  onShowerAkshata,
  onReplayCurtain,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const copy = UI_COPY[language];

  return (
    <>
      {/* 1. Compact Top-Right Utility Pill (Desktop & Mobile) */}
      <div className="fixed top-4 right-3 sm:right-5 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#071E1B]/85 backdrop-blur-xl border border-[#D4A853]/45 p-2 shadow-[0_12px_36px_rgba(0,0,0,0.45)]">
          {/* Wedding Song Toggle */}
          <button
            type="button"
            onClick={onToggleRaga}
            title={copy.musicLabel}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
              isRagaPlaying
                ? 'bg-[#D4A853] text-[#071E1B]'
                : 'text-[#FAF5EB] hover:bg-[#0D2B26]'
            }`}
          >
            {isRagaPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="hidden sm:inline">{copy.musicLabel}</span>
          </button>

          {/* Shower Akshata */}
          <button
            type="button"
            onClick={onShowerAkshata}
            title={copy.showerAkshata}
            aria-label={copy.showerAkshata}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#8F1E3C]/90 hover:bg-[#A62547] border border-[#D4A853]/45 text-[#ECCD86] transition cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Bilingual Toggle (hidden for now) */}
          <div className="hidden items-center rounded-full bg-[#0D2B26] border border-[#D4A853]/30 p-0.5">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                language === 'en' ? 'bg-[#D4A853] text-[#071E1B]' : 'text-[#D9CEBA]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('mr')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold font-mr-body transition cursor-pointer ${
                language === 'mr' ? 'bg-[#D4A853] text-[#071E1B]' : 'text-[#D9CEBA]'
              }`}
            >
              मराठी
            </button>
          </div>

          {/* Replay Seal (Desktop) */}
          <button
            type="button"
            onClick={onReplayCurtain}
            title="Replay Entrance Seal"
            aria-label="Replay Entrance Seal"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#D4A853]/30 text-[#E8CA82] hover:bg-[#133A33] transition cursor-pointer"
          >
            <LockOpen className="w-4 h-4" />
          </button>

          {/* Mobile Chapters Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle Invitation Chapters"
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#0D2B26] border border-[#D4A853]/35 text-[#ECCD86] hover:bg-[#133A33] transition cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Downward Chapter Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden pointer-events-auto w-72 rounded-3xl bg-[#071E1B]/95 backdrop-blur-xl border border-[#D4A853]/45 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.65)] space-y-3"
            >
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-caps tracking-[0.2em] uppercase text-[#ECCD86]">
                  {language === 'mr' ? 'निमंत्रण प्रकरणे' : 'Invitation Chapters'}
                </span>
                <span className="text-[11px] font-display text-[#D9CEBA]">T · P</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {CHAPTERS.map(({ id, icon: Icon }) => {
                  const isActive = activeChapter === id;
                  const label =
                    id === 'rsvp'
                      ? language === 'mr'
                        ? 'शुभाशीर्वाद'
                        : 'Ashirwad'
                      : copy.navLabels[id];
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        onChapterSelect(id);
                        setMobileOpen(false);
                      }}
                      className={`inline-flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition cursor-pointer ${
                        isActive
                          ? 'bg-[#D4A853] text-[#071E1B] font-semibold shadow-sm'
                          : 'bg-[#0D2B26] text-[#FAF5EB] border border-[#D4A853]/20 hover:border-[#D4A853]/50'
                      } ${language === 'mr' ? 'font-mr-body' : ''}`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-2 border-t border-[#D4A853]/20">
                <button
                  type="button"
                  onClick={() => {
                    onReplayCurtain();
                    setMobileOpen(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D2B26] border border-[#D4A853]/35 text-xs text-[#FAF5EB] cursor-pointer"
                >
                  <LockOpen className="w-3.5 h-3.5 text-[#ECCD86]" />
                  <span>{language === 'mr' ? 'पत्रिका उघडा' : 'Replay Seal'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. Right-Edge Eye-Catching Royal Patrika Chapter Rail (Desktop) */}
      <nav
        aria-label="Invitation Chapters"
        className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end"
      >
        <div className="relative flex flex-col items-center gap-2.5 rounded-full bg-[#071E1B]/85 backdrop-blur-xl border border-[#D4A853]/45 p-2 shadow-[0_18px_48px_rgba(0,0,0,0.55)]">
          {/* Subtle Vertical Gold Connecting Thread */}
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#D4A853]/15 via-[#D4A853]/45 to-[#D4A853]/15 pointer-events-none"
          />

          {CHAPTERS.map(({ id, icon: Icon }) => {
            const isActive = activeChapter === id;
            const label =
              id === 'rsvp'
                ? language === 'mr'
                  ? 'शुभाशीर्वाद'
                  : 'Ashirwad'
                : copy.navLabels[id];

            return (
              <div key={id} className="relative flex items-center group">
                {/* Floating Gold-Rimmed Label Pill (Left of Node) */}
                <span
                  className={`absolute right-14 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-xl border transition-all duration-200 whitespace-nowrap shadow-[0_10px_28px_rgba(0,0,0,0.45)] ${
                    isActive
                      ? 'opacity-100 translate-x-0 bg-[#071E1B]/95 border-[#D4A853]/75 text-[#ECCD86]'
                      : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-[#0D2B26]/95 border-[#D4A853]/45 text-[#FAF5EB] pointer-events-none'
                  } ${language === 'mr' ? 'font-mr-body' : ''}`}
                >
                  {label}
                </span>

                {/* Jewel Icon Node */}
                <button
                  type="button"
                  onClick={() => onChapterSelect(id)}
                  aria-label={label}
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-[#071E1B] scale-105'
                      : 'bg-[#0D2B26]/90 text-[#ECCD86]/85 border border-[#D4A853]/30 hover:border-[#ECCD86] hover:text-[#FAF5EB] hover:scale-110'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="right-rail-active"
                      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F3D892] via-[#D4A853] to-[#9C7228] shadow-[0_0_20px_rgba(236,205,134,0.65)]"
                    />
                  )}
                  <Icon className="relative z-10 w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};
