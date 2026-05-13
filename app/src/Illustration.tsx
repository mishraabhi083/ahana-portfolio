import React from 'react';

/* =========================================================
   Theme-aware vector illustrations.
   All SVGs use currentColor + CSS variables so they tint
   automatically with the active theme.
   ========================================================= */

type Variant =
  | 'bottlecapps'
  | 'cravingly'
  | 'techmatic'
  | 'compulease'
  | 'portrait'
  | 'hero'
  | 'gallery-1'
  | 'gallery-2'
  | 'gallery-3'
  | 'gallery-4';

interface Props {
  variant: Variant;
  className?: string;
  ariaLabel?: string;
}

const Defs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={`${id}-g1`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95" />
      <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.85" />
    </linearGradient>
    <linearGradient id={`${id}-g2`} x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stopColor="var(--accent-2)" stopOpacity="0.7" />
      <stop offset="100%" stopColor="var(--lime)" stopOpacity="0.6" />
    </linearGradient>
    <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="60%">
      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
    </radialGradient>
  </defs>
);

/* ---- BOTTLECAPPS — SEO/SERP rising chart ---- */
function Bottlecapps() {
  return (
    <svg viewBox="0 0 600 400" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="bc" />
      <rect width="600" height="400" fill="var(--bg-2)" />
      <circle cx="480" cy="80" r="180" fill="url(#bc-glow)" />
      {/* grid */}
      <g stroke="var(--line)" strokeWidth="1">
        {[80, 140, 200, 260, 320].map((y) => (
          <line key={y} x1="60" y1={y} x2="540" y2={y} />
        ))}
      </g>
      {/* bars */}
      {[
        [110, 280, 50],
        [170, 240, 90],
        [230, 200, 130],
        [290, 170, 160],
        [350, 130, 200],
        [410, 95, 235],
      ].map(([x, y, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="34"
          height={h}
          rx="6"
          fill={i === 5 ? 'url(#bc-g1)' : 'var(--surface-2)'}
          stroke="var(--line)"
        />
      ))}
      {/* trend line */}
      <path
        d="M 90 290 L 150 250 L 210 215 L 270 180 L 330 140 L 390 105 L 450 80"
        fill="none"
        stroke="url(#bc-g1)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        [90, 290], [150, 250], [210, 215], [270, 180], [330, 140], [390, 105], [450, 80],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
      ))}
      {/* SERP card */}
      <g transform="translate(60, 40)">
        <rect width="220" height="42" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
        <circle cx="20" cy="21" r="7" fill="var(--accent)" />
        <rect x="36" y="14" width="120" height="6" rx="3" fill="var(--ink)" opacity="0.7" />
        <rect x="36" y="26" width="80" height="5" rx="2" fill="var(--muted)" />
      </g>
      <text x="60" y="370" fontFamily="var(--font-mono)" fontSize="11" fill="var(--muted)" letterSpacing="2">
        ORGANIC TRAFFIC · +50%
      </text>
    </svg>
  );
}

