import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James R.',
    flag: '🇺🇸',
    country: 'USA',
    review:
      'Mayur helped us cut ACOS from 52% to 21% in just 60 days. His data-driven approach completely transformed our PPC performance. Highly recommend for any serious Amazon seller.',
  },
  {
    name: 'Sarah M.',
    flag: '🇬🇧',
    country: 'UK',
    review:
      'We were stuck at £15k/month for over a year. Within 4 months of working with Mayur, we crossed £40k. The listing optimization and launch strategy made all the difference.',
  },
  {
    name: 'David K.',
    flag: '🇺🇸',
    country: 'USA',
    review:
      'After our account got suspended, Mayur handled the reinstatement process professionally and had us back live within 10 days. Saved our business. Absolute expert.',
  },
  {
    name: 'Priya T.',
    flag: '🇬🇧',
    country: 'UK',
    review:
      'The A+ content and storefront redesign Mayur directed for us increased our conversion rate by over 2x. Our brand looks premium now and customers trust us more.',
  },
  {
    name: 'Michael B.',
    flag: '🇺🇸',
    country: 'USA',
    review:
      'Unlike big agencies where you talk to a junior manager, Mayur is directly involved every step of the way. The ROI speaks for itself — 3x revenue in 6 months.',
  },
];

export default function TestimonialsSection() {
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
      id="testimonials"
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
              Client Success Stories
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
            What Our{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="glass-card reveal flex flex-col p-7"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#C9A84C"
                    style={{ color: '#C9A84C' }}
                  />
                ))}
              </div>

              {/* Review */}
              <p
                className="font-body text-sm font-light leading-relaxed flex-1 mb-6"
                style={{ color: '#A0A8B8', lineHeight: 1.75 }}
              >
                "{t.review}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(201, 168, 76, 0.1)',
                    border: '1px solid rgba(201, 168, 76, 0.25)',
                    borderRadius: '50%',
                    fontSize: '1rem',
                  }}
                >
                  {t.flag}
                </div>
                <div>
                  <p
                    className="font-heading font-semibold"
                    style={{ fontSize: '1rem', color: '#FFFFFF', lineHeight: 1.2 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-body text-xs"
                    style={{ color: '#A0A8B8' }}
                  >
                    Amazon Seller · {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="font-body text-xs text-center mt-8"
          style={{ color: 'rgba(160, 168, 184, 0.4)' }}
        >
          * Sample testimonials for illustration purposes.
        </p>
      </div>
    </section>
  );
}
