import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, Heart, Smartphone, Target, Clock, DollarSign, Star } from 'lucide-react';
const ValuePropositionSection = () => {
  const mainBenefits = [
    {
      icon: FileCheck,
      text: "Burocracia? A gente resolve."
    },
    {
      icon: Heart,
      text: "Reconhecimento e valorização."
    },
    {
      icon: Smartphone,
      text: "Plataforma simples e prática."
    }
  ];

  const extraBenefits = [
    {
      icon: Target,
      text: "Alunos de todo o Brasil, qualificados e comprometidos."
    },
    {
      icon: Clock,
      text: "Horários 100% flexíveis."
    },
    {
      icon: DollarSign,
      text: "Pagamentos garantidos e pontuais."
    },
    {
      icon: Star,
      text: "Avaliação justa e transparente."
    }
  ];
  return (
    <section className="py-16 bg-[#f9f6f2] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
              Na Clave, você ensina sem se preocupar com nada além da música.
            </h2>
          </div>

          <Card className="bg-white border-0 shadow-card p-8 slide-up">
            <CardContent className="p-0">
              {/* Main benefits */}
              <div className="space-y-6 mb-10">
                {mainBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 slide-in-left" style={{
                      animationDelay: `${index * 0.1}s`
                    }}>
                      <div className="w-8 h-8 flex items-center justify-center text-primary">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <p className="text-lg font-medium text-foreground">{benefit.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Separator */}
              <div className="border-t border-muted my-8"></div>

              {/* Extra benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extraBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 slide-in-left" style={{
                      animationDelay: `${(index + 3) * 0.1}s`
                    }}>
                      <div className="w-6 h-6 flex items-center justify-center text-primary">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                      <p className="text-base text-muted-foreground">{benefit.text}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ValuePropositionSection;