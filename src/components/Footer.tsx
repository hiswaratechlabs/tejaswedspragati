import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Check, Copy, Share2, Phone, Sparkles } from 'lucide-react';
import { FAMILY_PROFILE, Language, UI_COPY } from '../data/weddingData';
import { GaneshaLineEmblem, MandalaHalo } from './SacredArt';

interface FooterProps {
  language: Language;
  onScrollTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onScrollTop }) => {
  const [copied, setCopied] = useState(false);
  const copy = UI_COPY[language];
  const profile = FAMILY_PROFILE;
  const isMr = language === 'mr';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback ignored
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(
    `✨ You are warmly invited to the Shubh Vivaah of ${profile.coupleEn}!\n📅 Saturday, 12 December 2026 • 12:20 PM IST\n📍 Aditya Lawns, Chalisgaon Road, Bhadgaon\n${profile.hostsFullEn}\n💌 View Invitation & RSVP: ${currentUrl}`
  );

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#051614] via-[#041210] to-[#020A09] text-[#FAF5EB] border-t border-[#D4A853]/35 pt-20 pb-16 px-4 text-center bg-jali-pattern">
      {/* 3D Perspective Celestial Mandala & Glowing Orbs Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        {/* Radial Sanctuary Glow */}
        <div className="absolute w-[620px] h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.18),rgba(143,30,60,0.08)_45%,transparent_72%)] blur-xl" />

        {/* 3D Tilted Spinning Outer Mandala Ring */}
        <motion.div
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
          style={{ rotateX: 62, transformStyle: 'preserve-3d' }}
          className="absolute w-[560px] h-[560px] sm:w-[760px] sm:h-[760px] opacity-35"
        >
          <MandalaHalo className="w-full h-full" opacity={0.55} />
        </motion.div>

        {/* Counter-Rotating Inner 3D Halo Ring */}
        <motion.div
          animate={{ rotateZ: [360, 0] }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          style={{ rotateX: 68, rotateY: 12, transformStyle: 'preserve-3d' }}
          className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full border border-dashed border-[#ECCD86]/35 shadow-[0_0_50px_rgba(212,168,83,0.15)]"
        />

        {/* Floating 3D Golden Aura Orbs */}
        <motion.div
          animate={{ y: [-12, 14, -12], x: [-8, 10, -8], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[14%] top-[24%] w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(236,205,134,0.22),transparent_70%)] blur-md"
        />
        <motion.div
          animate={{ y: [14, -16, 14], x: [10, -8, 10], scale: [1.1, 0.95, 1.1] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[14%] bottom-[26%] w-28 h-28 rounded-full bg-[radial-gradient(circle,rgba(143,30,60,0.25),transparent_70%)] blur-md"
        />
      </div>

      {/* 3D Interactive Finale Invitation Plaque */}
      <div className="relative z-10 max-w-3xl mx-auto" style={{ perspective: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ rotateX: 2.5, rotateY: -2, y: -3 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative rounded-3xl bg-[#071E1B]/75 backdrop-blur-xl border border-[#D4A853]/45 p-8 sm:p-12 shadow-[0_28px_70px_rgba(0,0,0,0.65)] flex flex-col items-center overflow-hidden"
        >
          {/* Diagonal Gold Sheen Sweep */}
          <motion.div
            aria-hidden="true"
            animate={{ x: ['-120%', '220%'] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
            className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#ECCD86]/10 to-transparent pointer-events-none"
          />

          {/* Corner Filigree Brackets */}
          <span className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-[#D4A853]/60 rounded-tl-md pointer-events-none" />
          <span className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-[#D4A853]/60 rounded-tr-md pointer-events-none" />
          <span className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-[#D4A853]/60 rounded-bl-md pointer-events-none" />
          <span className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-[#D4A853]/60 rounded-br-md pointer-events-none" />

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GaneshaLineEmblem className="w-16 h-16 mb-3 drop-shadow-[0_6px_22px_rgba(212,168,83,0.45)]" />
          </motion.div>

          <p className="text-[11px] font-caps tracking-[0.25em] uppercase text-[#ECCD86]">
            {isMr ? '॥ शुभ विवाह निमंत्रण ॥' : 'With Warm Blessings · Shubh Vivaah'}
          </p>

          <h2
            className={`mt-2 text-3xl sm:text-5xl text-[#FAF5EB] ${
              isMr ? 'font-mr-display' : 'font-display font-semibold'
            }`}
          >
            {isMr ? profile.coupleMr : profile.coupleEn}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#D9CEBA]">
            {copy.dateBadge} • {copy.venueShort}
          </p>

          <div className="mt-5 px-5 py-2.5 rounded-2xl bg-[#0D2B26]/85 border border-[#D4A853]/35 text-xs sm:text-sm text-[#ECCD86] shadow-inner">
            {isMr ? profile.hostsFullMr : profile.hostsFullEn}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D2B26] border border-[#D4A853]/45 text-xs font-semibold text-[#FAF5EB] hover:border-[#ECCD86] transition cursor-pointer shadow-md"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#75D1AC]" /> : <Copy className="w-3.5 h-3.5 text-[#ECCD86]" />}
              <span>{copied ? copy.copiedLink : copy.copyLink}</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`https://api.whatsapp.com/send?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-[#071E1B] text-xs font-bold hover:brightness-105 transition shadow-md"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copy.shareWhatsApp}</span>
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onScrollTop}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#D4A853]/40 text-xs font-medium text-[#D9CEBA] hover:text-[#FAF5EB] transition cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{isMr ? 'वर जा' : 'Top'}</span>
            </motion.button>
          </div>

          <p className="mt-8 text-[11px] text-[#ECCD86]/70 font-mono">{profile.hashtag}</p>
        </motion.div>

        {/* Separate Creator Signature Strip */}
        <div className="mt-8 flex flex-col items-center gap-2.5">
          <p className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#D9CEBA]/85">
            <Sparkles className="w-3.5 h-3.5 text-[#ECCD86]" />
            <span>
              {isMr ? 'प्रेमाने साकारलेली डिजिटल निमंत्रण पत्रिका — ' : 'Woven in Gold & Code by '}
              <strong className="text-[#ECCD86] font-semibold">
                {isMr ? 'उमेश चाकोर' : 'Umesh Chakor'}
              </strong>
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="tel:+919049261203"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071E1B]/90 border border-[#D4A853]/35 text-[11px] text-[#FAF5EB] hover:border-[#ECCD86] hover:text-[#ECCD86] transition"
            >
              <Phone className="w-3 h-3 text-[#ECCD86]" />
              <span>9049261203</span>
            </a>

            <a
              href="https://www.linkedin.com/in/umeshchakor/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071E1B]/90 border border-[#D4A853]/35 text-[11px] text-[#FAF5EB] hover:border-[#ECCD86] hover:text-[#ECCD86] transition"
            >
              <svg className="w-3 h-3 fill-[#ECCD86]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
