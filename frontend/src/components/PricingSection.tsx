import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    badge: null,
    features: [
      'PPC management (1 campaign)',
      'Monthly performance report',
      'Listing audit & recommendations',
      'Email support',
      '1 strategy call/month',
    ],
    cta: 'Get Started',
    elevated: false,
  },
  {
    name: 'Growth',
    price: '$999',
    period: '/month',
    badge: 'Most Popular',
    features: [
      'Full PPC management',
      'Listing optimization',
      'Weekly performance reports',
      'Priority email & chat support',
      '2 strategy calls/month',
      'Competitor analysis',
    ],
    cta: 'Start Growing',
    elevated: true,
  },
  {
    name: 'Elite',
    price: '$1,999',
    period: '/month',
    badge: null,
    features: [
      'Full account management',
      'Brand development strategy',
      'A+ content direction',
      'Daily monitoring & reporting',
      'Unlimited strategy calls',
      'Emergency support included',
    ],
    cta: 'Go Elite',
    elevated: false,
  },
];

export default function PricingSection() {
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
      id="pricing"
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
              Investment
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
            Transparent Pricing.{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Premium Value.</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="reveal relative flex flex-col p-8"
              style={{
                background: plan.elevated
                  ? 'rgba(201, 168, 76, 0.06)'
                  : 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: plan.elevated
                  ? '1px solid rgba(201, 168, 76, 0.5)'
                  : '1px solid rgba(201, 168, 76, 0.15)',
                borderRadius: '4px',
                boxShadow: plan.elevated
                  ? '0 0 60px rgba(201, 168, 76, 0.18)'
                  : 'none',
                transform: plan.elevated ? 'scale(1.03)' : 'scale(1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = plan.elevated
                  ? '0 0 80px rgba(201, 168, 76, 0.3)'
                  : '0 0 40px rgba(201, 168, 76, 0.12)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201, 168, 76, 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = plan.elevated
                  ? '0 0 60px rgba(201, 168, 76, 0.18)'
                  : 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = plan.elevated
                  ? 'rgba(201, 168, 76, 0.5)'
                  : 'rgba(201, 168, 76, 0.15)';
              }}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
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
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <p
                className="font-body text-xs tracking-widest uppercase mb-4"
                style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span
                  className="font-heading font-semibold"
                  style={{ fontSize: '3rem', color: '#FFFFFF', lineHeight: 1 }}
                >
                  {plan.price}
                </span>
                <span
                  className="font-body font-light mb-1"
                  style={{ fontSize: '1rem', color: '#A0A8B8' }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px mb-6" style={{ backgroundColor: 'rgba(201, 168, 76, 0.2)' }} />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                    <span
                      className="font-body text-sm font-light leading-relaxed"
                      style={{ color: '#A0A8B8' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => scrollToSection('strategy-call')}
                className="w-full font-body font-medium py-3.5 text-center transition-all duration-300 btn-shimmer"
                style={{
                  backgroundColor: plan.elevated ? '#C9A84C' : 'transparent',
                  color: plan.elevated ? '#0A0F1E' : '#C9A84C',
                  fontSize: '0.9rem',
                  letterSpacing: '0.06em',
                  borderRadius: '2px',
                  border: '1px solid #C9A84C',
                  textDecoration: 'none',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C9A84C';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0A0F1E';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(201, 168, 76, 0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = plan.elevated ? '#C9A84C' : 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = plan.elevated ? '#0A0F1E' : '#C9A84C';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Scarcity & Custom Note */}
        <div className="text-center mt-12 flex flex-col gap-3">
          <p
            className="font-body text-sm font-light"
            style={{ color: '#A0A8B8' }}
          >
            Custom plans available for{' '}
            <span style={{ color: '#C9A84C' }}>7-figure brands</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span
              className="font-body text-xs tracking-wide flex items-center gap-2"
              style={{ color: 'rgba(160, 168, 184, 0.7)' }}
            >
              <span style={{ color: '#C9A84C' }}>⏱</span> Minimum 3-month commitment
            </span>
            <span
              className="font-body text-xs tracking-wide flex items-center gap-2"
              style={{ color: 'rgba(160, 168, 184, 0.7)' }}
            >
              <span style={{ color: '#C9A84C' }}>🔒</span> Limited onboarding slots available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
