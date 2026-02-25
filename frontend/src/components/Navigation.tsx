import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Case Studies', id: 'case-studies' },
  { label: 'Testimonials', id: 'testimonials' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 15, 30, 0.97)' : 'rgba(10, 15, 30, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span
            className="font-heading font-semibold tracking-wide"
            style={{ color: '#C9A84C', fontSize: '1.2rem', lineHeight: 1.2 }}
          >
            ProSellers
          </span>
          <span
            className="font-body text-xs tracking-widest uppercase"
            style={{ color: '#A0A8B8', letterSpacing: '0.12em' }}
          >
            Amazon Growth Consultant
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-body text-sm tracking-wide transition-colors duration-200"
              style={{ color: '#A0A8B8' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A0A8B8')}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('strategy-call')}
            className="font-body text-sm font-medium px-5 py-2 transition-all duration-200 btn-shimmer"
            style={{
              backgroundColor: '#C9A84C',
              color: '#0A0F1E',
              border: '1px solid #C9A84C',
              borderRadius: '2px',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#C9A84C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A84C';
              e.currentTarget.style.color = '#0A0F1E';
            }}
          >
            Book Call
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: '#C9A84C',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: '#C9A84C',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: '#C9A84C',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(201, 168, 76, 0.15)' }}
        >
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-body text-sm text-left py-1"
              style={{ color: '#A0A8B8' }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('strategy-call')}
            className="font-body text-sm font-medium px-5 py-2.5 text-center mt-2 btn-shimmer"
            style={{
              backgroundColor: '#C9A84C',
              color: '#0A0F1E',
              borderRadius: '2px',
              letterSpacing: '0.05em',
            }}
          >
            Book Free Strategy Call
          </button>
        </div>
      )}
    </header>
  );
}
