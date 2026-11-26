import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Download, MapPin, Shirt, ExternalLink } from 'lucide-react';
import {
  CeremonyEvent,
  Language,
  UI_COPY,
  WEDDING_EVENTS,
} from '../data/weddingData';
import { downloadIcsFile, getGoogleCalendarUrl } from '../utils/weddingActions';
import { CeremonyArt } from './SacredArt';

interface EventsSectionProps {
  language: Language;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ language }) => {
  const [selectedDay, setSelectedDay] = useState<'all' | CeremonyEvent['id']>('all');
  const [activeSwatch, setActiveSwatch] = useState<Record<string, string>>({});

  const copy = UI_COPY[language];
  const events = WEDDING_EVENTS;
  const isMr = language === 'mr';

  const visibleEvents =
    selectedDay === 'all' ? events : events.filter((ev) => ev.id === selectedDay);

  return (
    <section
      id="events"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#071E1B] via-[#0B2823] to-[#071E1B] text-[#FAF5EB] bg-jali-pattern"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-caps tracking-[0.24em] uppercase text-[#ECCD86]">
            {copy.eventsEyebrow}
          </p>
          <h2
            className={`mt-2 text-3xl sm:text-5xl text-[#FAF5EB] ${
              isMr ? 'font-mr-display' : 'font-display font-semibold'
            }`}
          >
            {copy.eventsTitle}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-[#D9CEBA] ${isMr ? 'font-mr-body' : ''}`}>
            {copy.eventsSubtitle}
          </p>
        </div>

        {/* Animated Day Filter Strip */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#0D2B26]/90 border border-[#D4A853]/35 rounded-full p-1.5 shadow-lg">
            {[
              { id: 'all' as const, label: copy.allDays },
              ...events.map((ev) => ({
                id: ev.id,
                label: isMr ? `दिवस ${ev.dayNumber} · ${ev.nameMr}` : `Day ${ev.dayNumber} · ${ev.nameEn}`,
              })),
            ].map((tab) => {
              const active = selectedDay === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedDay(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    active ? 'text-[#071E1B]' : 'text-[#D9CEBA] hover:text-[#FAF5EB]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="events-day-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ECCD86] to-[#D4A853]"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center-Axis Royal Passbook Timeline */}
        <div className="relative">
          {/* Vertical Spine (Left on mobile, Center on md+ when showing all) */}
          <div
            aria-hidden="true"
            className={`absolute top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#2E8B6E] via-[#E39D25] to-[#D4A853] ${
              visibleEvents.length > 1
                ? 'left-3.5 md:left-1/2 md:-translate-x-1/2'
                : 'left-3.5 md:hidden'
            }`}
          />

          <AnimatePresence mode="popLayout">
            <div className="space-y-10">
              {visibleEvents.map((ev, index) => {
                const selectedSwatch =
                  activeSwatch[ev.id] || (isMr ? ev.swatches[0].nameMr : ev.swatches[0].nameEn);
                const isSingle = visibleEvents.length === 1;
                const isRightSide = !isSingle && index % 2 === 1;

                return (
                  <motion.div
                    layout
                    key={ev.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex items-start ${
                      isSingle
                        ? 'justify-center pl-10 md:pl-0'
                        : isRightSide
                          ? 'pl-10 md:pl-0 md:justify-end'
                          : 'pl-10 md:pl-0 md:justify-start'
                    }`}
                  >
                    {/* Glowing Timeline Node */}
                    {!isSingle && (
                      <motion.span
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute left-1.5 md:left-1/2 md:-translate-x-1/2 top-8 z-20 w-4 h-4 rounded-full border-2 border-[#071E1B] ring-4 ring-[#071E1B]/90 shadow-[0_0_18px_rgba(212,168,83,0.65)]"
                        style={{ backgroundColor: ev.accentHex }}
                      />
                    )}

                    {/* Passbook Page Card */}
                    <motion.article
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                      className={`group relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#0E312B]/95 via-[#0B2621]/95 to-[#071E1B]/95 border border-[#D4A853]/40 hover:border-[#ECCD86]/85 p-6 sm:p-7 shadow-[0_22px_55px_rgba(0,0,0,0.42)] transition-colors overflow-hidden w-full ${
                        isSingle ? 'max-w-2xl' : 'md:w-[calc(50%-2rem)]'
                      }`}
                    >
                      {/* Hover Foil Sheen */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#ECCD86]/8 to-transparent pointer-events-none"
                      />

                      {/* Top Jewel Accent Glow */}
                      <div
                        className="absolute inset-x-0 top-0 h-1.5 rounded-t-3xl"
                        style={{ backgroundColor: ev.accentHex }}
                      />

                      <div>
                        {/* Ceremony Title + Floating Ceremony Art */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3
                              className={`text-2xl sm:text-3xl text-[#FAF5EB] ${
                                isMr ? 'font-mr-display' : 'font-display font-semibold'
                              }`}
                            >
                              {isMr ? ev.nameMr : ev.nameEn}
                            </h3>
                            <p
                              className={`mt-1 text-xs text-[#ECCD86] ${
                                isMr ? 'font-mr-body' : 'font-medium'
                              }`}
                            >
                              {isMr ? ev.subtitleMr : ev.subtitleEn}
                            </p>
                          </div>

                          <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                          >
                            <CeremonyArt
                              id={ev.id}
                              className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 group-hover:scale-105 transition-transform duration-300"
                            />
                          </motion.div>
                        </div>

                        {/* Description */}
                        <p
                          className={`text-sm text-[#D9CEBA] leading-relaxed mb-5 ${
                            isMr ? 'font-mr-body' : ''
                          }`}
                        >
                          {isMr ? ev.descriptionMr : ev.descriptionEn}
                        </p>

                        {/* Schedule & Venue Meta Box */}
                        <div className="space-y-2.5 rounded-2xl bg-[#071E1B]/80 border border-[#D4A853]/25 p-4 mb-5 text-xs sm:text-sm">
                          <div className="flex items-start gap-2.5">
                            <Calendar className="w-4 h-4 text-[#ECCD86] mt-0.5 shrink-0" />
                            <span className="font-semibold text-[#FAF5EB]">
                              {isMr ? ev.dateMr : ev.dateEn}
                            </span>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <Clock className="w-4 h-4 text-[#ECCD86] mt-0.5 shrink-0" />
                            <span className="text-[#ECCD86] font-medium">
                              {isMr ? ev.timeMr : ev.timeEn}
                            </span>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <MapPin className="w-4 h-4 text-[#ECCD86] mt-0.5 shrink-0" />
                            <div>
                              <p className="font-semibold text-[#FAF5EB]">
                                {isMr ? ev.venueMr : ev.venueEn}
                              </p>
                              <p className="text-xs text-[#B8AD99] mt-0.5">
                                {isMr ? ev.addressMr : ev.addressEn}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Dress Code Swatch Palette */}
                        <div className="mb-5">
                          <div className="flex items-center justify-between gap-2 text-xs mb-2">
                            <span className="inline-flex items-center gap-1.5 text-[#D9CEBA] font-medium">
                              <Shirt className="w-3.5 h-3.5 text-[#ECCD86]" />
                              {copy.attireLabel}:
                            </span>
                            <span className="text-[#ECCD86] font-semibold">{selectedSwatch}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            {ev.swatches.map((sw) => {
                              const swName = isMr ? sw.nameMr : sw.nameEn;
                              const active = selectedSwatch === swName;
                              return (
                                <button
                                  key={sw.hex}
                                  type="button"
                                  onClick={() =>
                                    setActiveSwatch((prev) => ({ ...prev, [ev.id]: swName }))
                                  }
                                  title={swName}
                                  className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                                    active ? 'scale-115 border-[#FAF5EB] ring-2 ring-[#D4A853]' : 'border-[#D4A853]/40'
                                  }`}
                                  style={{ backgroundColor: sw.hex }}
                                />
                              );
                            })}
                            <span className="text-[11px] text-[#B8AD99] line-clamp-1 ml-1">
                              {isMr ? ev.dressCodeMr : ev.dressCodeEn}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Perforated Passbook Tear-Line + Action Footer */}
                      <div className="relative flex flex-wrap items-center gap-2 pt-4 border-t border-dashed border-[#D4A853]/35">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            ev.mapQuery
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#FAF5EB]/10 hover:bg-[#FAF5EB]/18 border border-[#D4A853]/30 text-xs font-semibold text-[#FAF5EB] transition"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#ECCD86]" />
                          <span>{copy.directionsBtn}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>

                        <a
                          href={getGoogleCalendarUrl(ev)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#D4A853] hover:brightness-105 text-[#071E1B] text-xs font-semibold transition"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Google Cal</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => downloadIcsFile(ev)}
                          title="Download Apple / Outlook .ics"
                          className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl border border-[#D4A853]/35 text-[#ECCD86] hover:bg-[#133A33] text-xs font-semibold transition cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.article>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
