import React from 'react';
import { Pause, Play, Sparkles } from 'lucide-react';
import { Language, UI_COPY } from '../data/weddingData';

interface MusicDockProps {
  language: Language;
  isRagaPlaying: boolean;
  onToggleRaga: () => void;
  onShowerAkshata: () => void;
}

export const MusicDock: React.FC<MusicDockProps> = ({
  language,
  isRagaPlaying,
  onToggleRaga,
  onShowerAkshata,
}) => {
  const copy = UI_COPY[language];

  return (
    <div className="fixed bottom-4 right-4 z-[80] flex flex-col items-end gap-2.5 max-w-[calc(100vw-2rem)]">
      {/* Compact Floating Pill Bar */}
      <div className="flex items-center gap-1.5 rounded-full bg-[#071E1B]/90 backdrop-blur-xl border border-[#D4A853]/45 p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
        <button
          type="button"
          onClick={onToggleRaga}
          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
            isRagaPlaying
              ? 'bg-[#D4A853] text-[#071E1B]'
              : 'text-[#FAF5EB] hover:bg-[#0D2B26]'
          }`}
          title={copy.musicLabel}
        >
          {isRagaPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{copy.musicLabel}</span>
        </button>

        <button
          type="button"
          onClick={onShowerAkshata}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#8F1E3C] hover:bg-[#A62547] text-[#ECCD86] transition cursor-pointer"
          title={copy.showerAkshata}
          aria-label={copy.showerAkshata}
        >
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
