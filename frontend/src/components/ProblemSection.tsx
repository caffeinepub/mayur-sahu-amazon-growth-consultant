import { useEffect, useRef } from 'react';
import { AlertCircle, Ban, TrendingDown, MousePointerClick, Package, BarChart2 } from 'lucide-react';

const problems = [
  { icon: AlertCircle, label: 'High ACOS?', desc: 'Burning ad budget with little return on investment.' },
  { icon: Ban, label: 'Account Suspension?', desc: 'Facing policy violations or unexpected account bans.' },
  { icon: TrendingDown, label: 'No Ranking?', desc: 'Products buried on page 5 with zero organic visibility.' },
  { icon: MousePointerClick, label: 'Poor Conversion?', desc: 'Traffic coming in but shoppers not clicking "Buy Now".' },
  { icon: Package, label: 'FBA Issues?', desc: 'Inventory problems, stranded listings, or FBA fees eating margins.' },
  { icon: BarChart2, label: 'Sales Stuck?', desc: 'Revenue plateaued with no clear path to the next level.' },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const headingEl = sectionRef.current?.querySelector('.section-heading');
    if (headingEl) observer.observe(headingEl);

    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.style.transitionDelay = `${i * 80}ms`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="problem"
      ref={sectionRef}
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
        <div className="text-center mb-16 section-heading reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
            >
              Pain Points
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
            Struggling With{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>These?</span>
          </h2>
          <p
            className="font-body font-light mt-4 max-w-xl mx-auto"
            style={{ color: '#A0A8B8', fontSize: '1rem', lineHeight: 1.7 }}
          >
            You're not alone. These are the exact challenges we solve for Amazon sellers every day.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="glass-card reveal flex items-start gap-4 p-6"
              >
                <div
                  className="flex-shrink-0 w-11 h-11 flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(201, 168, 76, 0.1)',
                    border: '1px solid rgba(201, 168, 76, 0.25)',
                    borderRadius: '4px',
                  }}
                >
                  <Icon size={20} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <h3
                    className="font-heading font-semibold mb-1"
                    style={{ fontSize: '1.15rem', color: '#FFFFFF', lineHeight: 1.3 }}
                  >
                    {problem.label}
                  </h3>
                  <p
                    className="font-body text-sm font-light leading-relaxed"
                    style={{ color: '#A0A8B8' }}
                  >
                    {problem.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
