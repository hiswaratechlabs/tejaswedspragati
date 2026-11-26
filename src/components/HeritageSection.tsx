import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { HERITAGE_MOTIFS, Language, UI_COPY } from '../data/weddingData';
import { HeritageGlyph, MandalaHalo } from './SacredArt';

interface HeritageSectionProps {
  language: Language;
  onShowerAkshata: () => void;
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({
  language,
  onShowerAkshata,
}) => {
  const [selectedId, setSelectedId] = useState(HERITAGE_MOTIFS[0].id);
  const copy = UI_COPY[language];
  const isMr = language === 'mr';

  const activeMotif =
    HERITAGE_MOTIFS.find((m) => m.id === selectedId) || HERITAGE_MOTIFS[0];

  return (
    <section
      id="heritage"
      className="relative py-16 sm:py-20 bg-[#FAF5EB] text-[#132823] bg-silk-grain"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-caps tracking-[0.24em] uppercase text-[#9C7228] font-bold">
            {copy.heritageEyebrow}
          </p>
          <h2
            className={`mt-2 text-3xl sm:text-5xl text-[#071E1B] ${
              isMr ? 'font-mr-display' : 'font-display font-semibold'
            }`}
          >
            {copy.heritageTitle}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-[#4D625B] ${isMr ? 'font-mr-body' : ''}`}>
            {copy.heritageSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Selector Rail (6 Pillars) */}
          <div className="lg:col-span-5 space-y-2.5">
            {HERITAGE_MOTIFS.map((motif, idx) => {
              const active = motif.id === activeMotif.id;
              return (
                <button
                  key={motif.id}
                  type="button"
                  onClick={() => setSelectedId(motif.id)}
                  className={`w-full flex items-center justify-between gap-4 px-5 py-4 rounded-2xl text-left transition-all cursor-pointer border ${
                    active
                      ? 'bg-[#071E1B] text-[#FAF5EB] border-[#D4A853] shadow-lg'
                      : 'bg-[#F2E9D8]/85 text-[#132823] border-[#D4A853]/30 hover:border-[#9C7228] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        active
                          ? 'bg-[#D4A853] text-[#071E1B]'
                          : 'bg-[#071E1B]/10 text-[#071E1B]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <p
                        className={`text-sm sm:text-base font-semibold ${
                          isMr ? 'font-mr-body' : 'font-display text-lg'
                        }`}
                      >
                        {isMr ? motif.titleMr : motif.titleEn}
                      </p>
                      <p
                        className={`text-[11px] ${
                          active ? 'text-[#ECCD86]' : 'text-[#4D625B]'
                        }`}
                      >
                        {isMr ? motif.shortTagMr : motif.shortTagEn}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      active ? 'text-[#ECCD86] translate-x-0.5' : 'text-[#9C7228]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Centerpiece Interactive Emerald Stage */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#071E1B] via-[#0D2B26] to-[#071E1B] text-[#FAF5EB] p-7 sm:p-10 border-2 border-[#D4A853]/60 shadow-[0_24px_65px_rgba(7,30,27,0.28)] overflow-hidden min-h-[420px] flex flex-col justify-between">
              <div className="absolute -right-24 -top-24 pointer-events-none opacity-20">
                <MandalaHalo className="w-[380px] h-[380px] animate-slow-spin" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMotif.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 w-full">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#071E1B]/80 border border-[#D4A853]/45 flex items-center justify-center p-2 shrink-0 shadow-inner">
                      <HeritageGlyph id={activeMotif.id} className="w-full h-full" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/18 border border-[#D4A853]/40 text-[#ECCD86] text-[11px] font-caps tracking-widest uppercase">
                        {isMr ? activeMotif.shortTagMr : activeMotif.shortTagEn}
                      </span>
                      <h3
                        className={`mt-2 text-2xl sm:text-4xl text-[#FAF5EB] ${
                          isMr ? 'font-mr-display' : 'font-display font-semibold'
                        }`}
                      >
                        {isMr ? activeMotif.titleMr : activeMotif.titleEn}
                      </h3>
                      <p className="mt-2 font-mr-body text-xs sm:text-sm text-[#ECCD86]/90">
                        {activeMotif.sanskritLine}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`text-sm sm:text-base text-[#D9CEBA] leading-relaxed mb-6 ${
                      isMr ? 'font-mr-body' : ''
                    }`}
                  >
                    {isMr ? activeMotif.storyMr : activeMotif.storyEn}
                  </p>

                  <div className="w-full rounded-2xl bg-[#071E1B]/70 border border-[#D4A853]/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-caps tracking-[0.2em] uppercase text-[#ECCD86]">
                        {isMr ? 'या सोहळ्यातील महत्त्व' : 'In Our Celebration'}
                      </p>
                      <p className={`mt-1 text-xs sm:text-sm text-[#FAF5EB] ${isMr ? 'font-mr-body' : ''}`}>
                        {isMr ? activeMotif.roleInWeddingMr : activeMotif.roleInWeddingEn}
                      </p>
                    </div>

                    {activeMotif.id === 'akshata' && (
                      <button
                        type="button"
                        onClick={onShowerAkshata}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D4A853] to-[#ECCD86] text-[#071E1B] text-xs font-bold shrink-0 cursor-pointer hover:brightness-105 transition"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{copy.showerAkshata}</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
