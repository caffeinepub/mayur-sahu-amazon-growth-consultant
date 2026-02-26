import { useEffect, useRef } from 'react';
import { Search, TrendingDown, Target, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Deep Account Audit',
    desc: 'We begin with a comprehensive analysis of your Amazon account — advertising efficiency, conversion metrics, listing performance, and competitive positioning to identify every growth opportunity.',
  },
  {
    number: '02',
    icon: TrendingDown,
    title: 'Profit Gap Analysis',
    desc: 'We identify exactly where your profits are leaking — keyword waste, poor conversion, pricing misalignment, and inefficient ad spend — and quantify the revenue you\'re leaving on the table.',
  },
  {
    number: '03',
    icon: Target,
    title: 'Strategic Scaling Plan',
    desc: 'We build a custom growth roadmap focused on profit improvement, scalable advertising, and long-term brand value — not short-term sales spikes that erode margins.',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Ongoing Optimization & Monitoring',
    desc: 'Continuous improvement through weekly performance reviews, campaign refinements, listing updates, and proactive strategy adjustments to sustain and compound your growth.',
  },
];

export default function HowWeWorkSection() {
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
        card.style.transitionDelay = `${i * 130}ms`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-we-work"
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
              Our Process
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
            Our 4-Step{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Growth Framework</span>
          </h2>
          <p
            className="font-body font-light mt-4 max-w-xl mx-auto"
            style={{ color: '#A0A8B8', fontSize: '1rem', lineHeight: 1.7 }}
          >
            A structured, proven approach to scaling Amazon businesses profitably and sustainably.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden xl:block absolute top-10 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(201,168,76,0.25) 20%, rgba(201,168,76,0.25) 80%, transparent 95%)',
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="glass-card reveal flex flex-col p-7 relative"
                style={{ zIndex: 1 }}
              >
                {/* Step number circle */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-full"
                    style={{
                      backgroundColor: 'rgba(201,168,76,0.12)',
                      border: '2px solid rgba(201,168,76,0.5)',
                      boxShadow: '0 0 20px rgba(201,168,76,0.15)',
                    }}
                  >
                    <span
                      className="font-heading font-semibold"
                      style={{ color: '#C9A84C', fontSize: '1.1rem' }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0 rounded"
                    style={{
                      backgroundColor: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                  >
                    <Icon size={18} style={{ color: '#C9A84C' }} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-heading font-semibold mb-3"
                  style={{ fontSize: '1.2rem', color: '#FFFFFF', lineHeight: 1.3 }}
                >
                  {step.title}
                </h3>

                {/* Gold divider */}
                <div className="h-px mb-4" style={{ backgroundColor: 'rgba(201,168,76,0.2)' }} />

                {/* Description */}
                <p
                  className="font-body text-sm font-light leading-relaxed"
                  style={{ color: '#A0A8B8', lineHeight: 1.75 }}
                >
                  {step.desc}
                </p>

                {/* Step number watermark */}
                <div
                  className="absolute bottom-4 right-5 font-heading font-light pointer-events-none select-none"
                  style={{ fontSize: '4rem', color: 'rgba(201,168,76,0.06)', lineHeight: 1 }}
                >
                  {step.number}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
