import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const credentials = [
  '12+ years ecommerce experience',
  'India + international market exposure',
  'Amazon USA & UK specialist',
  'Data-driven scaling strategy approach',
  'Direct expert support — no outsourcing',
];

export default function AboutSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="px-6"
      style={{
        backgroundColor: '#0A0F1E',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
            >
              The Founder
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
            Meet The{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Founder</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Photo */}
          <div
            ref={leftRef}
            className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start reveal-left"
          >
            <div
              className="relative"
              style={{
                width: '280px',
                border: '1px solid rgba(201, 168, 76, 0.3)',
                borderRadius: '2px',
                padding: '6px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(201,168,76,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <img
                src="/assets/generated/mayur-sahu-headshot-new.dim_400x500.png"
                alt="Mayur Sahu — Amazon Growth Consultant"
                className="w-full object-cover"
                style={{
                  display: 'block',
                  borderRadius: '1px',
                }}
              />
              {/* Gold corner accents */}
              {[
                { top: 0, left: 0, borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' },
                { top: 0, right: 0, borderTop: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' },
                { bottom: 0, left: 0, borderBottom: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' },
                { bottom: 0, right: 0, borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' },
              ].map((style, i) => (
                <div
                  key={i}
                  className="absolute w-5 h-5"
                  style={style}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div ref={rightRef} className="flex-1 reveal-right">
            <h3
              className="font-heading font-semibold mb-2"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FFFFFF', lineHeight: 1.2 }}
            >
              Mayur Sahu
            </h3>
            <p
              className="font-body text-sm tracking-widest uppercase mb-6"
              style={{ color: '#C9A84C', letterSpacing: '0.15em' }}
            >
              Amazon Growth Consultant
            </p>

            <p
              className="font-body font-light leading-relaxed mb-6"
              style={{ fontSize: '1rem', color: '#A0A8B8', lineHeight: 1.8 }}
            >
              With over 12 years in ecommerce, I've helped Amazon sellers across the USA and UK scale their businesses profitably. My approach is direct, data-driven, and focused on long-term results — not vanity metrics.
            </p>

            <p
              className="font-body font-light leading-relaxed mb-8"
              style={{ fontSize: '1rem', color: '#A0A8B8', lineHeight: 1.8 }}
            >
              India-based Amazon Growth Consultant working with USA &amp; UK brands globally. I work with a limited number of clients to ensure every brand receives the strategic attention it deserves.
            </p>

            {/* Credentials */}
            <ul className="flex flex-col gap-3">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: '#C9A84C', flexShrink: 0 }} />
                  <span
                    className="font-body text-sm font-light"
                    style={{ color: '#A0A8B8' }}
                  >
                    {cred}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
