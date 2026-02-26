import { useState, useEffect, useRef } from 'react';
import { Download, Mail, CheckCircle } from 'lucide-react';

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="lead-magnet"
      className="px-6"
      style={{
        backgroundColor: '#0A0F1E',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div
          ref={sectionRef}
          className="reveal flex flex-col items-center text-center p-10 md:p-14"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderLeft: '4px solid #C9A84C',
            borderRadius: '4px',
            boxShadow: '0 0 60px rgba(201,168,76,0.08)',
          }}
        >
          {/* Icon */}
          <div
            className="w-16 h-16 flex items-center justify-center mb-6 rounded-full"
            style={{
              backgroundColor: 'rgba(201,168,76,0.12)',
              border: '2px solid rgba(201,168,76,0.4)',
              boxShadow: '0 0 30px rgba(201,168,76,0.2)',
            }}
          >
            <Download size={28} style={{ color: '#C9A84C' }} />
          </div>

          {/* Badge */}
          <div
            className="px-4 py-1 mb-5 font-body text-xs font-medium tracking-widest uppercase"
            style={{
              backgroundColor: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '2px',
              color: '#C9A84C',
              letterSpacing: '0.15em',
            }}
          >
            Free Download
          </div>

          {/* Heading */}
          <h2
            className="font-heading font-semibold mb-4"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              color: '#FFFFFF',
              lineHeight: 1.2,
            }}
          >
            7 Profit Killers in{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Amazon PPC</span>
          </h2>

          {/* Description */}
          <p
            className="font-body font-light mb-8 max-w-md"
            style={{ color: '#A0A8B8', fontSize: '1rem', lineHeight: 1.75 }}
          >
            Discover the 7 most common mistakes that drain Amazon PPC budgets — and how to fix them. Download your free guide now.
          </p>

          {/* Form or Success */}
          {submitted ? (
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: 'rgba(201,168,76,0.12)',
                  border: '2px solid rgba(201,168,76,0.5)',
                }}
              >
                <CheckCircle size={28} style={{ color: '#C9A84C' }} />
              </div>
              <p
                className="font-heading font-semibold"
                style={{ fontSize: '1.3rem', color: '#C9A84C' }}
              >
                You're In!
              </p>
              <p
                className="font-body text-sm font-light"
                style={{ color: '#A0A8B8' }}
              >
                Thank you! Check your email for the download link.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: 'rgba(201,168,76,0.5)' }}
                />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full font-body text-sm pl-9 pr-4 py-3.5 outline-none transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    borderRadius: '2px',
                    color: '#FFFFFF',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)')}
                />
              </div>
              <button
                type="submit"
                className="btn-shimmer font-body font-medium px-7 py-3.5 flex items-center justify-center gap-2 transition-all duration-300 flex-shrink-0"
                style={{
                  backgroundColor: '#C9A84C',
                  color: '#0A0F1E',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  borderRadius: '2px',
                  border: '1px solid #C9A84C',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#C9A84C';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(201,168,76,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A84C';
                  e.currentTarget.style.color = '#0A0F1E';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Download size={16} />
                Get Free PDF
              </button>
            </form>
          )}

          {/* Privacy note */}
          {!submitted && (
            <p
              className="font-body text-xs mt-4"
              style={{ color: 'rgba(160,168,184,0.5)' }}
            >
              No spam. Unsubscribe anytime.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
