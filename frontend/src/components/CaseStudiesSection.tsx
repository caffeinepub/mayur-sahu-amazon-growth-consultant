import { useEffect, useRef, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface CaseStudy {
  client: string;
  country: string;
  category: string;
  metrics: { label: string; before: number; after: number; unit: string }[];
  chartData: { name: string; Before: number; After: number }[];
  chartLabel: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: 'Client A',
    country: '🇺🇸 USA',
    category: 'Home & Kitchen',
    metrics: [
      { label: 'ACOS', before: 45, after: 18, unit: '%' },
      { label: 'Revenue', before: 12, after: 38, unit: 'k/mo' },
    ],
    chartData: [
      { name: 'ACOS %', Before: 45, After: 18 },
      { name: 'Revenue $k', Before: 12, After: 38 },
    ],
    chartLabel: 'ACOS & Revenue',
  },
  {
    client: 'Client B',
    country: '🇬🇧 UK',
    category: 'Health & Beauty',
    metrics: [
      { label: 'Conversion Rate', before: 8, after: 19, unit: '%' },
      { label: 'Revenue', before: 8, after: 24, unit: 'k/mo' },
    ],
    chartData: [
      { name: 'Conv. Rate %', Before: 8, After: 19 },
      { name: 'Revenue $k', Before: 8, After: 24 },
    ],
    chartLabel: 'Conversion & Revenue',
  },
  {
    client: 'Client C',
    country: '🇺🇸 USA',
    category: 'Sports & Outdoors',
    metrics: [
      { label: 'PPC Spend', before: 100, after: 65, unit: '% (reduced)' },
      { label: 'Revenue', before: 20, after: 61, unit: 'k/mo' },
    ],
    chartData: [
      { name: 'PPC Spend %', Before: 100, After: 65 },
      { name: 'Revenue $k', Before: 20, After: 61 },
    ],
    chartLabel: 'PPC Spend & Revenue',
  },
];

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

function MetricCounter({ before, after, unit, label, start }: {
  before: number; after: number; unit: string; label: string; start: boolean;
}) {
  const beforeCount = useCountUp(before, 1200, start);
  const afterCount = useCountUp(after, 1500, start);
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-body text-xs" style={{ color: '#A0A8B8' }}>{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-heading font-semibold" style={{ fontSize: '1.1rem', color: 'rgba(160,168,184,0.7)' }}>
          {beforeCount}{unit.includes('k') ? 'k' : unit.includes('%') ? '%' : ''}
        </span>
        <span style={{ color: '#C9A84C', fontSize: '0.9rem' }}>→</span>
        <span className="font-heading font-semibold" style={{ fontSize: '1.3rem', color: '#C9A84C' }}>
          {afterCount}{unit.includes('k') ? 'k' : unit.includes('%') ? '%' : ''}
        </span>
      </div>
    </div>
  );
}

function CaseStudyCard({ study, delay }: { study: CaseStudy; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="glass-card flex flex-col p-7"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <span
            className="font-heading font-semibold"
            style={{ fontSize: '1.2rem', color: '#FFFFFF' }}
          >
            {study.client}
          </span>
          <span
            className="font-body text-xs ml-2"
            style={{ color: '#A0A8B8' }}
          >
            {study.country}
          </span>
        </div>
        <span
          className="font-body text-xs px-2 py-1"
          style={{
            backgroundColor: 'rgba(201, 168, 76, 0.1)',
            border: '1px solid rgba(201, 168, 76, 0.25)',
            color: '#C9A84C',
            borderRadius: '2px',
          }}
        >
          {study.category}
        </span>
      </div>

      {/* Metrics */}
      <div className="flex gap-6 justify-center my-4">
        {study.metrics.map((m) => (
          <MetricCounter
            key={m.label}
            before={m.before}
            after={m.after}
            unit={m.unit}
            label={m.label}
            start={visible}
          />
        ))}
      </div>

      {/* Chart */}
      <div style={{ height: '160px', marginTop: '8px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={study.chartData} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="name"
              tick={{ fill: '#A0A8B8', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111827',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '4px',
                color: '#FFFFFF',
                fontSize: '12px',
              }}
            />
            <Bar dataKey="Before" radius={[2, 2, 0, 0]}>
              {study.chartData.map((_, i) => (
                <Cell key={i} fill="rgba(160,168,184,0.3)" />
              ))}
            </Bar>
            <Bar dataKey="After" radius={[2, 2, 0, 0]}>
              {study.chartData.map((_, i) => (
                <Cell key={i} fill="#C9A84C" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p
        className="font-body text-xs text-center mt-3"
        style={{ color: 'rgba(160,168,184,0.4)' }}
      >
        Gray = Before · Gold = After
      </p>
    </div>
  );
}

export default function CaseStudiesSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.2 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="case-studies"
      className="px-6"
      style={{
        backgroundColor: '#0A0F1E',
        paddingTop: '100px',
        paddingBottom: '100px',
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
              Proven Results
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
            Real Numbers.{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Real Growth.</span>
          </h2>
          <p
            className="font-body font-light mt-4 max-w-xl mx-auto"
            style={{ color: '#A0A8B8', fontSize: '1rem', lineHeight: 1.7 }}
          >
            Before → After results from our client engagements.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} delay={index * 150} />
          ))}
        </div>

        <p
          className="font-body text-xs text-center mt-8"
          style={{ color: 'rgba(160, 168, 184, 0.4)' }}
        >
          * Sample data for illustration purposes. Results vary by account and market conditions.
        </p>
      </div>
    </section>
  );
}
