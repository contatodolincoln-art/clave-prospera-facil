import HeroSection from '@/components/HeroSection';
import AuthoritySection from '@/components/AuthoritySection';
import TeacherProfile from '@/components/TeacherProfile';
import WhyClaveSection from '@/components/WhyClaveSection';
import PlatformPreviewSection from '@/components/PlatformPreviewSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import BenefitsGrid from '@/components/BenefitsGrid';
import HowItWorksSection from '@/components/HowItWorksSection';
import InteractiveStatsSection from '@/components/InteractiveStatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutClaveSection from '@/components/AboutClaveSection';
import FinalCTASection from '@/components/FinalCTASection';
import FloatingNavigation from '@/components/FloatingNavigation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <HeroSection />
      </div>
      <AuthoritySection />
      <TeacherProfile />
      <WhyClaveSection />
      <PlatformPreviewSection />
      <ValuePropositionSection />
      <BenefitsGrid />
      <div id="como-funciona">
        <HowItWorksSection />
      </div>
      <InteractiveStatsSection />
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <AboutClaveSection />
      <div id="vaga">
        <FinalCTASection />
      </div>
      <FloatingNavigation />
    </div>
  );
};

export default Index;
