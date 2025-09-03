import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const HowItWorksSection = () => {
  const benefits = [
    {
      title: "Zero Burocracia",
      description: "Contratos e pagamentos sem dor de cabeça."
    },
    {
      title: "Valorizamos Você",
      description: "Reconhecimento e suporte para sua carreira."
    },
    {
      title: "Simplicidade Real",
      description: "Interface intuitiva e prática."
    }
  ];
  return <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-primary-foreground">
              Foque no que você ama fazer
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Deixe a tecnologia cuidar do resto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-card relative slide-up card-musical p-6" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <CardContent className="p-0 flex flex-col justify-center h-full space-y-2">
                  <h3 className="text-2xl font-bold text-card-foreground leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-card-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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