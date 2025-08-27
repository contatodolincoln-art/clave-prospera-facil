import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, DollarSign, Users } from 'lucide-react';

const WhyClaveSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Autonomia que você merece",
      description: "Defina seus horários, preços e metodologia. Você tem controle total sobre seu ensino.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: DollarSign,
      title: "Reconhecimento financeiro consistente",
      description: "Pagamentos garantidos e pontuais. Sua dedicação sempre recompensada.",
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: Users,
      title: "Comunidade que te entende",
      description: "Conecte-se com outros professores e compartilhe experiências musicais únicas.",
      gradient: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              Por que a <span className="text-primary">Clave?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Criamos a plataforma ideal para professores que querem fazer a diferença
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className={`text-center p-8 border-0 bg-gradient-to-br ${benefit.gradient} slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="space-y-6 p-0">
                    <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={36} />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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