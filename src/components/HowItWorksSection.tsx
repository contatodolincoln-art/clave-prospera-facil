import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProfileSetupMockup from './MemberAreaSimulations/ProfileSetupMockup';
import ProposalsMockup from './MemberAreaSimulations/ProposalsMockup';
import ScheduleMockup from './MemberAreaSimulations/ScheduleMockup';
import EarningsMockup from './MemberAreaSimulations/EarningsMockup';
const HowItWorksSection = () => {
  const steps = [{
    number: 1,
    title: "Complete seu perfil",
    description: "Cadastre-se gratuitamente e mostre sua experiência musical em minutos",
    mockup: ProfileSetupMockup
  }, {
    number: 2,
    title: "Receba propostas",
    description: "Alunos interessados entrarão em contato diretamente com você através da plataforma",
    mockup: ProposalsMockup
  }, {
    number: 3,
    title: "Organize sua agenda",
    description: "Gerencie seus horários e aulas de forma prática e eficiente",
    mockup: ScheduleMockup
  }, {
    number: 4,
    title: "Acompanhe seus ganhos",
    description: "Monitore seus pagamentos e lucros em tempo real no dashboard",
    mockup: EarningsMockup
  }];
  return <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-primary-foreground">
              Como funciona na prática
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Veja como será sua experiência real na plataforma Clave
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => {
            const MockupComponent = step.mockup;
            return <Card key={index} className="text-center p-6 border-0 bg-card relative slide-up card-musical" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  <CardContent className="space-y-4 p-0 pt-4">
                    {/* Mockup display */}
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <MockupComponent />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-card-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>

                  {/* Connection line (except for last item) */}
                  {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/50"></div>}
                </Card>;
          })}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 slide-up">
            
            
            <Button size="lg" variant="outline" className="text-xl px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Começar Minha Jornada Agora
            </Button>
            <p className="text-sm text-primary-foreground/70">
              Acesso completo • Sem mensalidades
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;