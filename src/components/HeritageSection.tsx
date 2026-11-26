import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { HERITAGE_MOTIFS, Language, UI_COPY } from '../data/weddingData';
import { HeritageGlyph, MandalaHalo } from './SacredArt';

interface HeritageSectionProps {
  language: Language;
  onShowerAkshata: () => void;
}

const MARATHI_DIGITS = ['०१', '०२', '०३', '०४', '०५', '०६'];

const ScrollRoller: React.FC<{ position: 'top' | 'bottom' }> = ({ position }) => (
  <div className="relative flex items-center justify-center w-full select-none" aria-hidden="true">
    {/* Left Brass/Wood Finial */}
    <div className="w-5 h-7 rounded-l-full bg-gradient-to-b from-[#F3D892] via-[#9C7228] to-[#5E4212] border border-[#D4A853] shadow-md shrink-0" />
    <div className="w-2.5 h-5 bg-[#071E1B] border-y border-[#D4A853]/70 shrink-0" />
    {/* Main Rolled Scroll Cylinder */}
    <div
      className={`flex-1 h-5 bg-gradient-to-b from-[#C89B4B] via-[#8F6520] to-[#5C3D0E] border-y border-[#ECCD86]/65 shadow-[0_8px_20px_rgba(0,0,0,0.35)] ${
        position === 'top' ? 'rounded-t-sm' : 'rounded-b-sm'
      }`}
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#FFF1C9]/35 to-transparent mt-0.5" />
    </div>
    {/* Right Brass/Wood Finial */}
    <div className="w-2.5 h-5 bg-[#071E1B] border-y border-[#D4A853]/70 shrink-0" />
    <div className="w-5 h-7 rounded-r-full bg-gradient-to-b from-[#F3D892] via-[#9C7228] to-[#5E4212] border border-[#D4A853] shadow-md shrink-0" />
  </div>
);

