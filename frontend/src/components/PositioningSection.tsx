const bullets = [
  'Doing $5k–$100k/month',
  'Private label brands',
  'USA & UK sellers',
  'Ready to scale seriously',
];

export default function PositioningSection() {
  return (
    <section
      id="positioning"
      className="px-6"
      style={{
        backgroundColor: '#0D1526',
        paddingTop: '100px',
        paddingBottom: '100px',
        borderTop: '1px solid rgba(201, 168, 76, 0.1)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="font-body text-xs tracking-widest uppercase"
            style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
          >
            Who This Is For
          </span>
          <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        {/* Headline */}
        <h2
          className="font-heading font-semibold mb-6"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: '#FFFFFF',
            lineHeight: 1.15,
          }}
        >
          This Is For{' '}
          <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Serious Sellers</span> Only
        </h2>

        {/* Supporting text */}
        <p
          className="font-body font-light leading-relaxed mb-14"
          style={{
            fontSize: '1.1rem',
            color: '#A0A8B8',
            lineHeight: 1.7,
          }}
        >
          We work with a limited number of Amazon sellers who are ready to scale and optimize profit.
        </p>

        {/* Bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-center gap-4 px-6 py-4"
              style={{
                backgroundColor: 'rgba(201, 168, 76, 0.05)',
                border: '1px solid rgba(201, 168, 76, 0.15)',
                borderRadius: '2px',
              }}
            >
              <span
                className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                style={{ color: '#C9A84C' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8L6 12L14 4"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className="font-body text-sm font-medium"
                style={{ color: '#FFFFFF', letterSpacing: '0.02em' }}
              >
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
