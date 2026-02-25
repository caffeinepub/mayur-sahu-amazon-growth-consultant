export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'prosellers-consultant');

  return (
    <footer
      className="px-6 py-10"
      style={{
        backgroundColor: '#060B17',
        borderTop: '1px solid rgba(201, 168, 76, 0.15)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Gold divider */}
        <div
          className="h-px w-16 mb-2"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
        />

        {/* Brand */}
        <p
          className="font-heading font-light text-center"
          style={{ color: '#A0A8B8', fontSize: '0.9rem', letterSpacing: '0.05em' }}
        >
          ProSellers — Amazon Growth Consultant
        </p>

        {/* Copyright */}
        <p
          className="font-body text-xs text-center"
          style={{ color: 'rgba(160, 168, 184, 0.5)' }}
        >
          © {year} ProSellers. All rights reserved.
        </p>

        {/* Attribution */}
        <p
          className="font-body text-xs text-center"
          style={{ color: 'rgba(160, 168, 184, 0.4)' }}
        >
          Built with{' '}
          <span style={{ color: '#C9A84C' }}>♥</span>{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(160, 168, 184, 0.6)', textDecoration: 'underline' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(160, 168, 184, 0.6)')}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
