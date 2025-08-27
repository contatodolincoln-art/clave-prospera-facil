import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Calendar, Users, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: User,
      title: "Perfil Profissional",
      description: "Crie seu perfil destacando sua experiência, instrumentos e metodologia de ensino"
    },
    {
      number: 2,
      icon: Calendar,
      title: "Disponibilidade Inteligente",
      description: "Configure seus horários disponíveis e deixe o sistema fazer o match perfeito"
    },
    {
      number: 3,
      icon: Users,
      title: "Alunos Qualificados",
      description: "Receba solicitações de alunos pré-qualificados que combinam com seu perfil"
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Ensine e Prospere",
      description: "Dê suas aulas, receba feedbacks positivos e veja sua renda crescer"
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
              4 passos simples para começar sua jornada de sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-8 border-0 bg-tab-cream-bg relative slide-up card-musical"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-secondary-warm rounded-full flex items-center justify-center text-tab-secondary-fg font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  <CardContent className="space-y-4 p-0 pt-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-tab-secondary-bg/20 flex items-center justify-center text-tab-secondary-bg">
                      <Icon size={28} />
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;