import StudentHeroSection from '@/components/student/StudentHeroSection';
import StudentValueSection from '@/components/student/StudentValueSection';
import StudentPriceSimulator from '@/components/student/StudentPriceSimulator';
import StudentHowItWorksSection from '@/components/student/StudentHowItWorksSection';
import StudentTestimonialsSection from '@/components/student/StudentTestimonialsSection';
import StudentTeachersSection from '@/components/student/StudentTeachersSection';
import StudentFAQSection from '@/components/student/StudentFAQSection';
import StudentGuaranteeSection from '@/components/student/StudentGuaranteeSection';
import StudentFinalCTA from '@/components/student/StudentFinalCTA';
import StudentFooter from '@/components/student/StudentFooter';
import FloatingNavigation from '@/components/FloatingNavigation';

const StudentLanding = () => {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <StudentHeroSection />
      </div>
      <StudentValueSection />
      <div id="preco">
        <StudentPriceSimulator />
      </div>
      <div id="como-funciona">
        <StudentHowItWorksSection />
      </div>
      <div id="depoimentos">
        <StudentTestimonialsSection />
      </div>
      <div id="professores">
        <StudentTeachersSection />
      </div>
      <StudentFAQSection />
      <StudentGuaranteeSection />
      <div id="vaga">
        <StudentFinalCTA />
      </div>
      <StudentFooter />
      <FloatingNavigation />
    </div>
  );
};

export default StudentLanding;