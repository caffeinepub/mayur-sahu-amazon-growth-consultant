import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Calendar, Mail, User, Globe, Download, CheckCircle } from 'lucide-react';

export default function StrategyCallSection() {
  const [formData, setFormData] = useState({ name: '', email: '', storeUrl: '' });
  const [submitted, setSubmitted] = useState(false);

  const [pdfEmail, setPdfEmail] = useState('');
  const [pdfSubmitted, setPdfSubmitted] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);

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
    if (boxesRef.current) observer.observe(boxesRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handlePdfSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPdfSubmitted(true);
  };

  return (
    <section
      id="strategy-call"
      className="px-6 relative"
      style={{
        background: 'linear-gradient(135deg, #0D1526 0%, #111827 50%, #0D1526 100%)',
        paddingTop: '110px',
        paddingBottom: '110px',
        borderTop: '2px solid rgba(201, 168, 76, 0.3)',
      }}
    >
      {/* Gold accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A84C 50%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A84C 50%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
            >
              Free Strategy Call
            </span>
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
          </div>

          <h2
            className="font-heading font-semibold mb-6"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Book Your Free 30-Minute{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Amazon Growth</span>{' '}
            Strategy Call
          </h2>

          <p
            className="font-body font-light leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: '1.1rem', color: '#A0A8B8', lineHeight: 1.7 }}
          >
            Get a full account audit, growth roadmap, and profit improvement insights — at zero cost.
          </p>
        </div>

        {/* Three-column row */}
        <div ref={boxesRef} className="flex flex-col lg:flex-row gap-6 reveal">

          {/* ── Box 1: Schedule Your Call ── */}
          <div
            className="flex flex-col flex-1"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderTop: '3px solid #C9A84C',
              borderRadius: '4px',
              boxShadow: '0 0 40px rgba(201,168,76,0.07)',
              padding: '32px 28px',
            }}
          >
            {/* Box header */}
            <div className="flex items-center gap-2 mb-6">
              <Calendar size={20} style={{ color: '#C9A84C' }} />
              <h3
                className="font-heading font-semibold"
                style={{ fontSize: '1.2rem', color: '#FFFFFF' }}
              >
                Schedule Your Call
              </h3>
            </div>

            {/* Calendly placeholder */}
            <div
              className="flex flex-col items-center justify-center flex-1 mb-6"
              style={{
                minHeight: '200px',
                border: '1px dashed rgba(201, 168, 76, 0.35)',
                borderRadius: '4px',
                backgroundColor: 'rgba(201, 168, 76, 0.03)',
                padding: '32px 20px',
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-4 rounded-full"
                style={{
                  backgroundColor: 'rgba(201, 168, 76, 0.1)',
                  border: '1px solid rgba(201, 168, 76, 0.3)',
                }}
              >
                <Calendar size={22} style={{ color: '#C9A84C' }} />
              </div>
              <p
                className="font-body text-sm font-light text-center"
                style={{ color: '#A0A8B8' }}
              >
                Calendly scheduling widget will appear here
              </p>
            </div>

            {/* Schedule Call Now CTA */}
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer font-body font-medium px-6 py-3.5 text-center transition-all duration-300 mb-3"
              style={{
                backgroundColor: '#C9A84C',
                color: '#0A0F1E',
                fontSize: '0.9rem',
                letterSpacing: '0.06em',
                borderRadius: '2px',
                border: '1px solid #C9A84C',
                boxShadow: '0 0 30px rgba(201, 168, 76, 0.2)',
                textDecoration: 'none',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C9A84C';
                (e.currentTarget as HTMLAnchorElement).style.color = '#0A0F1E';
              }}
            >
              Schedule Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918766936874"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-3.5 font-body font-medium transition-all duration-300"
              style={{
                backgroundColor: '#16a34a',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                borderRadius: '4px',
                border: '1px solid #16a34a',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#15803d';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(22, 163, 74, 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#16a34a';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
              }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* ── Box 2: Send a Message ── */}
          <div
            className="flex flex-col flex-1"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderTop: '3px solid #C9A84C',
              borderRadius: '4px',
              boxShadow: '0 0 40px rgba(201,168,76,0.07)',
              padding: '32px 28px',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Mail size={20} style={{ color: '#C9A84C' }} />
              <h3
                className="font-heading font-semibold"
                style={{ fontSize: '1.2rem', color: '#FFFFFF' }}
              >
                Send a Message
              </h3>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center flex-1 py-10 text-center">
                <div
                  className="w-14 h-14 flex items-center justify-center mb-4 rounded-full"
                  style={{
                    backgroundColor: 'rgba(201, 168, 76, 0.1)',
                    border: '1px solid rgba(201, 168, 76, 0.3)',
                  }}
                >
                  <CheckCircle size={26} style={{ color: '#C9A84C' }} />
                </div>
                <p
                  className="font-heading font-semibold mb-2"
                  style={{ fontSize: '1.2rem', color: '#C9A84C' }}
                >
                  Message Sent!
                </p>
                <p
                  className="font-body text-sm font-light"
                  style={{ color: '#A0A8B8' }}
                >
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs tracking-wide uppercase"
                    style={{ color: '#A0A8B8', letterSpacing: '0.1em' }}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ color: 'rgba(201,168,76,0.5)' }}
                    />
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full font-body text-sm pl-9 pr-4 py-3 outline-none transition-all duration-200"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        borderRadius: '2px',
                        color: '#FFFFFF',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs tracking-wide uppercase"
                    style={{ color: '#A0A8B8', letterSpacing: '0.1em' }}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ color: 'rgba(201,168,76,0.5)' }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full font-body text-sm pl-9 pr-4 py-3 outline-none transition-all duration-200"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        borderRadius: '2px',
                        color: '#FFFFFF',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
                    />
                  </div>
                </div>

                {/* Store URL */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs tracking-wide uppercase"
                    style={{ color: '#A0A8B8', letterSpacing: '0.1em' }}
                  >
                    Amazon Store URL
                  </label>
                  <div className="relative">
                    <Globe
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ color: 'rgba(201,168,76,0.5)' }}
                    />
                    <input
                      type="url"
                      placeholder="https://amazon.com/your-store"
                      value={formData.storeUrl}
                      onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                      className="w-full font-body text-sm pl-9 pr-4 py-3 outline-none transition-all duration-200"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        borderRadius: '2px',
                        color: '#FFFFFF',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-body font-medium py-3.5 mt-auto btn-shimmer transition-all duration-300"
                  style={{
                    backgroundColor: '#C9A84C',
                    color: '#0A0F1E',
                    fontSize: '0.9rem',
                    letterSpacing: '0.06em',
                    borderRadius: '2px',
                    border: '1px solid #C9A84C',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#C9A84C';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(201,168,76,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#C9A84C';
                    e.currentTarget.style.color = '#0A0F1E';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── Box 3: 7 Profit Killers ── */}
          <div
            className="flex flex-col flex-1"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderTop: '3px solid #C9A84C',
              borderRadius: '4px',
              boxShadow: '0 0 40px rgba(201,168,76,0.07)',
              padding: '32px 28px',
            }}
          >
            {/* Box header */}
            <div className="flex items-center gap-2 mb-6">
              <Download size={20} style={{ color: '#C9A84C' }} />
              <h3
                className="font-heading font-semibold"
                style={{ fontSize: '1.2rem', color: '#FFFFFF' }}
              >
                7 Profit Killers in Amazon PPC
              </h3>
            </div>

            {/* Icon + badge */}
            <div className="flex flex-col items-center text-center mb-6">
              <div
                className="w-14 h-14 flex items-center justify-center mb-4 rounded-full"
                style={{
                  backgroundColor: 'rgba(201,168,76,0.12)',
                  border: '2px solid rgba(201,168,76,0.4)',
                  boxShadow: '0 0 30px rgba(201,168,76,0.2)',
                }}
              >
                <Download size={26} style={{ color: '#C9A84C' }} />
              </div>

              <div
                className="px-4 py-1 mb-4 font-body text-xs font-medium tracking-widest uppercase"
                style={{
                  backgroundColor: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '2px',
                  color: '#C9A84C',
                  letterSpacing: '0.15em',
                }}
              >
                Free Download
              </div>

              <p
                className="font-body font-light"
                style={{ color: '#A0A8B8', fontSize: '0.95rem', lineHeight: 1.75 }}
              >
                Discover the 7 most common mistakes that drain Amazon PPC budgets — and how to fix them. Download your free guide now.
              </p>
            </div>

            {/* Form or Success */}
            <div className="mt-auto">
              {pdfSubmitted ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full"
                    style={{
                      backgroundColor: 'rgba(201,168,76,0.12)',
                      border: '2px solid rgba(201,168,76,0.5)',
                    }}
                  >
                    <CheckCircle size={24} style={{ color: '#C9A84C' }} />
                  </div>
                  <p
                    className="font-heading font-semibold"
                    style={{ fontSize: '1.15rem', color: '#C9A84C' }}
                  >
                    You're In!
                  </p>
                  <p
                    className="font-body text-sm font-light"
                    style={{ color: '#A0A8B8' }}
                  >
                    Thank you! Check your email for the download link.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePdfSubmit} className="flex flex-col gap-3">
                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ color: 'rgba(201,168,76,0.5)' }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={pdfEmail}
                      onChange={(e) => setPdfEmail(e.target.value)}
                      className="w-full font-body text-sm pl-9 pr-4 py-3 outline-none transition-all duration-200"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(201,168,76,0.25)',
                        borderRadius: '2px',
                        color: '#FFFFFF',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-shimmer font-body font-medium py-3.5 flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      backgroundColor: '#C9A84C',
                      color: '#0A0F1E',
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em',
                      borderRadius: '2px',
                      border: '1px solid #C9A84C',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#C9A84C';
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(201,168,76,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#C9A84C';
                      e.currentTarget.style.color = '#0A0F1E';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Download size={16} />
                    Get Free PDF
                  </button>
                  <p
                    className="font-body text-xs text-center"
                    style={{ color: 'rgba(160,168,184,0.5)' }}
                  >
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
