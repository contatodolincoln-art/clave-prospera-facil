import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Zap, Target, Clock, Star } from 'lucide-react';

const ValuePropositionSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Cuidamos da burocracia",
      description: "Contratos, pagamentos, suporte técnico... deixe isso conosco",
      color: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      icon: Heart,
      title: "Valorizamos seu trabalho",
      description: "Reconhecimento, badges e uma comunidade que te apoia",
      color: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      icon: Zap,
      title: "Simplicidade que funciona",
      description: "Interface intuitiva, processo rápido, resultados imediatos",
      color: "bg-accent",
      textColor: "text-accent-foreground"
    }
  ];

  const benefits = [
    { icon: Target, text: "Alunos qualificados e comprometidos" },
    { icon: Clock, text: "Flexibilidade total de horários" },
    { icon: Star, text: "Sistema de avaliação justo" },
    { icon: Shield, text: "Pagamentos garantidos e pontuais" }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Musical decoration */}
      <div className="absolute top-10 left-10 text-8xl opacity-20 note-float">♪</div>
      <div className="absolute bottom-20 right-20 text-6xl opacity-20 note-float" style={{ animationDelay: '1s' }}>♫</div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-20 slide-up">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold">
              A Clave é sua <span className="text-secondary">parceira ideal</span>
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto font-medium">
              Não oferecemos apenas uma plataforma. Criamos um ecossistema onde 
              professores são valorizados, respeitados e bem remunerados.
            </p>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className={`${value.color} ${value.textColor} border-0 p-8 text-center slide-up card-musical`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="space-y-6 p-0">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Icon size={36} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold font-playfair">
                        {value.title}
                      </h3>
                      <p className="text-lg opacity-90 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Benefits grid */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 mb-16 slide-up">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-center mb-12 font-playfair">
                O que você ganha sendo nosso parceiro
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-4 slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground">
                        <Icon size={24} />
                      </div>
                      <p className="text-lg font-medium">{benefit.text}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Emotional connection */}
          <div className="text-center space-y-8 slide-up">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold font-playfair">
                Você não está apenas dando aulas...
              </h3>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                Está transformando vidas através da música, sendo reconhecido pelo seu talento 
                e construindo uma carreira sólida com quem realmente entende sua jornada.
              </p>
            </div>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-12 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Quero fazer parte dessa comunidade
            </Button>
            
            <p className="text-sm opacity-75">
              Junte-se a centenas de professores que já transformaram sua paixão em profissão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;