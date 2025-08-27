import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Clock, Headphones, MapPin } from 'lucide-react';

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Alunos comprometidos",
      description: "Conectamos você com estudantes realmente interessados em aprender"
    },
    {
      icon: Clock,
      title: "Flexibilidade total",
      description: "Ensine quando quiser, de onde estiver. Sua agenda, suas regras"
    },
    {
      icon: Headphones,
      title: "Suporte especializado",
      description: "Nossa equipe entende de música e está sempre aqui para ajudar"
    },
    {
      icon: MapPin,
      title: "Todo o Brasil como território",
      description: "Alcance alunos de qualquer lugar do país sem sair de casa"
    }
  ];

  return (
    <section className="py-20 bg-tab-secondary-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-tab-secondary-fg">
              Benefícios que fazem a diferença
            </h2>
            <p className="text-xl text-tab-secondary-fg/80">
              Tudo pensado para maximizar seu sucesso como professor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-6 border-0 bg-tab-cream-bg hover:shadow-glow transition-all duration-300 slide-up card-musical"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="space-y-4 p-0">
                    <div className="mx-auto w-16 h-16 rounded-full bg-tab-primary-bg/20 flex items-center justify-center text-tab-primary-bg">
                      <Icon size={28} />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-tab-cream-fg">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-tab-cream-fg/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;