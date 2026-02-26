import React from 'react';

// Each country has: ISO 2-letter code for flagcdn.com image, and a hard-coded plain name string
const COUNTRIES: { code: string; name: string }[] = [
  { code: 'us', name: 'USA' },
  { code: 'gb', name: 'UK' },
  { code: 'ca', name: 'Canada' },
  { code: 'au', name: 'Australia' },
  { code: 'de', name: 'Germany' },
  { code: 'jp', name: 'Japan' },
  { code: 'fr', name: 'France' },
  { code: 'it', name: 'Italy' },
  { code: 'es', name: 'Spain' },
  { code: 'ae', name: 'UAE' },
  { code: 'in', name: 'India' },
  { code: 'mx', name: 'Mexico' },
  { code: 'br', name: 'Brazil' },
  { code: 'sg', name: 'Singapore' },
];

// Each item is ITEM_WIDTH px wide. Duplicate the list for seamless infinite loop.
const ITEM_WIDTH = 120;
const SET_WIDTH = ITEM_WIDTH * COUNTRIES.length; // 1680px

// Duplicate for seamless loop
const FLAGS_DOUBLED = [...COUNTRIES, ...COUNTRIES];

// Scroll duration: SET_WIDTH / speed (px per second)
const SCROLL_DURATION = SET_WIDTH / 50; // ~33.6s

export default function FlagStripSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#0D1526',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        borderBottom: '1px solid rgba(201,168,76,0.3)',
        padding: '16px 0',
      }}
    >
      {/* Left fade mask */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '80px',
          zIndex: 10,
          background: 'linear-gradient(to right, #0D1526 0%, transparent 100%)',
        }}
      />
      {/* Right fade mask */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: '80px',
          zIndex: 10,
          background: 'linear-gradient(to left, #0D1526 0%, transparent 100%)',
        }}
      />

      {/* Scrolling track */}
      <div
        className="flag-strip-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          willChange: 'transform',
        }}
      >
        {FLAGS_DOUBLED.map((country, index) => {
          const itemIndex = index % COUNTRIES.length;
          const flutterDelay = itemIndex * 0.18;

          return (
            <div
              key={index}
              style={{
                width: `${ITEM_WIDTH}px`,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              {/* Flag image from flagcdn.com — no emoji rendering issues */}
              <span
                className="flag-flutter"
                style={{
                  display: 'block',
                  animationDelay: `${flutterDelay}s`,
                  filter: 'drop-shadow(0 2px 8px rgba(201,168,76,0.35))',
                  lineHeight: 1,
                }}
              >
                <img
                  src={`https://flagcdn.com/48x36/${country.code}.png`}
                  srcSet={`https://flagcdn.com/96x72/${country.code}.png 2x`}
                  width={48}
                  height={36}
                  alt={country.name}
                  loading="lazy"
                  style={{
                    display: 'block',
                    borderRadius: '3px',
                    objectFit: 'cover',
                  }}
                />
              </span>

              {/* Country name — hard-coded plain string literal, explicit font stack */}
              <span
                style={{
                  fontSize: '0.6rem',
                  fontFamily: '"Inter", "Helvetica Neue", Arial, Helvetica, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.85)',
                  whiteSpace: 'nowrap',
                  display: 'block',
                  lineHeight: 1.2,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {country.name}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        .flag-strip-track {
          animation: flagStripScroll ${SCROLL_DURATION}s linear infinite;
        }

        @keyframes flagStripScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${SET_WIDTH}px); }
        }

        .flag-flutter {
          animation: flagWave 2.6s ease-in-out infinite;
        }

        @keyframes flagWave {
          0%   { transform: translateY(0px); }
          15%  { transform: translateY(-4px); }
          30%  { transform: translateY(-1px); }
          50%  { transform: translateY(-5px); }
          70%  { transform: translateY(-2px); }
          85%  { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }

        section:hover .flag-strip-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
