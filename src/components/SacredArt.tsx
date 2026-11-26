import React from 'react';
import { HeritageMotif } from '../data/weddingData';

export const GaneshaLineEmblem: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-14 h-14',
  color = '#E8CA82',
}) => (
  <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
    {/* Lotus Aura */}
    <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1" strokeDasharray="3 4" opacity="0.55" />
    <circle cx="60" cy="60" r="46" stroke={color} strokeWidth="1.2" opacity="0.7" />
    {/* Crown / Mukut */}
    <path
      d="M46 36 C48 25, 55 18, 60 15 C65 18, 72 25, 74 36"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path d="M53 24 L60 18 L67 24" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="60" cy="12" r="2.2" fill={color} />
    {/* Tilak */}
    <path d="M56 35 Q60 40 64 35" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="60" cy="39" r="2" fill="#D94E5C" />
    {/* Ears */}
    <path
      d="M45 39 C30 37, 24 50, 32 62 C36 67, 42 64, 44 58"
      stroke={color}
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M75 39 C90 37, 96 50, 88 62 C84 67, 78 64, 76 58"
      stroke={color}
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    {/* Eyes */}
    <path d="M49 46 Q53 43 56 46" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M64 46 Q67 43 71 46" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    {/* Trunk curving auspiciously left */}
    <path
      d="M60 47 C61 58, 59 68, 52 73 C46 77, 41 73, 44 68 C46 65, 50 66, 50 69"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    {/* Tusk */}
    <path d="M67 56 Q72 60 70 64" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Shoulders & Lotus Base */}
    <path
      d="M36 85 C42 78, 50 77, 60 79 C70 77, 78 78, 84 85"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M35 92 Q47 86 60 93 Q73 86 85 92 Q72 100 60 98 Q48 100 35 92 Z"
      stroke={color}
      strokeWidth="1.4"
      fill={color}
      fillOpacity="0.12"
    />
  </svg>
);

export const MandalaHalo: React.FC<{ className?: string; opacity?: number }> = ({
  className = 'w-[540px] h-[540px]',
  opacity = 0.22,
}) => (
  <svg viewBox="0 0 400 400" fill="none" className={className} style={{ opacity }} aria-hidden="true">
    <circle cx="200" cy="200" r="190" stroke="#D4A853" strokeWidth="0.9" strokeDasharray="4 6" />
    <circle cx="200" cy="200" r="168" stroke="#D4A853" strokeWidth="1.2" />
    <circle cx="200" cy="200" r="140" stroke="#D4A853" strokeWidth="0.8" strokeDasharray="2 5" />
    <circle cx="200" cy="200" r="108" stroke="#D4A853" strokeWidth="1" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <g key={i} transform={`rotate(${angle} 200 200)`}>
          <path
            d="M200 32 C210 56, 210 74, 200 92 C190 74, 190 56, 200 32 Z"
            stroke="#D4A853"
            strokeWidth="0.9"
            fill="#D4A853"
            fillOpacity="0.06"
          />
          <circle cx="200" cy="18" r="2.2" fill="#E8CA82" />
        </g>
      );
    })}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8 + 22.5;
      return (
        <g key={`inner-${i}`} transform={`rotate(${angle} 200 200)`}>
          <path
            d="M200 92 C212 114, 212 132, 200 150 C188 132, 188 114, 200 92 Z"
            stroke="#E8CA82"
            strokeWidth="0.85"
          />
        </g>
      );
    })}
  </svg>
);

export const ToranDivider: React.FC<{ className?: string }> = ({ className = 'w-full' }) => (
  <svg width="100%" height="54" fill="none" className={className} aria-hidden="true">
    <defs>
      <pattern id="toran-repeat" x="0" y="0" width="68" height="54" patternUnits="userSpaceOnUse">
        <line x1="0" y1="8" x2="68" y2="8" stroke="#D4A853" strokeWidth="1.2" strokeOpacity="0.55" />
        <path
          d="M6 8 Q34 36 62 8"
          stroke="#D4A853"
          strokeWidth="1.1"
          strokeOpacity="0.6"
          fill="none"
        />
        <path
          d="M34 16 C40 26, 39 36, 34 42 C29 36, 28 26, 34 16 Z"
          fill="#1A6B52"
          fillOpacity="0.7"
          stroke="#D4A853"
          strokeWidth="1"
        />
        <circle cx="34" cy="46" r="3.2" fill="#E39D25" />
      </pattern>
    </defs>
    <rect width="100%" height="54" fill="url(#toran-repeat)" />
  </svg>
);

export const CeremonyArt: React.FC<{ id: 'mehendi' | 'haldi' | 'wedding'; className?: string }> = ({
  id,
  className = 'w-20 h-20',
}) => {
  if (id === 'mehendi') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
        <circle cx="50" cy="50" r="45" fill="#1A6B52" fillOpacity="0.16" stroke="#2E8B6E" strokeWidth="1.3" />
        {/* Stylized Paisley Henna Motif */}
        <path
          d="M50 18 C67 20, 74 37, 67 56 C61 72, 43 79, 34 70 C24 60, 32 42, 43 37 C50 33, 53 25, 50 18 Z"
          stroke="#75D1AC"
          strokeWidth="2"
          fill="#2E8B6E"
          fillOpacity="0.22"
        />
        <circle cx="50" cy="52" r="9" stroke="#E8CA82" strokeWidth="1.5" />
        <circle cx="50" cy="52" r="3" fill="#E8CA82" />
        {/* Botanical leaves */}
        <path d="M24 38 Q32 30 38 38 Q31 44 24 38 Z" fill="#75D1AC" fillOpacity="0.6" />
        <path d="M68 74 Q76 66 82 74 Q75 80 68 74 Z" fill="#75D1AC" fillOpacity="0.6" />
        <circle cx="63" cy="28" r="2" fill="#E8CA82" />
        <circle cx="28" cy="56" r="2" fill="#E8CA82" />
      </svg>
    );
  }

  if (id === 'haldi') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
        <circle cx="50" cy="50" r="45" fill="#E39D25" fillOpacity="0.14" stroke="#E39D25" strokeWidth="1.3" />
        {/* Brass Haldi Urli Bowl */}
        <path
          d="M26 56 C26 73, 37 80, 50 80 C63 80, 74 73, 74 56 Z"
          fill="#E39D25"
          fillOpacity="0.32"
          stroke="#F5DDA3"
          strokeWidth="1.8"
        />
        <ellipse cx="50" cy="56" rx="24" ry="5.5" fill="#F2B73F" fillOpacity="0.55" stroke="#F5DDA3" strokeWidth="1.4" />
        {/* Mango leaves & Marigold flowers */}
        <path d="M36 53 C32 42, 35 33, 42 29 C45 38, 44 47, 36 53 Z" fill="#2E8B6E" stroke="#A6E3C9" strokeWidth="1" />
        <path d="M64 53 C68 42, 65 33, 58 29 C55 38, 56 47, 64 53 Z" fill="#2E8B6E" stroke="#A6E3C9" strokeWidth="1" />
        <circle cx="50" cy="36" r="10" fill="#F29F05" stroke="#FFF1C9" strokeWidth="1.3" />
        <circle cx="50" cy="36" r="4" fill="#C85A17" />
        {/* Musical Sparkle for Sangeet */}
        <path d="M74 26 V37 M74 26 L82 23 V34" stroke="#F5DDA3" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="72" cy="38" r="2.5" fill="#F5DDA3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="45" fill="#8F1E3C" fillOpacity="0.2" stroke="#D4A853" strokeWidth="1.4" />
      {/* Intertwined Sacred Rings / Varmala */}
      <circle cx="40" cy="48" r="16" stroke="#F5DDA3" strokeWidth="2.2" />
      <circle cx="60" cy="48" r="16" stroke="#E8CA82" strokeWidth="2.2" />
      {/* Sacred Mangalsutra / Lotus Diamond Crest above */}
      <path d="M50 18 L57 27 L50 36 L43 27 Z" fill="#D4A853" stroke="#FFF1C9" strokeWidth="1.2" />
      <circle cx="50" cy="27" r="2.2" fill="#8F1E3C" />
      {/* Sacred Flame */}
      <path
        d="M50 61 C56 68, 56 76, 50 80 C44 76, 44 68, 50 61 Z"
        fill="#E39D25"
        stroke="#FFF1C9"
        strokeWidth="1.1"
      />
    </svg>
  );
};

