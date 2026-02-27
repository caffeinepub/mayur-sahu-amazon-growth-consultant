export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'prosellers-consultant');

  return (
    <footer
      className="px-6 py-14"
      style={{
        backgroundColor: '#060B17',
        borderTop: '1px solid rgba(201, 168, 76, 0.15)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
        {/* Gold divider */}
        <div
          className="h-px w-20 mb-2"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
        />

        {/* Brand */}
        <p
          className="font-heading font-light text-center"
          style={{ color: '#A0A8B8', fontSize: '1.25rem', letterSpacing: '0.05em' }}
        >
          ProSellers — Amazon Growth Consultant
        </p>

        {/* Global serving line */}
        <p
          className="font-body text-center"
          style={{ color: 'rgba(160, 168, 184, 0.8)', fontSize: '1.05rem' }}
        >
          Serving clients globally — USA 🇺🇸 | UK 🇬🇧 | Canada 🇨🇦 | Australia 🇦🇺
        </p>

        {/* Timezone line */}
        <p
          className="font-body text-center"
          style={{ color: 'rgba(160, 168, 184, 0.75)', fontSize: '1rem' }}
        >
          Operating globally across US &amp; UK time zones
        </p>

        {/* Positioning line */}
        <p
          className="font-body text-center max-w-lg"
          style={{ color: 'rgba(160, 168, 184, 0.7)', fontSize: '0.95rem' }}
        >
          India-based Amazon Growth Consultant working with USA &amp; UK brands globally.
        </p>

        {/* Divider */}
        <div
          className="h-px w-24 my-1"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
        />

        {/* Copyright */}
        <p
          className="font-body text-center"
          style={{ color: 'rgba(160, 168, 184, 0.65)', fontSize: '0.9rem' }}
        >
          © {year} ProSellers. All rights reserved.
        </p>

        {/* Attribution */}
        <p
          className="font-body text-center"
          style={{ color: 'rgba(160, 168, 184, 0.55)', fontSize: '0.85rem' }}
        >
          Built with{' '}
          <span style={{ color: '#C9A84C' }}>♥</span>{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(160, 168, 184, 0.7)', textDecoration: 'underline' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(160, 168, 184, 0.7)')}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
