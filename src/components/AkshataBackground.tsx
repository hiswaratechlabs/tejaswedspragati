import React from 'react';

interface AkshataParticle {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  drift: string;
  rotate: number;
  color: string;
  kind: 'grain' | 'petal';
}

const PARTICLES: AkshataParticle[] = [
  { id: 1, left: '4%', size: 8, duration: '14s', delay: '0s', drift: '28px', rotate: 25, color: '#ECCD86', kind: 'grain' },
  { id: 2, left: '9%', size: 11, duration: '18s', delay: '-4s', drift: '-22px', rotate: 110, color: '#E39D25', kind: 'petal' },
  { id: 3, left: '14%', size: 7, duration: '13s', delay: '-7s', drift: '18px', rotate: 45, color: '#D4A853', kind: 'grain' },
  { id: 4, left: '19%', size: 10, duration: '19s', delay: '-2s', drift: '-30px', rotate: 70, color: '#8F1E3C', kind: 'petal' },
  { id: 5, left: '24%', size: 8, duration: '15s', delay: '-9s', drift: '24px', rotate: 15, color: '#F5DDA3', kind: 'grain' },
  { id: 6, left: '29%', size: 12, duration: '21s', delay: '-5s', drift: '-18px', rotate: 130, color: '#E39D25', kind: 'petal' },
  { id: 7, left: '34%', size: 7, duration: '16s', delay: '-11s', drift: '32px', rotate: 60, color: '#ECCD86', kind: 'grain' },
  { id: 8, left: '39%', size: 9, duration: '17s', delay: '-3s', drift: '-25px', rotate: 95, color: '#D4A853', kind: 'grain' },
  { id: 9, left: '44%', size: 11, duration: '20s', delay: '-13s', drift: '20px', rotate: 40, color: '#8F1E3C', kind: 'petal' },
  { id: 10, left: '49%', size: 7, duration: '14s', delay: '-6s', drift: '-26px', rotate: 150, color: '#F5DDA3', kind: 'grain' },
  { id: 11, left: '54%', size: 10, duration: '18s', delay: '-1s', drift: '22px', rotate: 80, color: '#E39D25', kind: 'petal' },
  { id: 12, left: '59%', size: 8, duration: '15s', delay: '-10s', drift: '-20px', rotate: 35, color: '#ECCD86', kind: 'grain' },
  { id: 13, left: '64%', size: 11, duration: '22s', delay: '-8s', drift: '28px', rotate: 120, color: '#D4A853', kind: 'petal' },
  { id: 14, left: '69%', size: 7, duration: '13s', delay: '-12s', drift: '-24px', rotate: 55, color: '#F5DDA3', kind: 'grain' },
  { id: 15, left: '74%', size: 10, duration: '19s', delay: '-3s', drift: '18px', rotate: 140, color: '#8F1E3C', kind: 'petal' },
  { id: 16, left: '79%', size: 8, duration: '16s', delay: '-14s', drift: '-32px', rotate: 20, color: '#ECCD86', kind: 'grain' },
  { id: 17, left: '84%', size: 12, duration: '20s', delay: '-7s', drift: '24px', rotate: 100, color: '#E39D25', kind: 'petal' },
  { id: 18, left: '89%', size: 7, duration: '15s', delay: '-2s', drift: '-18px', rotate: 65, color: '#D4A853', kind: 'grain' },
  { id: 19, left: '94%', size: 10, duration: '17s', delay: '-9s', drift: '20px', rotate: 155, color: '#F5DDA3', kind: 'petal' },
  { id: 20, left: '12%', size: 8, duration: '21s', delay: '-15s', drift: '26px', rotate: 50, color: '#ECCD86', kind: 'grain' },
  { id: 21, left: '37%', size: 9, duration: '16s', delay: '-5s', drift: '-22px', rotate: 115, color: '#E39D25', kind: 'grain' },
  { id: 22, left: '62%', size: 10, duration: '18s', delay: '-11s', drift: '24px', rotate: 75, color: '#8F1E3C', kind: 'petal' },
  { id: 23, left: '86%', size: 8, duration: '14s', delay: '-6s', drift: '-28px', rotate: 30, color: '#D4A853', kind: 'grain' },
];

export const AkshataBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[25] pointer-events-none overflow-hidden select-none"
    >
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="akshata-particle"
          style={
            {
              left: p.left,
              width: p.kind === 'grain' ? `${p.size * 0.6}px` : `${p.size}px`,
              height: p.kind === 'grain' ? `${p.size * 1.45}px` : `${p.size * 0.78}px`,
              backgroundColor: p.color,
              borderRadius: p.kind === 'grain' ? '9999px' : '70% 30% 65% 35% / 60% 40% 60% 40%',
              animationDuration: p.duration,
              animationDelay: p.delay,
              '--akshata-drift': p.drift,
              '--akshata-rot': `${p.rotate}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
