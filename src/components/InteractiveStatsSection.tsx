import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Clock, Star, DollarSign, Music } from 'lucide-react';

const InteractiveStatsSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    teachers: 0,
    students: 0,
    lessons: 0,
    satisfaction: 0,
    avgEarnings: 0,
    retention: 0
  });

  const metrics = [
    {
      icon: Users,
      label: "Professores ativos",
      value: 1250,
      suffix: "+",
      description: "Educadores musicais confiando na Clave",
      color: "text-primary"
    },
    {
      icon: Music,
      label: "Alunos conectados",
      value: 8900,
      suffix: "+",
      description: "Estudantes aprendendo com nossos professores",
      color: "text-secondary"
    },
    {
      icon: Clock,
      label: "Aulas realizadas",
      value: 45000,
      suffix: "+",
      description: "Horas de conhecimento compartilhado",
      color: "text-primary"
    },
    {
      icon: Star,
      label: "Satisfação média",
      value: 94,
      suffix: "%",
      description: "Professores satisfeitos com a plataforma",
      color: "text-secondary"
    },
    {
      icon: DollarSign,
      label: "Ganho médio mensal",
      value: 2100,
      prefix: "R$ ",
      description: "Renda média dos professores ativos",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      label: "Taxa de retenção",
      value: 87,
      suffix: "%",
      description: "Professores que continuam conosco",
      color: "text-secondary"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        teachers: Math.round(1250 * progress),
        students: Math.round(8900 * progress),
        lessons: Math.round(45000 * progress),
        satisfaction: Math.round(94 * progress),
        avgEarnings: Math.round(2100 * progress),
        retention: Math.round(87 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-tab-cream-bg relative overflow-hidden">
      {/* Decorative musical elements */}
      <div className="absolute top-20 left-1/4 text-6xl text-primary/10 note-float">♪</div>
      <div className="absolute bottom-32 right-1/4 text-4xl text-secondary/10 note-float" style={{ animationDelay: '1.5s' }}>♫</div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-20 slide-up">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground">
              Números que <span className="text-primary">comprovam</span> nossa excelência
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Uma comunidade próspera de professores e alunos que cresce a cada dia
            </p>
          </div>

          {/* Interactive metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const isActive = activeMetric === index;
              const animatedValue = Object.values(animatedValues)[index];
              
              return (
                <Card 
                  key={index}
                  className={`text-center p-8 border-0 transition-all duration-500 cursor-pointer slide-up card-musical ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-glow scale-105' 
                      : 'bg-background hover:shadow-elegant'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveMetric(index)}
                >
                  <CardContent className="space-y-6 p-0">
                    <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-primary-foreground' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      <Icon size={36} />
                    </div>
                    
                    <div className="space-y-3">
                      <div className={`text-4xl font-bold counter-animation ${
                        isActive ? 'text-primary-foreground' : metric.color
                      }`}>
                        {metric.prefix || ''}{animatedValue.toLocaleString()}{metric.suffix || ''}
                      </div>
                      <h3 className={`text-lg font-semibold font-playfair ${
                        isActive ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {metric.label}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {metric.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mb-16">
            {metrics.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeMetric === index ? 'bg-primary' : 'bg-primary/30'
                }`}
                onClick={() => setActiveMetric(index)}
              />
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center space-y-8 slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
              <TrendingUp size={18} />
              <span className="text-sm font-medium">Crescimento constante há 3 anos consecutivos</span>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground font-playfair">
                Faça parte dessa história de sucesso
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Junte-se a milhares de professores que já descobriram uma nova forma 
                de ensinar música e gerar renda consistente.
              </p>
            </div>
            
            <Button size="lg" variant="hero" className="text-xl px-12 py-6 h-auto">
              Quero fazer parte desses números
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Cadastro gratuito • Sem compromisso • Suporte completo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveStatsSection;