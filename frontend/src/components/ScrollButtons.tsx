import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function ScrollButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div
      className="fixed z-40 flex flex-col gap-3"
      style={{ bottom: '2rem', left: '1.5rem' }}
    >
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="scroll-btn-bounce w-11 h-11 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
        style={{
          backgroundColor: '#C9A84C',
          color: '#0A0F1E',
          border: '1px solid rgba(201,168,76,0.6)',
          boxShadow: '0 0 20px rgba(201,168,76,0.35)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#e0bc5a';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(201,168,76,0.6)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C9A84C';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(201,168,76,0.35)';
        }}
      >
        <ChevronUp size={20} strokeWidth={2.5} />
      </button>

      {/* Scroll to Bottom */}
      <button
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        className="scroll-btn-bounce w-11 h-11 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
        style={{
          backgroundColor: 'rgba(201,168,76,0.15)',
          color: '#C9A84C',
          border: '1px solid rgba(201,168,76,0.4)',
          boxShadow: '0 0 15px rgba(201,168,76,0.15)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C9A84C';
          (e.currentTarget as HTMLButtonElement).style.color = '#0A0F1E';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(201,168,76,0.5)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(201,168,76,0.15)';
          (e.currentTarget as HTMLButtonElement).style.color = '#C9A84C';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 15px rgba(201,168,76,0.15)';
        }}
      >
        <ChevronDown size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}
