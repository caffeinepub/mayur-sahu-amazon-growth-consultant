import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FlagStripSection from './components/FlagStripSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import WhyChooseSection from './components/WhyChooseSection';
import StrategyCallSection from './components/StrategyCallSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import TrustSecuritySection from './components/TrustSecuritySection';
import GlobalServiceSection from './components/GlobalServiceSection';
import FAQSection from './components/FAQSection';
import ComparisonSection from './components/ComparisonSection';
import LeadMagnetSection from './components/LeadMagnetSection';
import ScrollButtons from './components/ScrollButtons';
import FloatingSideStrip from './components/FloatingSideStrip';
import Footer from './components/Footer';
import SectionConnector from './components/SectionConnector';

export default function App() {
  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: '#0A0F1E', color: '#FFFFFF' }}>
      <Navigation />
      <ScrollButtons />
      <FloatingSideStrip />
      <main>
        <HeroSection />
        <SectionConnector />
        <FlagStripSection />
        <SectionConnector />
        <ProblemSection />
        <SectionConnector />
        <ServicesSection />
        <SectionConnector />
        <HowWeWorkSection />
        <SectionConnector />
        <TrustSecuritySection />
        <SectionConnector />
        <GlobalServiceSection />
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
        <ComparisonSection />
        <SectionConnector />
        <FAQSection />
        <SectionConnector />
        <LeadMagnetSection />
        <SectionConnector />
        <StrategyCallSection />
      </main>
      {/* Extra bottom padding so the floating bar never overlaps the footer */}
      <div style={{ paddingBottom: '72px' }}>
        <Footer />
      </div>
    </div>
  );
}
