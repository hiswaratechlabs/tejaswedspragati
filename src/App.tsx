import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChapterId, FAMILY_PROFILE, Language } from './data/weddingData';
import { fireAkshataShower, ragaEngine } from './utils/weddingActions';
import { PatrikaCurtain } from './components/PatrikaCurtain';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScratchRevealSection } from './components/ScratchRevealSection';
import { EventsSection } from './components/EventsSection';
import { HeritageSection } from './components/HeritageSection';
import { GallerySection } from './components/GallerySection';
import { VenueSection } from './components/VenueSection';
import { RsvpSection } from './components/RsvpSection';
import { Footer } from './components/Footer';
import { AkshataBackground } from './components/AkshataBackground';

const CHAPTER_ORDER: ChapterId[] = [
  'patrika',
  'scratch',
  'events',
  'heritage',
  'gallery',
  'venue',
  'rsvp',
];

export function App() {
  const [curtainOpen, setCurtainOpen] = useState(true);
  const [language, setLanguage] = useState<Language>('en');
  const [viewMode, setViewMode] = useState<'scroll' | 'deck'>('scroll');
  const [activeChapter, setActiveChapter] = useState<ChapterId>('patrika');
  const [isRagaPlaying, setIsRagaPlaying] = useState(false);
  const [blessingToast, setBlessingToast] = useState<string | null>(null);

  const profile = FAMILY_PROFILE;
  const isMr = language === 'mr';

  useEffect(() => {
    document.title = isMr
      ? `${profile.coupleMr} — शुभविवाह | १२ डिसेंबर २०२६`
      : `${profile.coupleEn} — Shubh Vivaah | 12 Dec 2026`;
  }, [profile, isMr]);

  // Hash-sync initial chapter if present
  useEffect(() => {
    const raw = window.location.hash.replace('#', '') as ChapterId;
    if (CHAPTER_ORDER.includes(raw)) {
      setActiveChapter(raw);
    }
  }, []);

  // Scroll spy for Full Scroll mode
  useEffect(() => {
    if (viewMode !== 'scroll') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as ChapterId;
            if (CHAPTER_ORDER.includes(id)) {
              setActiveChapter(id);
            }
          }
        });
      },
      { rootMargin: '-35% 0px -50% 0px' }
    );

    CHAPTER_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [viewMode, curtainOpen]);

  const handleEnterCurtain = (withAudio: boolean) => {
    setCurtainOpen(false);
    fireAkshataShower('grand');
    if (withAudio) {
      ragaEngine.playBellChime();
      ragaEngine.start();
      setIsRagaPlaying(true);
    }
  };

  const handleToggleRaga = () => {
    if (isRagaPlaying) {
      ragaEngine.stop();
      setIsRagaPlaying(false);
    } else {
      ragaEngine.start();
      setIsRagaPlaying(true);
    }
  };

  const handleShowerAkshata = useCallback(() => {
    fireAkshataShower('grand');
    ragaEngine.playBellChime();
    setBlessingToast(
      isMr
        ? `${profile.coupleMr} यांच्यावर मंगल अक्षता वर्षाव! ✨`
        : `Mangal Akshata showered upon ${profile.coupleEn}! ✨`
    );
    window.setTimeout(() => setBlessingToast(null), 2600);
  }, [isMr, profile.coupleEn, profile.coupleMr]);

  const handleChapterSelect = (id: ChapterId) => {
    setActiveChapter(id);
    try {
      window.history.replaceState(null, '', `#${id}`);
    } catch {
      // Ignore
    }

    if (viewMode === 'scroll') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#071E1B] text-[#FAF5EB]">
      <AkshataBackground />
      <PatrikaCurtain
        isOpen={curtainOpen}
        language={language}
        onLanguageChange={setLanguage}
        onEnter={handleEnterCurtain}
      />

      <Navbar
        language={language}
        activeChapter={activeChapter}
        viewMode={viewMode}
        isRagaPlaying={isRagaPlaying}
        onLanguageChange={setLanguage}
        onChapterSelect={handleChapterSelect}
        onViewModeChange={(mode) => {
          setViewMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onToggleRaga={handleToggleRaga}
        onShowerAkshata={handleShowerAkshata}
        onReplayCurtain={() => setCurtainOpen(true)}
      />

      {/* Akshata Blessing Toast */}
      <AnimatePresence>
        {blessingToast && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[90] px-5 py-2.5 rounded-full bg-[#071E1B]/95 border border-[#ECCD86] text-[#ECCD86] text-xs sm:text-sm font-semibold shadow-2xl backdrop-blur-md whitespace-nowrap"
          >
            {blessingToast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Stage */}
      <main className="flex-1">
        <HeroSection
          language={language}
          onNavigate={handleChapterSelect}
        />
        <ScratchRevealSection language={language} />
        <EventsSection language={language} />
        <HeritageSection language={language} onShowerAkshata={handleShowerAkshata} />
        <GallerySection language={language} />
        <VenueSection language={language} />
        <RsvpSection language={language} />
      </main>

      <Footer
        language={language}
        onScrollTop={() => {
          if (viewMode === 'deck') setActiveChapter('patrika');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;
