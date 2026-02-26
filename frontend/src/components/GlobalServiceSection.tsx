import { useEffect, useRef } from 'react';

// Hard-coded plain string literals — no Unicode abbreviations or character codes
const countries: { code: string; name: string; desc: string }[] = [
  { code: 'us', name: 'United States', desc: 'Amazon.com — Primary Market' },
  { code: 'gb', name: 'United Kingdom', desc: 'Amazon.co.uk — Key Market' },
  { code: 'ca', name: 'Canada', desc: 'Amazon.ca — Growing Market' },
  { code: 'au', name: 'Australia', desc: 'Amazon.com.au — Emerging Market' },
];

export default function GlobalServiceSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.style.transitionDelay = `${i * 120}ms`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="global-service"
      className="px-6"
      style={{
        backgroundColor: '#0D1526',
        paddingTop: '100px',
        paddingBottom: '100px',
        borderTop: '1px solid rgba(201, 168, 76, 0.1)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
            <span
              style={{
                fontFamily: '"Inter", "Helvetica Neue", Arial, Helvetica, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                fontWeight: 700,
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Global Reach
            </span>
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
          </div>
          <h2
            className="font-heading font-semibold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#FFFFFF',
              lineHeight: 1.15,
            }}
          >
            Serving Amazon Sellers{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Globally</span>
          </h2>
          <p
            className="font-body font-light mt-4 max-w-xl mx-auto"
            style={{ color: '#A0A8B8', fontSize: '1rem', lineHeight: 1.7 }}
          >
            India-based expertise delivering world-class Amazon consulting across four major markets.
          </p>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {countries.map((country, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="reveal flex flex-col items-center text-center p-8"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderTop: '4px solid rgba(201,168,76,0.5)',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px) scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.borderTopColor = '#C9A84C';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(201,168,76,0.18)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
                (e.currentTarget as HTMLDivElement).style.borderTopColor = 'rgba(201,168,76,0.5)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {/* Flag image from flagcdn.com — no emoji rendering issues */}
              <span
                style={{
                  display: 'block',
                  marginBottom: '1rem',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 3px 10px rgba(201,168,76,0.3))',
                }}
              >
                <img
                  src={`https://flagcdn.com/64x48/${country.code}.png`}
                  srcSet={`https://flagcdn.com/128x96/${country.code}.png 2x`}
                  width={64}
                  height={48}
                  alt={country.name}
                  loading="lazy"
                  style={{
                    display: 'block',
                    borderRadius: '4px',
                    objectFit: 'cover',
                    margin: '0 auto',
                  }}
                />
              </span>

              {/* Country name — hard-coded plain string literal, explicit font stack */}
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", "Georgia", "Times New Roman", serif',
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  marginBottom: '0.5rem',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {country.name}
              </h3>

              {/* Description — hard-coded plain string literal, explicit font stack */}
              <p
                style={{
                  fontFamily: '"Inter", "Helvetica Neue", Arial, Helvetica, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#A0A8B8',
                  lineHeight: 1.5,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {country.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
