import { useEffect, useRef, useState } from 'react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const [badgesVisible, setBadgesVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const yearsCount = useCountUp(12, 1800, badgesVisible);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles — increased count (140) and speed for more energy
    particlesRef.current = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.85,
      speedY: (Math.random() - 0.5) * 0.85,
      opacity: Math.random() * 0.6 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reveal badges
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBadgesVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201, 168, 76, 0.1) 0%, transparent 70%), linear-gradient(180deg, #0A0F1E 0%, #0D1526 100%)',
        paddingTop: '120px',
        paddingBottom: '60px',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.85 }}
      />

      {/* Subtle top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-3 mb-8"
          style={{ opacity: badgesVisible ? 1 : 0, transition: 'opacity 0.8s ease 0.1s' }}
        >
          <div className="h-px w-12" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="font-body text-xs tracking-widest uppercase"
            style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
          >
            Amazon Growth Consulting
          </span>
          <div className="h-px w-12" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        {/* Main Headline */}
        <h1
          className="font-heading font-semibold leading-tight mb-6"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            opacity: badgesVisible ? 1 : 0,
            transform: badgesVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          We Help USA & UK Amazon Sellers{' '}
          <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Scale Profitably</span>{' '}
          Without Hiring Expensive Agencies.
        </h1>

        {/* Subheadline */}
        <p
          className="font-body font-light leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#A0A8B8',
            lineHeight: 1.7,
            opacity: badgesVisible ? 1 : 0,
            transform: badgesVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s',
          }}
        >
          Data-driven strategy, advanced PPC optimization, and brand-focused growth — direct from an expert with 12+ years of experience.
        </p>

        {/* Dual CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{
            opacity: badgesVisible ? 1 : 0,
            transform: badgesVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
          }}
        >
          <button
            onClick={() => scrollToSection('strategy-call')}
            className="btn-shimmer font-body font-medium px-10 py-4 transition-all duration-300"
            style={{
              backgroundColor: '#C9A84C',
              color: '#0A0F1E',
              fontSize: '1rem',
              letterSpacing: '0.06em',
              borderRadius: '2px',
              border: '1px solid #C9A84C',
              boxShadow: '0 0 40px rgba(201, 168, 76, 0.25)',
              minWidth: '220px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#C9A84C';
              e.currentTarget.style.boxShadow = '0 0 60px rgba(201, 168, 76, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A84C';
              e.currentTarget.style.color = '#0A0F1E';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(201, 168, 76, 0.25)';
            }}
          >
            Book Free Strategy Call
          </button>
          <button
            onClick={() => scrollToSection('strategy-call')}
            className="font-body font-medium px-10 py-4 transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              color: '#C9A84C',
              fontSize: '1rem',
              letterSpacing: '0.06em',
              borderRadius: '2px',
              border: '1px solid rgba(201, 168, 76, 0.5)',
              minWidth: '220px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(201, 168, 76, 0.08)';
              e.currentTarget.style.borderColor = '#C9A84C';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(201, 168, 76, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.5)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get Free Account Audit
          </button>
        </div>

        {/* Trust Badges */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          style={{
            opacity: badgesVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.7s',
          }}
        >
          {[
            { label: 'Limited Client Slots', icon: '🔒' },
            { label: `${yearsCount}+ Years Experience`, icon: '⭐' },
            { label: 'Serving Global Sellers', icon: '🌍' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span style={{ fontSize: '1rem' }}>{badge.icon}</span>
              <span
                className="font-body text-xs tracking-widest uppercase"
                style={{ color: '#A0A8B8', letterSpacing: '0.12em' }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0F1E)' }}
      />
    </section>
  );
}