/* ---- CRAVINGLY — Instagram growth + community ---- */
function Cravingly() {
  return (
    <svg viewBox="0 0 600 400" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="cv" />
      <rect width="600" height="400" fill="var(--bg-2)" />
      <circle cx="120" cy="320" r="180" fill="url(#cv-glow)" />
      {/* phone frame */}
      <g transform="translate(180, 50)">
        <rect width="240" height="320" rx="32" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="2" />
        <rect x="14" y="14" width="212" height="292" rx="22" fill="var(--bg)" />
        {/* IG header */}
        <g transform="translate(28, 32)">
          <circle cx="18" cy="18" r="18" fill="url(#cv-g1)" />
          <circle cx="18" cy="18" r="13" fill="var(--bg)" />
          <circle cx="18" cy="18" r="9" fill="url(#cv-g1)" />
          <rect x="48" y="10" width="80" height="6" rx="3" fill="var(--ink)" opacity="0.8" />
          <rect x="48" y="22" width="50" height="5" rx="2" fill="var(--muted)" />
        </g>
        {/* feed grid */}
        <g transform="translate(28, 90)">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const x = (i % 3) * 62;
            const y = Math.floor(i / 3) * 62;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width="58"
                height="58"
                rx="8"
                fill={i % 2 ? 'url(#cv-g1)' : 'url(#cv-g2)'}
                opacity={0.55 + (i % 3) * 0.15}
              />
            );
          })}
        </g>
        {/* heart + counter */}
        <g transform="translate(28, 240)">
          <path
            d="M16 28 C 4 20 4 8 14 8 C 18 8 18 12 16 14 C 14 12 14 8 18 8 C 28 8 28 20 16 28 Z"
            fill="var(--accent)"
          />
          <rect x="36" y="14" width="60" height="6" rx="3" fill="var(--ink)" opacity="0.8" />
          <rect x="36" y="24" width="40" height="5" rx="2" fill="var(--muted)" />
        </g>
      </g>
      {/* growth arrow badge */}
      <g transform="translate(60, 80)">
        <rect width="110" height="56" rx="14" fill="var(--accent)" />
        <text x="14" y="24" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)" letterSpacing="1.5">
          REELS
        </text>
        <text x="14" y="46" fontFamily="var(--font-display)" fontSize="22" fontWeight="600" fill="var(--bg)">
          5M+
        </text>
      </g>
      {/* community dots */}
      <g transform="translate(60, 260)">
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={i * 18} cy="0" r="11" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="2" />
        ))}
        <text x="98" y="4" fontFamily="var(--font-mono)" fontSize="11" fill="var(--ink)">
          10K+ community
        </text>
      </g>
    </svg>
  );
}

