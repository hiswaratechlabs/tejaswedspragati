import confetti from 'canvas-confetti';
import { CeremonyEvent, FAMILY_PROFILE, Language } from '../data/weddingData';
import weddingSongUrl from '../../song/Tadev Lagnam Sudinamt Deo I Pratik & Komal I Wedding Card Shoot I Utsav Photography I 2024.mp3';
import ramayanSongUrl from '../../song/ramayan_song.mp3';

const WEDDING_PLAYLIST = [weddingSongUrl, ramayanSongUrl];

export const PORTRAIT_FALLBACK_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23071E1B'/%3E%3Cstop offset='50%25' stop-color='%230D2B26'/%3E%3Cstop offset='100%25' stop-color='%23071E1B'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='800' fill='url(%23g)'/%3E%3Crect x='24' y='24' width='552' height='752' rx='24' fill='none' stroke='%23D4A853' stroke-opacity='0.45' stroke-width='2'/%3E%3Ccircle cx='300' cy='355' r='110' fill='none' stroke='%23D4A853' stroke-opacity='0.65' stroke-width='2' stroke-dasharray='6 6'/%3E%3Ccircle cx='300' cy='355' r='92' fill='%23071E1B' stroke='%23ECCD86' stroke-width='2'/%3E%3Ctext x='300' y='370' text-anchor='middle' font-family='Georgia, serif' font-size='56' font-style='italic' fill='%23ECCD86'%3ET %26 P%3C/text%3E%3Ctext x='300' y='520' text-anchor='middle' font-family='Georgia, serif' font-size='22' letter-spacing='4' fill='%23FAF5EB'%3E12 DECEMBER 2026%3C/text%3E%3Ctext x='300' y='558' text-anchor='middle' font-family='Georgia, serif' font-size='16' fill='%23D9CEBA'%3EAditya Lawns, Bhadgaon%3C/text%3E%3C/svg%3E";

