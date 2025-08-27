import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, DollarSign, Users } from 'lucide-react';

const WhyClaveSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Autonomia que você merece",
      description: "Defina seus horários, preços e metodologia. Você tem controle total sobre seu ensino.",
    },
    {
      icon: DollarSign,
      title: "Reconhecimento financeiro consistente",
      description: "Pagamentos garantidos e pontuais. Sua dedicação sempre recompensada.",
    },
    {
      icon: Users,
      title: "Comunidade que te entende",
      description: "Conecte-se com outros professores e compartilhe experiências musicais únicas.",
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-20 slide-up">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground">
              Por que a <span className="text-primary">Clave?</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Criamos a plataforma ideal para professores que querem fazer a diferença
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className={`text-center p-10 border-0 bg-card shadow-card hover:shadow-elegant transition-all duration-300 card-musical slide-up stagger-${index + 1}`}
                >
                  <CardContent className="space-y-8 p-0">
                    <div className="mx-auto w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                      <Icon size={40} />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground font-playfair">
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
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

export default WhyClaveSection;