export const HeritageSection: React.FC<HeritageSectionProps> = ({
  language,
  onShowerAkshata,
}) => {
  const copy = UI_COPY[language];
  const isMr = language === 'mr';

  const scrollToMotif = (id: string) => {
    const el = document.getElementById(`heritage-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
        <div className="text-center max-w-2xl mx-auto mb-10">
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
              ? 'स्क्रोल करत खाली या आणि मराठी लग्नसोहळ्यातील प्रत्येक पवित्र विधीची प्राचीन परंपरा वाचा.'
              : 'Scroll down to unroll the ancient Marathi Pothi and discover the timeless Vedic traditions blessing this union.'}
          </p>

          {/* Chapter-Jump Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {HERITAGE_MOTIFS.map((motif, idx) => (
              <button
                key={motif.id}
                type="button"
                onClick={() => scrollToMotif(motif.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2E9D8] hover:bg-[#071E1B] text-[#3D2514] hover:text-[#ECCD86] border border-[#9C7228]/45 text-[11px] font-semibold transition cursor-pointer shadow-xs"
              >
                <span className="font-mr-body text-[#8F1E3C] group-hover:text-[#ECCD86]">
                  {MARATHI_DIGITS[idx]}
                </span>
                <span>{isMr ? motif.titleMr : motif.titleEn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Two-Roller Vertical Grantha / Pothi Scroll */}
        <div className="relative">
          <ScrollRoller position="top" />

          {/* Manuscript Body */}
          <div className="mx-3 sm:mx-5 bg-gradient-to-b from-[#F5E9CE] via-[#F2E2BE] to-[#EEDBB1] border-x-2 border-[#9C7228]/70 shadow-[0_24px_65px_rgba(61,37,20,0.22)] px-4 sm:px-10 py-8 sm:py-12 relative">
            {/* Inner Dashed Manuscript Border */}
            <div className="border-2 border-dashed border-[#9C7228]/45 rounded-xl p-4 sm:p-8 relative">
              {/* Corner Crimson Tilak Dots */}
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#8F1E3C] border border-[#ECCD86]" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#8F1E3C] border border-[#ECCD86]" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#8F1E3C] border border-[#ECCD86]" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#8F1E3C] border border-[#ECCD86]" />

              {/* Crimson Ribbon Header */}
              <div className="flex justify-center -mt-9 sm:-mt-12 mb-8">
                <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#8F1E3C] border-2 border-[#D4A853] text-[#FAF5EB] text-[11px] font-caps tracking-[0.22em] uppercase shadow-md">
                  <span>॥ शुभमंगल पोथी ॥</span>
                </span>
              </div>

              {/* Scroll-Triggered Unrolling Pothi Chapters */}
              <div className="space-y-10">
                {HERITAGE_MOTIFS.map((motif, idx) => (
                  <motion.article
                    key={motif.id}
                    id={`heritage-${motif.id}`}
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-2xl bg-[#FAF5EB]/85 border border-[#9C7228]/45 p-5 sm:p-7 shadow-[0_12px_30px_rgba(61,37,20,0.08)]"
                  >
                    {/* Header Row: Index Seal + Title + Brass-Rimmed Glyph */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#8F1E3C] border-2 border-[#D4A853] text-[#FAF5EB] flex items-center justify-center font-mr-display text-lg shadow-md shrink-0">
                          {MARATHI_DIGITS[idx]}
                        </div>
                        <div>
                          <p className="text-[10px] font-caps tracking-[0.22em] uppercase text-[#8F1E3C] font-bold">
                            {isMr ? motif.shortTagMr : motif.shortTagEn}
                          </p>
                          <h3
                            className={`text-2xl sm:text-3xl text-[#2C1A0E] ${
                              isMr ? 'font-mr-display' : 'font-display font-bold'
                            }`}
                          >
                            {isMr ? motif.titleMr : motif.titleEn}
                          </h3>
                        </div>
                      </div>

                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#071E1B] border-2 border-[#D4A853] p-2 shrink-0 self-start sm:self-center shadow-md">
                        <HeritageGlyph id={motif.id} className="w-full h-full" />
                      </div>
                    </div>

                    {/* Tadpatra / Palm-Leaf Shloka Strip with Punched Binding Holes */}
                    <div className="relative my-5 rounded-xl bg-gradient-to-r from-[#E6D0A1] via-[#EEDBB1] to-[#E6D0A1] border border-[#9C7228]/60 py-3.5 px-9 shadow-inner text-center">
                      {/* Left & Right Punched Binding Holes */}
                      <span
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#3D2514]/80 border border-[#FAF5EB]/70 shadow-inner"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#3D2514]/80 border border-[#FAF5EB]/70 shadow-inner"
                      />
                      <p className="font-mr-body text-sm sm:text-base text-[#8F1E3C] font-semibold leading-relaxed">
                        “{motif.sanskritLine}”
                      </p>
                    </div>

                    {/* Drop-Cap Manuscript Story */}
                    <p
                      className={`text-sm sm:text-base text-[#3D2514] leading-relaxed first-letter:text-4xl first-letter:font-display first-letter:font-bold first-letter:text-[#8F1E3C] first-letter:float-left first-letter:mr-2.5 first-letter:leading-none ${
                        isMr ? 'font-mr-body' : ''
                      }`}
                    >
                      {isMr ? motif.storyMr : motif.storyEn}
                    </p>

                    {/* Ornamental Divider */}
                    <div className="flex items-center justify-center gap-3 my-5 text-[#9C7228]/75 text-xs select-none" aria-hidden="true">
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
                          {isMr ? motif.roleInWeddingMr : motif.roleInWeddingEn}
                        </span>
                      </div>

                      {motif.id === 'akshata' && (
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
                ))}
              </div>
            </div>
          </div>

          <ScrollRoller position="bottom" />
        </div>
      </div>
    </section>
  );
};