export function getGoogleCalendarUrl(event: CeremonyEvent): string {
  const couple = FAMILY_PROFILE.coupleEn;
  const title = encodeURIComponent(`${couple} — ${event.nameEn}`);
  const details = encodeURIComponent(
    `${event.descriptionEn}\n\nVenue: ${event.venueEn}, ${event.addressEn}\nAttire: ${event.dressCodeEn}`
  );
  const location = encodeURIComponent(`${event.venueEn}, ${event.addressEn}`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${event.startIso}/${event.endIso}&details=${details}&location=${location}`;
}

export function downloadIcsFile(event: CeremonyEvent): void {
  const couple = FAMILY_PROFILE.coupleEn;
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//TejasWedsPragati//WeddingInvite//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${event.id}-2026@tejaswedspragati`,
    `DTSTAMP:20261126T000000Z`,
    `DTSTART;TZID=Asia/Kolkata:${event.startIso}`,
    `DTEND;TZID=Asia/Kolkata:${event.endIso}`,
    `SUMMARY:${couple} — ${event.nameEn}`,
    `DESCRIPTION:${event.descriptionEn.replace(/\n/g, '\\n')} | Dress Code: ${event.dressCodeEn}`,
    `LOCATION:${event.venueEn}, ${event.addressEn}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${couple.replace(/[^a-zA-Z0-9]+/g, '-')}-${event.id}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function fireAkshataShower(intensity: 'gentle' | 'grand' = 'gentle'): void {
  try {
    const colors = ['#D4A853', '#F5DDA3', '#E39D25', '#8F1E3C', '#FAF5EB', '#2E8B6E'];
    if (intensity === 'grand') {
      confetti({
        particleCount: 80,
        spread: 85,
        origin: { y: 0.55 },
        colors,
        disableForReducedMotion: true,
      });
      setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 55,
          origin: { x: 0.1, y: 0.65 },
          colors,
          disableForReducedMotion: true,
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 55,
          origin: { x: 0.9, y: 0.65 },
          colors,
          disableForReducedMotion: true,
        });
      }, 220);
    } else {
      confetti({
        particleCount: 50,
        spread: 70,
        startVelocity: 32,
        origin: { y: 0.35 },
        colors,
        disableForReducedMotion: true,
      });
    }
  } catch {
    // Graceful no-op if canvas confetti cannot run
  }
}

export function downloadKeepsakeCard(language: Language): void {
  const profile = FAMILY_PROFILE;
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 1600;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Deep peacock emerald backdrop
  const bg = ctx.createLinearGradient(0, 0, 1200, 1600);
  bg.addColorStop(0, '#061A17');
  bg.addColorStop(0.5, '#0C2D27');
  bg.addColorStop(1, '#061A17');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1200, 1600);

  // Subtle decorative border
  ctx.strokeStyle = '#D4A853';
  ctx.lineWidth = 4;
  ctx.strokeRect(48, 48, 1104, 1504);

  ctx.strokeStyle = 'rgba(212, 168, 83, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(68, 68, 1064, 1464);

  // Corner floral medallions
  const corners = [
    [68, 68],
    [1132, 68],
    [68, 1532],
    [1132, 1532],
  ];
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fillStyle = '#0D2B26';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#D4A853';
    ctx.stroke();
  });

  // Radial glow
  const glow = ctx.createRadialGradient(600, 560, 40, 600, 560, 520);
  glow.addColorStop(0, 'rgba(212, 168, 83, 0.16)');
  glow.addColorStop(1, 'rgba(212, 168, 83, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1200, 1600);

  ctx.textAlign = 'center';

  // Invocation
  ctx.fillStyle = '#E8CA82';
  ctx.font = '600 26px Georgia, serif';
  ctx.fillText(
    language === 'mr' ? '॥ श्री गणेशाय नमः ॥' : '|| SHREE GANESHAY NAMAH ||',
    600,
    170
  );

  // Sub-label
  ctx.fillStyle = '#D9CEBA';
  ctx.font = '500 22px Georgia, serif';
  ctx.fillText(
    language === 'mr' ? 'शुभविवाह निमंत्रण पत्रिका' : 'SHUBH VIVAAH INVITATION KEEPSAKE',
    600,
    240
  );

  // Monogram Ring
  ctx.beginPath();
  ctx.arc(600, 390, 86, 0, Math.PI * 2);
  ctx.strokeStyle = '#D4A853';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.fillStyle = '#F5DDA3';
  ctx.font = 'italic 700 58px Georgia, serif';
  ctx.fillText('T ♥ P', 600, 410);

  // Couple Names
  ctx.fillStyle = '#FAF5EB';
  ctx.font = '700 84px Georgia, serif';
  ctx.fillText(language === 'mr' ? profile.coupleMr : profile.coupleEn, 600, 610);

  // Divider
  ctx.strokeStyle = 'rgba(212, 168, 83, 0.7)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(320, 675);
  ctx.lineTo(880, 675);
  ctx.stroke();

  // Save the Date card block inside
  ctx.fillStyle = 'rgba(250, 245, 235, 0.06)';
  ctx.fillRect(150, 740, 900, 440);
  ctx.strokeStyle = 'rgba(212, 168, 83, 0.45)';
  ctx.strokeRect(150, 740, 900, 440);

  ctx.fillStyle = '#E8CA82';
  ctx.font = '600 24px Georgia, serif';
  ctx.fillText(
    language === 'mr' ? 'शनिवार, १२ डिसेंबर २०२६' : 'SATURDAY, 12 DECEMBER 2026',
    600,
    835
  );

  ctx.fillStyle = '#FAF5EB';
  ctx.font = '700 52px Georgia, serif';
  ctx.fillText(
    language === 'mr' ? 'दुपारी १२.२० वा. (शुभ मुहूर्त)' : '12:20 PM IST • Shubh Muhurat',
    600,
    920
  );

  ctx.fillStyle = '#D9CEBA';
  ctx.font = '400 26px Georgia, serif';
  ctx.fillText(
    language === 'mr' ? 'मिती मार्गशीर्ष शु. १, शके १९४८' : 'Margashirsha Shuddha 1, Shake 1948',
    600,
    990
  );

  ctx.fillStyle = '#F5DDA3';
  ctx.font = '600 30px Georgia, serif';
  ctx.fillText('Aditya Lawns, Chalisgaon Road', 600, 1085);
  ctx.fillStyle = '#D9CEBA';
  ctx.font = '400 25px Georgia, serif';
  ctx.fillText('Bhadgaon, Dist. Jalgaon, Maharashtra', 600, 1130);

  // Family Host Line
  ctx.fillStyle = '#E8CA82';
  ctx.font = '500 24px Georgia, serif';
  ctx.fillText(language === 'mr' ? profile.hostsShortMr : profile.hostsShortEn, 600, 1320);

  ctx.fillStyle = '#B8AD99';
  ctx.font = 'italic 24px Georgia, serif';
  ctx.fillText(profile.hashtag, 600, 1390);

  const link = document.createElement('a');
  link.download = `${profile.hashtag.replace('#', '')}-Invitation-Card.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

/**
 * Wedding Song & Bell Chime Engine.
 * Plays the attached MP3 wedding playlist sequentially on loop and synthesizes gentle bell chimes.
 */
class AmbientRagaEngine {
  private ctx: AudioContext | null = null;
  private audio: HTMLAudioElement | null = null;
  private trackIndex = 0;
  private isPlaying = false;

  private getAudio(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio(WEDDING_PLAYLIST[this.trackIndex]);
      this.audio.volume = 0.65;
      this.audio.preload = 'auto';
      this.audio.addEventListener('ended', () => {
        if (!this.isPlaying || !this.audio) return;
        this.trackIndex = (this.trackIndex + 1) % WEDDING_PLAYLIST.length;
        this.audio.src = WEDDING_PLAYLIST[this.trackIndex];
        const nextPlay = this.audio.play();
        if (nextPlay !== undefined) {
          nextPlay.catch(() => {
            this.isPlaying = false;
          });
        }
      });
    }
    return this.audio;
  }

  public start(): void {
    if (this.isPlaying) return;
    try {
      const audio = this.getAudio();
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          this.isPlaying = false;
        });
      }
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public playBellChime(): void {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }
      const ctx = this.ctx;
      if (ctx.state === 'suspended') void ctx.resume();
      const now = ctx.currentTime;

      [554.37, 830.61, 1108.73].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.07 / (i + 1), now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 1.6);
      });
    } catch {
      // Ignore audio errors
    }
  }

  public stop(): void {
    this.isPlaying = false;
    if (this.audio) {
      try {
        this.audio.pause();
      } catch {
        // Ignore
      }
    }
  }
}

export const ragaEngine = new AmbientRagaEngine();