/* ---- TECHMATIC — App marketing dashboard ---- */
function Techmatic() {
  return (
    <svg viewBox="0 0 600 400" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="tm" />
      <rect width="600" height="400" fill="var(--bg-2)" />
      <circle cx="500" cy="350" r="200" fill="url(#tm-glow)" />
      {/* dashboard panel */}
      <g transform="translate(40, 50)">
        <rect width="520" height="300" rx="20" fill="var(--surface-2)" stroke="var(--line)" />
        {/* tabs */}
        <g transform="translate(20, 18)">
          <rect width="60" height="22" rx="6" fill="var(--accent)" />
          <text x="30" y="15" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)">
            ROAS
          </text>
          <rect x="70" width="60" height="22" rx="6" fill="var(--surface)" stroke="var(--line)" />
          <rect x="140" width="60" height="22" rx="6" fill="var(--surface)" stroke="var(--line)" />
        </g>
        {/* big number */}
        <g transform="translate(20, 60)">
          <text fontFamily="var(--font-display)" fontSize="54" fontWeight="600" fill="var(--ink)">
            +35%
          </text>
          <text x="0" y="76" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="2">
            PPC ROI · QOQ
          </text>
        </g>
        {/* area chart */}
        <g transform="translate(0, 160)">
          <path
            d="M 20 100 C 80 80, 120 90, 160 60 S 240 30, 280 50 S 360 20, 420 30 S 480 10, 500 5 L 500 130 L 20 130 Z"
            fill="url(#tm-g1)"
            opacity="0.45"
          />
          <path
            d="M 20 100 C 80 80, 120 90, 160 60 S 240 30, 280 50 S 360 20, 420 30 S 480 10, 500 5"
            fill="none"
            stroke="url(#tm-g1)"
            strokeWidth="3"
          />
        </g>
        {/* mini stats */}
        <g transform="translate(280, 60)">
          {[
            ['IMPRESSIONS', '4.2M'],
            ['CTR', '6.8%'],
            ['INSTALLS', '12K'],
          ].map(([l, v], i) => (
            <g key={i} transform={`translate(${i * 80}, 0)`}>
              <rect width="70" height="64" rx="10" fill="var(--surface)" stroke="var(--line)" />
              <text x="10" y="20" fontFamily="var(--font-mono)" fontSize="7" fill="var(--muted)" letterSpacing="1">
                {l}
              </text>
              <text x="10" y="46" fontFamily="var(--font-display)" fontSize="18" fontWeight="600" fill="var(--ink)">
                {v}
              </text>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

/* ---- COMPULEASE — Funnel + analytics ---- */
function Compulease() {
  return (
    <svg viewBox="0 0 600 400" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="cl" />
      <rect width="600" height="400" fill="var(--bg-2)" />
      <circle cx="300" cy="200" r="200" fill="url(#cl-glow)" />
      {/* funnel */}
      <g transform="translate(180, 60)">
        {[
          { y: 0, w: 240, label: 'AWARENESS', value: '120K' },
          { y: 60, w: 190, label: 'INTEREST', value: '48K' },
          { y: 120, w: 140, label: 'CONSIDER', value: '14K' },
          { y: 180, w: 90, label: 'CONVERT', value: '3.2K' },
          { y: 240, w: 50, label: 'LOYAL', value: '820' },
        ].map((s, i) => {
          const x = (240 - s.w) / 2;
          return (
            <g key={i}>
              <rect
                x={x}
                y={s.y}
                width={s.w}
                height="44"
                rx="8"
                fill={i === 3 ? 'url(#cl-g1)' : 'var(--surface-2)'}
                stroke="var(--line)"
              />
              <text
                x="120"
                y={s.y + 22}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--muted)"
                letterSpacing="2"
              >
                {s.label}
              </text>
              <text
                x="120"
                y={s.y + 38}
                textAnchor="middle"
                fontFamily="var(--font-display)"
                fontSize="14"
                fontWeight="600"
                fill="var(--ink)"
              >
                {s.value}
              </text>
            </g>
          );
        })}
      </g>
      {/* side gauges */}
      <g transform="translate(50, 100)">
        <circle cx="50" cy="50" r="44" fill="none" stroke="var(--line)" strokeWidth="6" />
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="url(#cl-g1)"
          strokeWidth="6"
          strokeDasharray="200 276"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="56" textAnchor="middle" fontFamily="var(--font-display)" fontSize="20" fontWeight="600" fill="var(--ink)">
          72%
        </text>
      </g>
      <g transform="translate(50, 230)">
        <text fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="2">
          GA4 · GSC
        </text>
        <text y="22" fontFamily="var(--font-display)" fontSize="22" fontWeight="600" fill="var(--ink)">
          12+ tools
        </text>
      </g>
    </svg>
  );
}

/* ---- PORTRAIT — Abstract avatar ---- */
function Portrait() {
  return (
    <svg viewBox="0 0 400 500" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="pt" />
      <rect width="400" height="500" fill="var(--bg-2)" />
      <circle cx="200" cy="240" r="240" fill="url(#pt-glow)" />
      {/* background blob */}
      <path
        d="M 60 120 Q 120 40 220 60 T 360 200 Q 380 320 280 380 T 80 380 Q 20 280 60 120 Z"
        fill="url(#pt-g1)"
        opacity="0.85"
      />
      {/* head */}
      <ellipse cx="200" cy="220" rx="78" ry="92" fill="var(--ink)" opacity="0.92" />
      {/* hair shape */}
      <path
        d="M 122 200 Q 120 120 200 110 Q 280 120 278 200 Q 270 170 200 165 Q 130 170 122 200 Z"
        fill="var(--bg-2)"
        opacity="0.95"
      />
      {/* face highlight */}
      <ellipse cx="178" cy="218" rx="20" ry="28" fill="var(--accent)" opacity="0.25" />
      {/* shoulders */}
      <path
        d="M 80 420 Q 200 320 320 420 L 320 500 L 80 500 Z"
        fill="var(--ink)"
        opacity="0.92"
      />
      {/* sparkle accents */}
      <g fill="var(--accent)">
        <circle cx="320" cy="120" r="4" />
        <circle cx="80" cy="180" r="3" />
        <circle cx="340" cy="300" r="5" />
      </g>
    </svg>
  );
}

/* ---- HERO INLINE — small abstract orbit (transparent) ---- */
function HeroInline() {
  return (
    <svg viewBox="0 0 220 140" className="ill-svg hero-orbit" preserveAspectRatio="xMidYMid meet">
      <Defs id="hi" />
      <g transform="translate(110 70)">
        <g className="hero-orbit-ring hero-orbit-ring-1">
          <ellipse rx="80" ry="30" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.9" />
          <circle cx="80" cy="0" r="6" fill="var(--accent)" />
        </g>
        <g className="hero-orbit-ring hero-orbit-ring-2" transform="rotate(45)">
          <ellipse rx="80" ry="30" fill="none" stroke="var(--accent-2)" strokeWidth="2" opacity="0.6" />
          <circle cx="-80" cy="0" r="5" fill="var(--accent-2)" />
        </g>
        <g className="hero-orbit-ring hero-orbit-ring-3" transform="rotate(-45)">
          <ellipse rx="80" ry="30" fill="none" stroke="var(--lime)" strokeWidth="2" opacity="0.5" />
          <circle cx="80" cy="0" r="4" fill="var(--lime)" />
        </g>
        <circle r="22" fill="url(#hi-g1)" className="hero-orbit-core" />
      </g>
    </svg>
  );
}

/* ---- GALLERY — abstract decorative tiles ---- */
function Gallery1() {
  return (
    <svg viewBox="0 0 400 500" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="g1" />
      <rect width="400" height="500" fill="var(--bg-2)" />
      <circle cx="200" cy="250" r="240" fill="url(#g1-glow)" />
      {/* concentric rings */}
      {[40, 80, 120, 160, 200].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="250"
          r={r}
          fill="none"
          stroke={i % 2 ? 'var(--accent)' : 'var(--accent-2)'}
          strokeWidth="2"
          opacity={0.3 + i * 0.12}
        />
      ))}
      <circle cx="200" cy="250" r="22" fill="url(#g1-g1)" />
    </svg>
  );
}
function Gallery2() {
  return (
    <svg viewBox="0 0 400 300" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="g2" />
      <rect width="400" height="300" fill="var(--bg-2)" />
      <circle cx="80" cy="240" r="180" fill="url(#g2-glow)" />
      {/* wave bars */}
      {Array.from({ length: 14 }).map((_, i) => {
        const h = 40 + Math.sin(i * 0.7) * 60 + 50;
        return (
          <rect
            key={i}
            x={20 + i * 26}
            y={150 - h / 2}
            width="14"
            height={h}
            rx="6"
            fill={i % 3 === 0 ? 'url(#g2-g1)' : 'var(--surface-2)'}
            stroke="var(--line)"
          />
        );
      })}
    </svg>
  );
}
function Gallery3() {
  return (
    <svg viewBox="0 0 400 400" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="g3" />
      <rect width="400" height="400" fill="var(--bg-2)" />
      <circle cx="200" cy="200" r="220" fill="url(#g3-glow)" />
      {/* grid of squares */}
      {Array.from({ length: 25 }).map((_, i) => {
        const x = (i % 5) * 70 + 30;
        const y = Math.floor(i / 5) * 70 + 30;
        const accent = (i * 7) % 5 === 0;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="56"
            height="56"
            rx="10"
            fill={accent ? 'url(#g3-g1)' : 'var(--surface-2)'}
            stroke="var(--line)"
          />
        );
      })}
    </svg>
  );
}
function Gallery4() {
  return (
    <svg viewBox="0 0 400 600" className="ill-svg" preserveAspectRatio="xMidYMid meet">
      <Defs id="g4" />
      <rect width="400" height="600" fill="var(--bg-2)" />
      <circle cx="200" cy="300" r="260" fill="url(#g4-glow)" />
      {/* organic curves */}
      <path
        d="M 0 120 Q 100 60 200 140 T 400 100 L 400 200 Q 300 260 200 200 T 0 220 Z"
        fill="url(#g4-g1)"
        opacity="0.85"
      />
      <path
        d="M 0 320 Q 100 380 200 320 T 400 360 L 400 460 Q 300 400 200 460 T 0 420 Z"
        fill="url(#g4-g2)"
        opacity="0.7"
      />
      <circle cx="120" cy="280" r="40" fill="var(--accent)" opacity="0.9" />
      <circle cx="280" cy="500" r="60" fill="var(--accent-2)" opacity="0.7" />
    </svg>
  );
}

const MAP: Record<Variant, React.FC> = {
  bottlecapps: Bottlecapps,
  cravingly: Cravingly,
  techmatic: Techmatic,
  compulease: Compulease,
  portrait: Portrait,
  hero: HeroInline,
  'gallery-1': Gallery1,
  'gallery-2': Gallery2,
  'gallery-3': Gallery3,
  'gallery-4': Gallery4,
};

export default function Illustration({ variant, className = '', ariaLabel }: Props) {
  const C = MAP[variant] || Bottlecapps;
  return (
    <div className={`illustration ${className}`} role="img" aria-label={ariaLabel || variant}>
      <C />
    </div>
  );
}
