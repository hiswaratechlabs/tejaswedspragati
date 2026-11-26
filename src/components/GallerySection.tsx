import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid,
  GalleryHorizontal,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto, Language, UI_COPY } from '../data/weddingData';
import { PORTRAIT_FALLBACK_DATA_URI } from '../utils/weddingActions';

interface GallerySectionProps {
  language: Language;
}

type FilterCat = 'all' | GalleryPhoto['category'];

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [filter, setFilter] = useState<FilterCat>('all');
  const [layout, setLayout] = useState<'grid' | 'filmstrip'>('grid');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const copy = UI_COPY[language];
  const isMr = language === 'mr';

  const filtered =
    filter === 'all' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((p) => p.category === filter);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIdx(null);
        setZoom(1);
      } else if (e.key === 'ArrowRight') {
        setZoom(1);
        setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % filtered.length));
      } else if (e.key === 'ArrowLeft') {
        setZoom(1);
        setLightboxIdx((prev) =>
          prev === null ? null : (prev - 1 + filtered.length) % filtered.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIdx, filtered.length]);

  const activePhoto = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#071E1B] via-[#0B2823] to-[#071E1B] text-[#FAF5EB] bg-jali-pattern"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-caps tracking-[0.24em] uppercase text-[#ECCD86]">
            {copy.galleryEyebrow}
          </p>
          <h2
            className={`mt-2 text-3xl sm:text-5xl text-[#FAF5EB] ${
              isMr ? 'font-mr-display' : 'font-display font-semibold'
            }`}
          >
            {copy.galleryTitle}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-[#D9CEBA] ${isMr ? 'font-mr-body' : ''}`}>
            {copy.gallerySubtitle}
          </p>
        </div>

        {/* Filter + Layout Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#0D2B26] border border-[#D4A853]/30 rounded-full p-1">
            {(
              [
                ['all', isMr ? 'सर्व (१४)' : 'All Moments (14)'],
                ['proposal', isMr ? 'अंगठी समारंभ' : 'Ring Proposal'],
                ['garden', isMr ? 'निसर्गरम्य' : 'Garden Walk'],
                ['portrait', isMr ? 'खास पोर्ट्रेट' : 'Portraits'],
              ] as [FilterCat, string][]
            ).map(([cat, label]) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setFilter(cat);
                  setLightboxIdx(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                  filter === cat
                    ? 'bg-[#D4A853] text-[#071E1B] font-semibold'
                    : 'text-[#D9CEBA] hover:text-[#FAF5EB]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-1 bg-[#0D2B26] border border-[#D4A853]/30 rounded-full p-1">
            <button
              type="button"
              onClick={() => setLayout('grid')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                layout === 'grid' ? 'bg-[#D4A853] text-[#071E1B] font-semibold' : 'text-[#D9CEBA]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{isMr ? 'गॅलरी ग्रिड' : 'Editorial Grid'}</span>
            </button>
            <button
              type="button"
              onClick={() => setLayout('filmstrip')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                layout === 'filmstrip'
                  ? 'bg-[#D4A853] text-[#071E1B] font-semibold'
                  : 'text-[#D9CEBA]'
              }`}
            >
              <GalleryHorizontal className="w-3.5 h-3.5" />
              <span>{isMr ? 'फिल्मस्ट्रिप' : 'Filmstrip'}</span>
            </button>
          </div>
        </div>

        {/* Gallery Viewport */}
        {layout === 'grid' ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
            {filtered.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                onClick={() => {
                  setLightboxIdx(idx);
                  setZoom(1);
                }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-[#0D2B26] border border-[#D4A853]/30 hover:border-[#ECCD86] cursor-pointer shadow-lg"
              >
                <img
                  src={photo.src}
                  alt={isMr ? photo.captionMr : photo.captionEn}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fallbackStage !== '1' && img.src !== photo.fallbackSrc) {
                      img.dataset.fallbackStage = '1';
                      img.src = photo.fallbackSrc;
                    } else if (img.src !== PORTRAIT_FALLBACK_DATA_URI) {
                      img.dataset.fallbackStage = '2';
                      img.src = PORTRAIT_FALLBACK_DATA_URI;
                    }
                  }}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051614]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-caps tracking-widest uppercase text-[#ECCD86]">
                        {isMr ? photo.locationNoteMr : photo.locationNoteEn}
                      </p>
                      <p className={`text-xs sm:text-sm text-[#FAF5EB] mt-0.5 ${isMr ? 'font-mr-body' : ''}`}>
                        {isMr ? photo.captionMr : photo.captionEn}
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-[#D4A853] text-[#071E1B] flex items-center justify-center shrink-0">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
            {filtered.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => {
                  setLightboxIdx(idx);
                  setZoom(1);
                }}
                className="snap-center shrink-0 w-[280px] sm:w-[340px] rounded-3xl overflow-hidden bg-[#0D2B26] border border-[#D4A853]/40 cursor-pointer group shadow-xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={isMr ? photo.captionMr : photo.captionEn}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.dataset.fallbackStage !== '1' && img.src !== photo.fallbackSrc) {
                        img.dataset.fallbackStage = '1';
                        img.src = photo.fallbackSrc;
                      } else if (img.src !== PORTRAIT_FALLBACK_DATA_URI) {
                        img.dataset.fallbackStage = '2';
                        img.src = PORTRAIT_FALLBACK_DATA_URI;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-caps tracking-widest uppercase text-[#ECCD86]">
                    {isMr ? photo.locationNoteMr : photo.locationNoteEn}
                  </p>
                  <p className={`mt-1 text-sm text-[#FAF5EB] ${isMr ? 'font-mr-body' : ''}`}>
                    {isMr ? photo.captionMr : photo.captionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pro Fullscreen Lightbox */}
      <AnimatePresence>
        {activePhoto && lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-[#041210]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 text-xs text-[#FAF5EB]">
              <div>
                <span className="font-mono text-[#ECCD86] mr-3">
                  {lightboxIdx + 1} / {filtered.length}
                </span>
                <span className={isMr ? 'font-mr-body' : 'font-display text-base'}>
                  {isMr ? activePhoto.captionMr : activePhoto.captionEn}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(1, Number((z - 0.5).toFixed(1))))}
                  className="p-2 rounded-full bg-[#0D2B26] border border-[#D4A853]/35 hover:border-[#ECCD86] cursor-pointer"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom(1)}
                  className="p-2 rounded-full bg-[#0D2B26] border border-[#D4A853]/35 hover:border-[#ECCD86] cursor-pointer"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(2.5, Number((z + 0.5).toFixed(1))))}
                  className="p-2 rounded-full bg-[#0D2B26] border border-[#D4A853]/35 hover:border-[#ECCD86] cursor-pointer"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIdx(null);
                    setZoom(1);
                  }}
                  className="p-2 rounded-full bg-[#8F1E3C] text-white hover:bg-[#A62547] cursor-pointer ml-1"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Image Frame */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden my-3">
              <button
                type="button"
                onClick={() => {
                  setZoom(1);
                  setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length);
                }}
                className="absolute left-1 sm:left-4 z-20 p-3 rounded-full bg-[#071E1B]/80 border border-[#D4A853]/40 text-[#ECCD86] hover:bg-[#0D2B26] cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <img
                src={activePhoto.src}
                alt={isMr ? activePhoto.captionMr : activePhoto.captionEn}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.dataset.fallbackStage !== '1' && img.src !== activePhoto.fallbackSrc) {
                    img.dataset.fallbackStage = '1';
                    img.src = activePhoto.fallbackSrc;
                  } else if (img.src !== PORTRAIT_FALLBACK_DATA_URI) {
                    img.dataset.fallbackStage = '2';
                    img.src = PORTRAIT_FALLBACK_DATA_URI;
                  }
                }}
                style={{ transform: `scale(${zoom})` }}
                className="max-h-[72vh] max-w-[88vw] rounded-2xl object-contain shadow-2xl transition-transform duration-300"
              />

              <button
                type="button"
                onClick={() => {
                  setZoom(1);
                  setLightboxIdx((lightboxIdx + 1) % filtered.length);
                }}
                className="absolute right-1 sm:right-4 z-20 p-3 rounded-full bg-[#071E1B]/80 border border-[#D4A853]/40 text-[#ECCD86] hover:bg-[#0D2B26] cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {filtered.map((thumb, tIdx) => (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => {
                    setZoom(1);
                    setLightboxIdx(tIdx);
                  }}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition cursor-pointer ${
                    tIdx === lightboxIdx
                      ? 'border-[#ECCD86] scale-105'
                      : 'border-transparent opacity-50 hover:opacity-90'
                  }`}
                >
                  <img
                    src={thumb.src.replace('w_1400', 'w_200')}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