export const HeritageGlyph: React.FC<{ id: HeritageMotif['id']; className?: string }> = ({
  id,
  className = 'w-32 h-32',
}) => {
  if (id === 'ganesha') {
    return <GaneshaLineEmblem className={className} color="#ECCD86" />;
  }
  if (id === 'paithani') {
    return (
      <svg viewBox="0 0 140 140" fill="none" className={className} aria-hidden="true">
        <circle cx="70" cy="70" r="62" stroke="#D4A853" strokeWidth="1.2" strokeDasharray="4 4" />
        {/* Stylised Paithani Peacock */}
        <path
          d="M52 96 C46 76, 56 54, 70 40 C74 36, 80 35, 84 40 C78 44, 76 52, 82 60 C92 72, 94 90, 74 102 C63 108, 55 104, 52 96 Z"
          stroke="#ECCD86"
          strokeWidth="2.2"
          fill="#1A6B52"
          fillOpacity="0.35"
        />
        <path d="M84 40 L91 38 L86 43" stroke="#ECCD86" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="77" cy="41" r="1.8" fill="#ECCD86" />
        {/* Peacock Tail Feathers */}
        {[
          [40, 60],
          [32, 76],
          [36, 94],
          [100, 68],
          [102, 86],
        ].map(([cx, cy], idx) => (
          <g key={idx}>
            <circle cx={cx} cy={cy} r="7" stroke="#D4A853" strokeWidth="1.4" fill="#0D2B26" />
            <circle cx={cx} cy={cy} r="2.8" fill="#2E8B6E" />
          </g>
        ))}
        {/* Lotus base */}
        <path d="M40 112 Q70 102 100 112 Q70 124 40 112 Z" stroke="#ECCD86" strokeWidth="1.5" fill="#D4A853" fillOpacity="0.2" />
      </svg>
    );
  }
  if (id === 'antarpat') {
    return (
      <svg viewBox="0 0 140 140" fill="none" className={className} aria-hidden="true">
        <circle cx="70" cy="70" r="62" stroke="#D4A853" strokeWidth="1.2" />
        {/* Draped Silk Antarpat Veil */}
        <path
          d="M28 42 Q70 58 112 42 L106 96 Q70 84 34 96 Z"
          fill="#8F1E3C"
          fillOpacity="0.45"
          stroke="#ECCD86"
          strokeWidth="2"
        />
        <path d="M40 48 Q70 62 100 48" stroke="#F5DDA3" strokeWidth="1.3" strokeDasharray="3 3" />
        <circle cx="70" cy="69" r="12" stroke="#ECCD86" strokeWidth="1.6" fill="#071E1B" />
        <text x="70" y="74" textAnchor="middle" fill="#ECCD86" fontSize="13" fontFamily="Georgia, serif">
          ॐ
        </text>
      </svg>
    );
  }
  if (id === 'halad') {
    return <CeremonyArt id="haldi" className={className} />;
  }
  if (id === 'saptapadi') {
    return (
      <svg viewBox="0 0 140 140" fill="none" className={className} aria-hidden="true">
        <circle cx="70" cy="70" r="62" stroke="#D4A853" strokeWidth="1.2" />
        {/* Sacred Agni */}
        <path
          d="M70 30 C84 48, 86 68, 70 78 C54 68, 56 48, 70 30 Z"
          fill="#E39D25"
          fillOpacity="0.4"
          stroke="#F5DDA3"
          strokeWidth="2"
        />
        <path d="M70 46 C77 56, 77 68, 70 74 C63 68, 63 56, 70 46 Z" fill="#F2B73F" />
        {/* 7 Sacred Steps / Nodes */}
        {Array.from({ length: 7 }).map((_, idx) => {
          const x = 28 + idx * 14;
          const y = 98 + (idx % 2 === 0 ? 0 : 8);
          return <circle key={idx} cx={x} cy={y} r="4.5" fill="#ECCD86" stroke="#071E1B" strokeWidth="1.2" />;
        })}
        <path d="M28 102 L112 102" stroke="#D4A853" strokeWidth="1.2" strokeDasharray="2 4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 140 140" fill="none" className={className} aria-hidden="true">
      <circle cx="70" cy="70" r="62" stroke="#D4A853" strokeWidth="1.2" />
      {/* Showering Akshata Grains & Petals */}
      {[
        [45, 42, -25],
        [70, 32, 10],
        [95, 45, 32],
        [56, 60, -15],
        [84, 58, 22],
        [40, 80, 18],
        [70, 84, -8],
        [98, 82, -28],
      ].map(([x, y, rot], idx) => (
        <ellipse
          key={idx}
          cx={x}
          cy={y}
          rx="4"
          ry="8.5"
          transform={`rotate(${rot} ${x} ${y})`}
          fill={idx % 2 === 0 ? '#E39D25' : '#D94E5C'}
          stroke="#FFF1C9"
          strokeWidth="0.9"
        />
      ))}
      <path d="M40 105 Q70 93 100 105" stroke="#ECCD86" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};
