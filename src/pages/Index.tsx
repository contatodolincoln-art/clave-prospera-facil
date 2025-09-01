import HeroSection from '@/components/HeroSection';
import AuthoritySection from '@/components/AuthoritySection';
import TeacherProfile from '@/components/TeacherProfile';
import WhyClaveSection from '@/components/WhyClaveSection';
import BenefitsGrid from '@/components/BenefitsGrid';
import HowItWorksSection from '@/components/HowItWorksSection';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutClaveSection from '@/components/AboutClaveSection';
import FinalCTASection from '@/components/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AuthoritySection />
      <TeacherProfile />
      <WhyClaveSection />
      <BenefitsGrid />
      <HowItWorksSection />
      <ResultsSection />
      <TestimonialsSection />
      <AboutClaveSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
