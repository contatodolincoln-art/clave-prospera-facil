import React from 'react';
import { Music, Coins, Heart } from 'lucide-react';

const WhyClaveSection = () => {
  const benefits = [
    {
      icon: Music,
      title: "AUTONOMIA MUSICAL",
      description: "Defina seus horários, preços e metodologia. Você tem controle total sobre seu ensino e pode expressar sua paixão pela música do seu jeito.",
    },
    {
      icon: Coins,
      title: "VALORIZAÇÃO JUSTA",
      description: "Receba o reconhecimento financeiro que merece. Pagamentos garantidos e pontuais que refletem o valor real do seu conhecimento musical.",
    },
    {
      icon: Heart,
      title: "COMUNIDADE MUSICAL",
      description: "Faça parte de uma rede de professores apaixonados. Compartilhe experiências, técnicas e inspire-se com outros educadores musicais.",
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Large title similar to WHY MARBLED */}
          <div className="text-center mb-20 slide-up">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-foreground/20 mb-8 tracking-wider">
              POR QUE <span className="text-primary/20">CLAVE</span>
            </h2>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className={`text-center space-y-6 slide-up stagger-${index + 1}`}
                >
                  {/* Icon */}
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow mb-8">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground font-playfair tracking-wide">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClaveSection;