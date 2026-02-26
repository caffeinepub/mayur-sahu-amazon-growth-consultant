import { useState, useEffect } from 'react';
import { Phone, Mail, CalendarCheck } from 'lucide-react';

export default function FloatingSideStrip() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed z-40 flex flex-row items-center overflow-hidden"
      style={{
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.4s ease',
        borderRadius: '10px',
        border: '1px solid rgba(201,168,76,0.3)',
        borderTop: '2px solid rgba(201,168,76,0.7)',
        backdropFilter: 'blur(14px)',
        backgroundColor: 'rgba(10,15,30,0.92)',
        boxShadow: '0 -4px 30px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(201,168,76,0.08)',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Phone */}
      <a
        href="tel:+918766936874"
        className="flex items-center gap-2 px-4 py-3 transition-all duration-200"
        style={{ borderRight: '1px solid rgba(201,168,76,0.15)', textDecoration: 'none' }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(201,168,76,0.08)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent')}
      >
        <div
          className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded"
          style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)' }}
        >
          <Phone size={13} style={{ color: '#C9A84C' }} />
        </div>
        {/* Label hidden on small screens, shown on md+ */}
        <div className="hidden sm:flex flex-col leading-tight">
          <span style={{ color: 'rgba(160,168,184,0.6)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Call Us</span>
          <span className="font-medium" style={{ color: '#FFFFFF', fontSize: '0.75rem' }}>+91 876 693 6874</span>
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:contact@prosellers.com"
        className="flex items-center gap-2 px-4 py-3 transition-all duration-200"
        style={{ borderRight: '1px solid rgba(201,168,76,0.15)', textDecoration: 'none' }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(201,168,76,0.08)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent')}
      >
        <div
          className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded"
          style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)' }}
        >
          <Mail size={13} style={{ color: '#C9A84C' }} />
        </div>
        <div className="hidden sm:flex flex-col leading-tight">
          <span style={{ color: 'rgba(160,168,184,0.6)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email</span>
          <span className="font-medium" style={{ color: '#FFFFFF', fontSize: '0.75rem' }}>contact@prosellers.com</span>
        </div>
      </a>

      {/* Request a Call Back */}
      <a
        href="https://calendly.com/your-link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 transition-all duration-200"
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(201,168,76,0.12)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent')}
      >
        <div
          className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded"
          style={{ backgroundColor: 'rgba(201,168,76,0.18)', border: '1px solid rgba(201,168,76,0.4)' }}
        >
          <CalendarCheck size={13} style={{ color: '#C9A84C' }} />
        </div>
        <div className="hidden sm:flex flex-col leading-tight">
          <span style={{ color: 'rgba(160,168,184,0.6)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Schedule</span>
          <span className="font-medium" style={{ color: '#C9A84C', fontSize: '0.75rem' }}>Request a Call Back</span>
        </div>
      </a>
    </div>
  );
}
