import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';

const agencyPoints = [
  { text: '$1,500–$3,000/month', negative: true },
  { text: 'Junior account managers', negative: true },
  { text: 'High volume, low attention', negative: true },
  { text: 'Indirect communication', negative: true },
  { text: 'Generic strategies', negative: true },
];

const prosellerPoints = [
  { text: 'From $500/month', positive: true },
  { text: 'Direct expert access', positive: true },
  { text: 'Limited clients, full focus', positive: true },
  { text: 'Personalized strategy', positive: true },
  { text: 'Accountability & transparency', positive: true },
];

export default function ComparisonSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="comparison"
      className="px-6"
      style={{
        backgroundColor: '#0D1526',
        paddingTop: '100px',
        paddingBottom: '100px',
        borderTop: '1px solid rgba(201, 168, 76, 0.1)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
            >
              The Smart Choice
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
            Why Not{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>US Agencies?</span>
          </h2>
          <p
            className="font-body font-light mt-4 max-w-xl mx-auto"
            style={{ color: '#A0A8B8', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Same performance focus. A fraction of the cost. Direct expert support.
          </p>
        </div>

        {/* Comparison Cards */}
        <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* US Agency */}
          <div
            className="flex flex-col p-8"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center rounded"
                style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}
              >
                <X size={20} style={{ color: '#ef4444' }} />
              </div>
              <h3
                className="font-heading font-semibold"
                style={{ fontSize: '1.4rem', color: '#FFFFFF' }}
              >
                US Agency
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {agencyPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full"
                    style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}
                  >
                    <X size={11} style={{ color: '#ef4444' }} />
                  </div>
                  <span
                    className="font-body text-sm font-light"
                    style={{ color: '#A0A8B8' }}
                  >
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ProSellers Global */}
          <div
            className="flex flex-col p-8 relative"
            style={{
              background: 'rgba(201,168,76,0.05)',
              backdropFilter: 'blur(12px)',
              border: '2px solid rgba(201,168,76,0.5)',
              borderRadius: '4px',
              boxShadow: '0 0 50px rgba(201,168,76,0.12)',
            }}
          >
            {/* Best Value badge */}
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 font-body text-xs font-medium tracking-widest uppercase"
              style={{
                backgroundColor: '#C9A84C',
                color: '#0A0F1E',
                borderRadius: '2px',
                letterSpacing: '0.15em',
                whiteSpace: 'nowrap',
              }}
            >
              Best Value
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center rounded"
                style={{ backgroundColor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)' }}
              >
                <Check size={20} style={{ color: '#C9A84C' }} />
              </div>
              <h3
                className="font-heading font-semibold"
                style={{ fontSize: '1.4rem', color: '#C9A84C' }}
              >
                ProSellers Global
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {prosellerPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full"
                    style={{ backgroundColor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)' }}
                  >
                    <Check size={11} style={{ color: '#C9A84C' }} />
                  </div>
                  <span
                    className="font-body text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
                  >
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-10">
          <p
            className="font-heading font-light"
            style={{ fontSize: '1.3rem', color: '#A0A8B8', fontStyle: 'italic' }}
          >
            "Same performance focus.{' '}
            <span style={{ color: '#C9A84C' }}>Direct expert support.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
