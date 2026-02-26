import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How do you approach Amazon account growth strategically rather than tactically?',
    a: `Our approach focuses on profitability and scalability rather than isolated optimizations. We begin with a deep account audit covering advertising efficiency, conversion metrics, listing performance, and competitive positioning. From there, we implement a structured growth roadmap focused on profit improvement, scalable advertising, and long-term brand value rather than short-term sales spikes.`,
  },
  {
    q: 'How do you handle high ACOS or low profitability accounts?',
    a: `We analyze campaign structure, keyword waste, conversion rate, pricing strategy, and market competition. Then we restructure campaigns, eliminate inefficient spend, improve listing conversion, and rebalance ad strategy to focus on profitable growth rather than vanity revenue.`,
  },
  {
    q: 'What level of access do you require to manage an account effectively?',
    a: `We typically request Seller Central user permissions, Advertising console access, and Brand registry access (if applicable). We never request primary login credentials and operate through secure user permissions only.`,
  },
  {
    q: 'How do you ensure account safety and policy compliance?',
    a: `We follow Amazon's Terms of Service and advertising guidelines strictly. All optimization strategies are aligned with platform policies to reduce risk of suspension or compliance issues. However, final compliance responsibility always remains with the account owner.`,
  },
  {
    q: 'Do you work with venture-backed or high-revenue brands?',
    a: `Yes. We support both emerging and established brands. For larger accounts with significant ad spend or multiple marketplaces, customized consulting retainers are structured based on complexity and growth objectives.`,
  },
  {
    q: 'How do you measure success for your clients?',
    a: `Key performance indicators include: TACOS improvement, net profit growth, conversion rate improvement, organic ranking growth, advertising efficiency, and revenue stability and scalability. Our focus is long-term profitability, not just revenue spikes.`,
  },
  {
    q: 'What makes your consulting model different from large agencies?',
    a: `Large agencies often assign junior account managers and operate on volume. Our model is intentionally limited-client and strategy-driven. Clients work directly with the consultant responsible for performance, ensuring accountability, consistency, and deeper strategic involvement.`,
  },
  {
    q: 'Can you work alongside our in-house team?',
    a: `Yes. We frequently collaborate with internal marketing teams, brand managers, and operations staff to align strategy and execution. We can operate as a strategic partner rather than a replacement for internal resources.`,
  },
  {
    q: 'How do you approach new product launches?',
    a: `Our launch strategy includes keyword positioning, PPC launch structure, conversion-focused listing optimization, initial ranking strategy, and review velocity guidance. Each launch plan is tailored to category competition and budget.`,
  },
  {
    q: 'How do you manage communication across time zones?',
    a: `We operate globally and accommodate US and UK time zones. Communication typically includes scheduled strategy calls, email updates, and WhatsApp or Slack (if required). Response time: within 24 working hours.`,
  },
  {
    q: 'What level of involvement is required from the client?',
    a: `Clients are expected to provide accurate product information, inventory updates, timely approvals for strategy changes, and budget clarity. Growth is most effective when collaboration is consistent.`,
  },
  {
    q: 'Do you take equity or performance-based compensation?',
    a: `Our standard model is a fixed consulting retainer. However, performance-based or hybrid structures may be considered for established brands with strong long-term growth potential.`,
  },
  {
    q: 'How do you handle multiple marketplaces (USA, UK, Canada)?',
    a: `We can support multi-marketplace strategy including listing localization, PPC adaptation, pricing alignment, and inventory planning. Each marketplace requires tailored optimization rather than simple duplication.`,
  },
  {
    q: 'What happens during the first 30 days of engagement?',
    a: `Initial phase includes full account audit, data analysis, profit gap identification, campaign restructuring, listing performance improvements, and strategic roadmap development. This foundation phase sets the direction for scalable growth.`,
  },
  {
    q: 'How do you maintain confidentiality and data security?',
    a: `All client data, performance metrics, and account access details are handled with strict confidentiality. We do not share account information with third parties and are open to formal NDA agreements.`,
  },
  {
    q: 'Do you work with aggregators or multi-brand portfolios?',
    a: `Yes. We can support multi-brand structures and aggregators managing multiple ASIN portfolios with customized consulting arrangements.`,
  },
  {
    q: 'Can you assist in preparing an account for sale or investment?',
    a: `Yes. We can help optimize account health, profitability metrics, and performance documentation to improve valuation before potential acquisition or investment.`,
  },
  {
    q: 'How selective is your client onboarding process?',
    a: `We accept a limited number of brands to maintain strategic focus and performance quality. Not all inquiries are accepted if we believe we cannot add significant value.`,
  },
];

interface FAQItemProps {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      style={{
        background: isOpen ? 'rgba(201,168,76,0.05)' : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${isOpen ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.15)'}`,
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}
    >
      {/* Question */}
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
        style={{ cursor: 'pointer', background: 'none', border: 'none' }}
      >
        <span
          className="font-heading font-semibold"
          style={{
            fontSize: '1.05rem',
            color: isOpen ? '#C9A84C' : '#FFFFFF',
            lineHeight: 1.4,
            transition: 'color 0.3s ease',
          }}
        >
          <span
            className="font-body text-xs mr-3 font-medium"
            style={{ color: 'rgba(201,168,76,0.5)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          {faq.q}
        </span>
        <div
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: isOpen ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.08)',
            border: `1px solid ${isOpen ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)'}`,
            transition: 'all 0.3s ease',
          }}
        >
          {isOpen ? (
            <Minus size={15} style={{ color: '#C9A84C' }} />
          ) : (
            <Plus size={15} style={{ color: '#C9A84C' }} />
          )}
        </div>
      </button>

      {/* Answer */}
      <div
        style={{
          maxHeight: isOpen ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div
          className="px-6 pb-6"
          style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}
        >
          <p
            className="font-body text-sm font-light leading-relaxed pt-4"
            style={{ color: '#A0A8B8', lineHeight: 1.8 }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      const heading = sectionRef.current.querySelector('.faq-heading');
      const list = sectionRef.current.querySelector('.faq-list');
      if (heading) observer.observe(heading);
      if (list) observer.observe(list);
    }

    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="px-6"
      style={{
        backgroundColor: '#0A0F1E',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="faq-heading text-center mb-10 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
            >
              Expert Answers
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
            Frequently Asked{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Questions</span>
          </h2>
          <p
            className="font-body font-light mt-4 max-w-xl mx-auto"
            style={{ color: '#A0A8B8', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Everything you need to know about working with ProSellers — answered with full transparency.
          </p>
        </div>

        {/* FAQ 3-Column Grid on desktop, 2 on tablet, 1 on mobile */}
        <div className="faq-list reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
