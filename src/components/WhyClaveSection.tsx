import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music2, DollarSign, Users } from 'lucide-react';

const WhyClaveSection = () => {
  const benefits = [
    {
      icon: Music2,
      title: "Ensine para todo o Brasil sem sair de casa",
      description: "Compartilhe seu talento musical e alcance alunos em qualquer lugar do país.",
    },
    {
      icon: DollarSign,
      title: "Reconhecimento financeiro consistente",
      description: "Pagamentos garantidos e pontuais. Sua dedicação sempre recompensada.",
    },
    {
      icon: Users,
      title: "Autonomia que você merece",
      description: "Defina seus horários, preços e metodologia. Você tem controle total sobre seu ensino.",
    }
  ];

  return (
    <section className="py-24 bg-card">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className={`text-center p-10 border-0 bg-card shadow-card hover:shadow-elegant transition-all duration-300 card-musical slide-up stagger-${index + 1} rounded-lg`}
                >
                  <CardContent className="space-y-8 p-0">
                    <div className="mx-auto w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-glow">
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

          {/* CTA Section */}
          <div className="text-center slide-up stagger-4">
            <Button size="lg" variant="hero" className="text-xl px-8 py-4">
              Descubra Seu Potencial
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Cadastro gratuito • Comece hoje mesmo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClaveSection;