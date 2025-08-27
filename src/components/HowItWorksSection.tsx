import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProfileSetupMockup from './MemberAreaSimulations/ProfileSetupMockup';
import ProposalsMockup from './MemberAreaSimulations/ProposalsMockup';
import ScheduleMockup from './MemberAreaSimulations/ScheduleMockup';
import EarningsMockup from './MemberAreaSimulations/EarningsMockup';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Complete seu perfil",
      description: "Cadastre-se gratuitamente e mostre sua experiência musical em minutos",
      mockup: ProfileSetupMockup
    },
    {
      number: 2,
      title: "Receba propostas",
      description: "Alunos interessados entrarão em contato diretamente com você através da plataforma",
      mockup: ProposalsMockup
    },
    {
      number: 3,
      title: "Organize sua agenda",
      description: "Gerencie seus horários e aulas de forma prática e eficiente",
      mockup: ScheduleMockup
    },
    {
      number: 4,
      title: "Acompanhe seus ganhos",
      description: "Monitore seus pagamentos e lucros em tempo real no dashboard",
      mockup: EarningsMockup
    }
  ];

  return (
    <section className="py-20 bg-tab-primary-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-tab-primary-fg">
              Como funciona na prática
            </h2>
            <p className="text-xl text-tab-primary-fg/80">
              Veja como será sua experiência real na plataforma Clave
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const MockupComponent = step.mockup;
              return (
                <Card 
                  key={index}
                  className="text-center p-6 border-0 bg-tab-cream-bg relative slide-up card-musical"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-secondary-warm rounded-full flex items-center justify-center text-tab-secondary-fg font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  <CardContent className="space-y-4 p-0 pt-4">
                    {/* Mockup display */}
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <MockupComponent />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-tab-cream-fg">
                        {step.title}
                      </h3>
                      <p className="text-sm text-tab-cream-fg/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>

                  {/* Connection line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-tab-secondary-bg/50 to-transparent"></div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Additional info */}
          <div className="text-center mt-12 slide-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-tab-primary-fg px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Interface 100% funcional desde o primeiro dia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;