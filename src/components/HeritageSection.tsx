import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERITAGE_MOTIFS, Language, UI_COPY } from '../data/weddingData';
import { HeritageGlyph, MandalaHalo } from './SacredArt';

interface HeritageSectionProps {
  language: Language;
  onShowerAkshata: () => void;
}

const MARATHI_DIGITS = ['०१', '०२', '०३', '०४', '०५', '०६'];

const ScrollRoller: React.FC<{ position: 'top' | 'bottom'; title?: string }> = ({
  position,
  title,
}) => (
  <div className="relative flex items-center justify-center w-full select-none">
    {/* Left Brass/Wood Finial */}
    <div
      aria-hidden="true"
      className="w-5 h-9 sm:h-10 rounded-l-full bg-gradient-to-b from-[#F3D892] via-[#9C7228] to-[#5E4212] border border-[#D4A853] shadow-md shrink-0"
    />
    <div
      aria-hidden="true"
      className="w-2.5 h-7 bg-[#071E1B] border-y border-[#D4A853]/70 shrink-0"
    />

    {/* Main Rolled Scroll Cylinder */}
    <div
      className={`relative flex-1 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#C89B4B] via-[#8F6520] to-[#5C3D0E] border-y border-[#ECCD86]/70 shadow-[0_8px_24px_rgba(0,0,0,0.38)] ${
        position === 'top' ? 'h-9 sm:h-10 rounded-t-sm' : 'h-6 sm:h-7 rounded-b-sm'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1 h-1.5 bg-gradient-to-r from-transparent via-[#FFF1C9]/35 to-transparent pointer-events-none"
      />
      {title && (
        <span className="relative z-10 px-4 py-0.5 rounded-full bg-[#3D2514]/85 border border-[#ECCD86]/65 text-[#F5DDA3] font-mr-display text-xs sm:text-sm tracking-[0.18em] shadow-inner">
          {title}
        </span>
      )}
    </div>

    {/* Right Brass/Wood Finial */}
    <div
      aria-hidden="true"
      className="w-2.5 h-7 bg-[#071E1B] border-y border-[#D4A853]/70 shrink-0"
    />
    <div
      aria-hidden="true"
      className="w-5 h-9 sm:h-10 rounded-r-full bg-gradient-to-b from-[#F3D892] via-[#9C7228] to-[#5E4212] border border-[#D4A853] shadow-md shrink-0"
    />
  </div>
);

export const HeritageSection: React.FC<HeritageSectionProps> = ({
  language,
  onShowerAkshata,
}) => {
  const [[activeIndex, direction], setPageState] = useState<[number, number]>([0, 1]);

  const copy = UI_COPY[language];
  const isMr = language === 'mr';
  const total = HERITAGE_MOTIFS.length;
  const activeMotif = HERITAGE_MOTIFS[activeIndex] || HERITAGE_MOTIFS[0];

  const goTo = (nextIdx: number) => {
    const clamped = Math.max(0, Math.min(total - 1, nextIdx));
    if (clamped === activeIndex) return;
    setPageState([clamped, clamped > activeIndex ? 1 : -1]);
  };

  return (
    <section
      id="heritage"
      className="relative py-16 sm:py-24 bg-[#FAF5EB] text-[#132823] bg-silk-grain overflow-hidden"
    >
      {/* Subtle Ambient Mandala Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.07]">
        <MandalaHalo className="w-[720px] h-[720px] animate-slow-spin" opacity={1} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-caps tracking-[0.24em] uppercase text-[#8F1E3C] font-bold">
            {isMr ? '॥ वैदिक विवाह परंपरा ॥' : `॥ ${copy.heritageEyebrow} ॥`}
          </p>
          <h2
            className={`mt-2 text-3xl sm:text-5xl text-[#071E1B] ${
              isMr ? 'font-mr-display' : 'font-display font-semibold'
            }`}
          >
            {copy.heritageTitle}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-[#4D625B] ${isMr ? 'font-mr-body' : ''}`}>
            {isMr
              ? 'जुन्या पोथीचे प्रत्येक पवित्र पान उलटून मराठी लग्नसोहळ्याची परंपरा वाचा.'
              : 'Turn or swipe each sacred leaf of our Marathi wedding Pothi to explore timeless Vedic traditions.'}
          </p>
        </div>

        {/* Chapter-Jump Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6">
          {HERITAGE_MOTIFS.map((motif, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={motif.id}
                type="button"
                onClick={() => goTo(idx)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#071E1B] text-[#ECCD86] border-[#D4A853] shadow-md scale-105'
                    : 'bg-[#F2E9D8] text-[#3D2514] border-[#9C7228]/40 hover:border-[#8F1E3C]'
                }`}
              >
                <span className={`font-mr-body ${isActive ? 'text-[#ECCD86]' : 'text-[#8F1E3C]'}`}>
                  {MARATHI_DIGITS[idx]}
                </span>
                <span className="hidden sm:inline">{isMr ? motif.titleMr : motif.titleEn}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Roller Vertical Grantha / Pothi Scroll (Unrolls Smoothly Into View) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <ScrollRoller position="top" title="॥ शुभमंगल पोथी ॥" />

          {/* Manuscript Body */}
          <div className="mx-3 sm:mx-5 bg-gradient-to-b from-[#F5E9CE] via-[#F2E2BE] to-[#EEDBB1] border-x-2 border-[#9C7228]/70 shadow-[0_24px_65px_rgba(61,37,20,0.24)] px-4 sm:px-10 py-6 sm:py-8 relative">
            {/* Inner Dashed Manuscript Border */}
            <div className="border-2 border-dashed border-[#9C7228]/45 rounded-xl p-4 sm:p-7 relative">
              {/* Corner Crimson Tilak Dots */}
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#8F1E3C] border border-[#ECCD86]" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#8F1E3C] border border-[#ECCD86]" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#8F1E3C] border border-[#ECCD86]" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#8F1E3C] border border-[#ECCD86]" />

              {/* Stacked Parchment Edges Underneath */}
              <div className="relative" style={{ perspective: '1400px' }}>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-3 -bottom-2 h-4 rounded-b-2xl bg-[#E8D4A8] border border-[#9C7228]/40 pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-1.5 -bottom-1 h-4 rounded-b-2xl bg-[#EFE0BC] border border-[#9C7228]/45 pointer-events-none"
                />

                {/* 3D Page-Flip Pothi Leaf (Swipeable + Clickable) */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.article
                    key={activeMotif.id}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction * 48,
                      rotateY: direction * 18,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction * -48,
                      rotateY: direction * -18,
                      scale: 0.97,
                    }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.22}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -55 && activeIndex < total - 1) {
                        goTo(activeIndex + 1);
                      } else if (info.offset.x > 55 && activeIndex > 0) {
                        goTo(activeIndex - 1);
                      }
                    }}
                    style={{
                      transformOrigin: direction > 0 ? 'left center' : 'right center',
                      transformStyle: 'preserve-3d',
                    }}
                    className="relative rounded-2xl bg-gradient-to-b from-[#FAF5EB] to-[#F3E7CC] border border-[#9C7228]/55 p-5 sm:p-7 shadow-[0_16px_38px_rgba(61,37,20,0.14)] cursor-grab active:cursor-grabbing"
                  >
                    {/* Header Row: Index Seal + Title + Brass-Rimmed Glyph */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#8F1E3C] border-2 border-[#D4A853] text-[#FAF5EB] flex items-center justify-center font-mr-display text-lg shadow-md shrink-0">
                          {MARATHI_DIGITS[activeIndex]}
                        </div>
                        <div>
                          <p className="text-[10px] font-caps tracking-[0.22em] uppercase text-[#8F1E3C] font-bold">
                            {isMr ? activeMotif.shortTagMr : activeMotif.shortTagEn}
                          </p>
                          <h3
                            className={`text-2xl sm:text-3xl text-[#2C1A0E] ${
                              isMr ? 'font-mr-display' : 'font-display font-bold'
                            }`}
                          >
                            {isMr ? activeMotif.titleMr : activeMotif.titleEn}
                          </h3>
                        </div>
                      </div>

                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#071E1B] border-2 border-[#D4A853] p-2 shrink-0 self-start sm:self-center shadow-md">
                        <HeritageGlyph id={activeMotif.id} className="w-full h-full" />
                      </div>
                    </div>

                    {/* Tadpatra / Palm-Leaf Shloka Strip with Punched Binding Holes */}
                    <div className="relative my-5 rounded-xl bg-gradient-to-r from-[#E6D0A1] via-[#EEDBB1] to-[#E6D0A1] border border-[#9C7228]/60 py-3.5 px-9 shadow-inner text-center">
                      <span
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#3D2514]/80 border border-[#FAF5EB]/70 shadow-inner"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#3D2514]/80 border border-[#FAF5EB]/70 shadow-inner"
                      />
                      <p className="font-mr-body text-sm sm:text-base text-[#8F1E3C] font-semibold leading-relaxed">
                        “{activeMotif.sanskritLine}”
                      </p>
                    </div>

                    {/* Drop-Cap Manuscript Story */}
                    <p
                      className={`text-sm sm:text-base text-[#3D2514] leading-relaxed first-letter:text-4xl first-letter:font-display first-letter:font-bold first-letter:text-[#8F1E3C] first-letter:float-left first-letter:mr-2.5 first-letter:leading-none ${
                        isMr ? 'font-mr-body' : ''
                      }`}
                    >
                      {isMr ? activeMotif.storyMr : activeMotif.storyEn}
                    </p>

                    {/* Ornamental Divider */}
                    <div
                      className="flex items-center justify-center gap-3 my-5 text-[#9C7228]/75 text-xs select-none"
                      aria-hidden="true"
                    >
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#9C7228]/45" />
                      <span>◊ ✦ ◊</span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#9C7228]/45" />
                    </div>

                    {/* In Our Celebration Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl bg-[#071E1B] text-[#FAF5EB] px-4 py-3 border border-[#D4A853]/45">
                      <div>
                        <span className="text-[10px] font-caps tracking-[0.2em] uppercase text-[#ECCD86] block">
                          {isMr ? 'या सोहळ्यातील महत्त्व' : 'In Our Celebration'}
                        </span>
                        <span className={`text-xs sm:text-sm text-[#FAF5EB] ${isMr ? 'font-mr-body' : ''}`}>
                          {isMr ? activeMotif.roleInWeddingMr : activeMotif.roleInWeddingEn}
                        </span>
                      </div>

                      {activeMotif.id === 'akshata' && (
                        <button
                          type="button"
                          onClick={onShowerAkshata}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4A853] to-[#ECCD86] text-[#071E1B] text-xs font-bold shrink-0 cursor-pointer hover:brightness-105 transition shadow"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{copy.showerAkshata}</span>
                        </button>
                      )}
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* Tactile Brass Page-Turn Navigation Bar */}
              <div className="mt-6 flex items-center justify-between gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={activeIndex === 0}
                  onClick={() => goTo(activeIndex - 1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF5EB] border border-[#9C7228]/55 text-[#3D2514] text-xs font-bold shadow-sm disabled:opacity-35 disabled:cursor-not-allowed hover:bg-[#071E1B] hover:text-[#ECCD86] transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isMr ? 'मागील पान' : 'Prev Leaf'}</span>
                </motion.button>

                <span className="text-xs font-semibold text-[#5C3D0E] font-mr-body">
                  {isMr
                    ? `पान ${MARATHI_DIGITS[activeIndex]} / ${MARATHI_DIGITS[total - 1]}`
                    : `Leaf ${MARATHI_DIGITS[activeIndex]} / ${MARATHI_DIGITS[total - 1]}`}
                </span>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={activeIndex === total - 1}
                  onClick={() => goTo(activeIndex + 1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8F1E3C] border border-[#D4A853] text-[#FAF5EB] text-xs font-bold shadow-sm disabled:opacity-35 disabled:cursor-not-allowed hover:brightness-110 transition cursor-pointer"
                >
                  <span>{isMr ? 'पुढील पान' : 'Next Leaf'}</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>

          <ScrollRoller position="bottom" />
        </motion.div>
      </div>
    </section>
  );
};
