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
                src="/assets/generated/mayur-sahu-headshot.dim_400x500.png"
                alt="Mayur Sahu — Amazon Growth Consultant"
                className="w-full object-cover"
                style={{
                  display: 'block',
                  borderRadius: '1px',
                  filter: 'brightness(0.95) contrast(1.05)',
                }}
              />
              {/* Gold corner accents */}
              <div
                className="absolute top-0 left-0 w-8 h-8"
                style={{ borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }}
              />
              <div
                className="absolute top-0 right-0 w-8 h-8"
                style={{ borderTop: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }}
              />
              <div
                className="absolute bottom-0 left-0 w-8 h-8"
                style={{ borderBottom: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8"
                style={{ borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }}
              />
            </div>
          </div>

          {/* Content */}
          <div
            ref={rightRef}
            className="flex-1 text-center md:text-left reveal-right"
          >
            <h3
              className="font-heading font-semibold mb-2"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                color: '#FFFFFF',
                lineHeight: 1.1,
              }}
            >
              Mayur Sahu
            </h3>
            <p
              className="font-body font-light mb-8 tracking-wide"
              style={{
                fontSize: '1rem',
                color: '#C9A84C',
                letterSpacing: '0.08em',
              }}
            >
              Amazon & Ecommerce Growth Consultant
            </p>

            {/* Divider */}
            <div
              className="h-px mb-8 md:w-16 mx-auto md:mx-0"
              style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }}
            />

            {/* Credentials */}
            <ul className="flex flex-col gap-4">
              {credentials.map((cred) => (
                <li
                  key={cred}
                  className="flex items-center md:items-start gap-4 justify-center md:justify-start"
                >
                  <CheckCircle
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#C9A84C' }}
                  />
                  <span
                    className="font-body text-sm font-light leading-relaxed"
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
