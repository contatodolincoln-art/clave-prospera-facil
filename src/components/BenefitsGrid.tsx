import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-secondary-foreground">
              Benefícios que fazem a diferença
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              Tudo pensado para maximizar seu sucesso como professor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-6 border-0 bg-card hover:shadow-glow transition-all duration-300 slide-up card-musical"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="space-y-4 p-0">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Icon size={28} />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-card-foreground/70 leading-relaxed">
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
            <Button size="lg" variant="outline" className="text-xl px-8 py-4 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Explore Todas as Vantagens
            </Button>
            <p className="text-sm text-secondary-foreground/70 mt-3">
              Descubra tudo que preparamos para você
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;