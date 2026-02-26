import { useEffect, useRef } from 'react';
import { Shield, FileText, CreditCard, MessageCircle } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Confidential Data Handling',
    desc: 'All client account data, performance metrics, and business information are handled with strict confidentiality and never shared with third parties.',
  },
  {
    icon: FileText,
    title: 'NDA Available Upon Request',
    desc: 'We are fully open to formal Non-Disclosure Agreements for clients who require additional legal protection for their business data.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payment Methods',
    desc: 'We accept secure international payment methods including PayPal and Wise, ensuring safe and transparent financial transactions.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Expert Communication',
    desc: 'You communicate directly with the consultant responsible for your account — no intermediaries, no junior managers, no handoffs.',
  },
];

export default function TrustSecuritySection() {
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
        card.style.transitionDelay = `${i * 100}ms`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="trust-security"
      className="px-6"
      style={{
        backgroundColor: '#0A0F1E',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
            >
              Your Protection
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
            Trust &amp;{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Security</span>
          </h2>
          <p
            className="font-body font-light mt-4 max-w-xl mx-auto"
            style={{ color: '#A0A8B8', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Your business data and account access are treated with the highest level of care and professionalism.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="reveal flex flex-col p-7"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderLeft: '4px solid rgba(201,168,76,0.6)',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = '#C9A84C';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(201,168,76,0.12)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'rgba(201,168,76,0.6)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center mb-5 rounded"
                  style={{
                    backgroundColor: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                  }}
                >
                  <Icon size={22} style={{ color: '#C9A84C' }} />
                </div>
                <h3
                  className="font-heading font-semibold mb-3"
                  style={{ fontSize: '1.1rem', color: '#FFFFFF', lineHeight: 1.3 }}
                >
                  {point.title}
                </h3>
                <p
                  className="font-body text-sm font-light leading-relaxed"
                  style={{ color: '#A0A8B8', lineHeight: 1.75 }}
                >
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
