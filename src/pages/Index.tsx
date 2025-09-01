import HeroSection from '@/components/HeroSection';
import SocialProofBar from '@/components/SocialProofBar';
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
      {/* 1. Hero: fundo #f7f6ca */}
      <HeroSection />
      
      {/* 2. Barra de Prova Social */}
      <SocialProofBar />
      
      {/* 3. Prova social (métricas): fundo #f3f3f3 */}
      <AuthoritySection />
      
      {/* 4. Card do Professor Destaque */}
      <TeacherProfile />
      
      {/* 5. Por que a Clave: cards em #ffffff sobre BG #f3f3f3 */}
      <WhyClaveSection />
      
      {/* 6. Benefícios: cards em #ffffff sobre BG #f3f3f3 */}
      <BenefitsGrid />
      
      {/* 7. Como funciona (timeline): seção com fundo laranja #c95f35 */}
      <HowItWorksSection />
      
      {/* 8. Números/Resultados */}
      <ResultsSection />
      
      {/* 9. Depoimentos (carrossel): #f7f6ca */}
      <TestimonialsSection />
      
      {/* 10. Criada por educadores: #f3f3f3 */}
      <AboutClaveSection />
      
      {/* 11. CTA final (urgência): bloco amplo com #c95f35 */}
      <FinalCTASection />
    </div>
  );
};

export default Index;
