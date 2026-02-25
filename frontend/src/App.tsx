import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import WhyChooseSection from './components/WhyChooseSection';
import StrategyCallSection from './components/StrategyCallSection';
import Footer from './components/Footer';

function SectionConnector() {
  return (
    <div className="step-connector mx-auto" style={{ width: 'fit-content' }}>
      <div className="step-connector-line" />
      <div className="step-connector-dot" />
      <div className="step-connector-line" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.1), rgba(201,168,76,0.6))' }} />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: '#0A0F1E', color: '#FFFFFF' }}>
      <Navigation />
      <main>
        <HeroSection />
        <SectionConnector />
        <ProblemSection />
        <SectionConnector />
        <ServicesSection />
        <SectionConnector />
        <PricingSection />
        <SectionConnector />
        <CaseStudiesSection />
        <SectionConnector />
        <TestimonialsSection />
        <SectionConnector />
        <AboutSection />
        <SectionConnector />
        <WhyChooseSection />
        <SectionConnector />
        <StrategyCallSection />
      </main>
      <Footer />
    </div>
  );
}
