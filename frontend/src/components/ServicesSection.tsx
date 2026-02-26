import { useEffect, useRef } from 'react';
import { TrendingUp, Award, ShieldAlert, ShoppingCart } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: TrendingUp,
    title: 'Amazon Growth & Management',
    items: [
      'Full account management',
      'PPC management & ACOS reduction',
      'Listing optimization',
      'FBA setup & management',
    ],
  },
  {
    number: '02',
    icon: Award,
    title: 'Brand Development',
    items: [
      'Brand registry assistance',
      'A+ content strategy',
      'Storefront design direction',
      'Product launch strategy',
    ],
  },
  {
    number: '03',
    icon: ShieldAlert,
    title: 'Emergency Services',
    items: [
      'Account reinstatement',
      'ASIN suppression fix',
      'Listing hijacking support',
    ],
  },
  {
    number: '04',
    icon: ShoppingCart,
    title: 'eBay Management',
    items: [
      'Account setup & optimization',
      'Listing optimization',
      'PPC management',
    ],
  },
];

export default function ServicesSection() {
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
      id="services"
      className="px-6"
      style={{
        backgroundColor: '#0A0F1E',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-12 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
            >
              What We Do
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
            Focused Expertise.{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Measurable Results.</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="glass-card reveal flex flex-col p-7"
              >
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-heading font-light"
                    style={{ fontSize: '3rem', color: 'rgba(201, 168, 76, 0.18)', lineHeight: 1 }}
                  >
                    {service.number}
                  </span>
                  <div
                    className="w-11 h-11 flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(201, 168, 76, 0.1)',
                      border: '1px solid rgba(201, 168, 76, 0.25)',
                      borderRadius: '4px',
                    }}
                  >
                    <Icon size={22} style={{ color: '#C9A84C' }} />
                  </div>
                </div>

                {/* Title — increased font size for clear hierarchy */}
                <h3
                  className="font-heading font-semibold mb-4"
                  style={{ fontSize: 'clamp(1.35rem, 2vw, 1.6rem)', color: '#FFFFFF', lineHeight: 1.25 }}
                >
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="h-px mb-5" style={{ backgroundColor: 'rgba(201, 168, 76, 0.2)' }} />

                {/* Items */}
                <ul className="flex flex-col gap-3 flex-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 flex-shrink-0">
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                          <rect width="7" height="7" fill="#C9A84C" />
                        </svg>
                      </span>
                      <span
                        className="font-body text-sm font-light leading-relaxed"
                        style={{ color: '#A0A8B8' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
