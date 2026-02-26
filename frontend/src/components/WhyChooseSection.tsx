import { useEffect, useRef } from 'react';
import { UserCheck, DollarSign, Users, TrendingUp, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Direct Expert Access',
    desc: 'Work directly with Mayur — no junior managers, no account handoffs.',
  },
  {
    icon: DollarSign,
    title: 'Save Up To 60%',
    desc: 'Premium expertise at a fraction of US agency rates. Same results, smarter investment.',
  },
  {
    icon: Users,
    title: 'Limited Slots = Full Focus',
    desc: 'We cap our client roster so every brand gets 100% dedicated attention.',
  },
  {
    icon: TrendingUp,
    title: 'Performance-Driven',
    desc: 'Every decision is backed by data. Full transparency on metrics and results.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partner',
    desc: 'We build lasting relationships focused on sustainable, compounding growth.',
  },
];

export default function WhyChooseSection() {
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
      id="why-choose"
      className="px-6"
      style={{
        backgroundColor: '#0D1526',
        paddingTop: '100px',
        paddingBottom: '100px',
        borderTop: '1px solid rgba(201, 168, 76, 0.1)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
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
              Why Choose Us
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
            The Difference Is{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Clear</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="glass-card reveal flex flex-col p-6"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 flex items-center justify-center mb-4 flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(201, 168, 76, 0.1)',
                    border: '1px solid rgba(201, 168, 76, 0.25)',
                    borderRadius: '4px',
                  }}
                >
                  <Icon size={22} style={{ color: '#C9A84C' }} />
                </div>

                <h3
                  className="font-heading font-semibold mb-2"
                  style={{ fontSize: '1.05rem', color: '#FFFFFF', lineHeight: 1.3 }}
                >
                  {reason.title}
                </h3>
                <p
                  className="font-body text-sm font-light leading-relaxed"
                  style={{ color: '#A0A8B8' }}
                >
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
