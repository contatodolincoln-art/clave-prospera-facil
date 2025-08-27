import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, TrendingUp } from 'lucide-react';

const ResultsSection = () => {
  const [counters, setCounters] = useState({ satisfaction: 0, rating: 0, timeToFirst: 0 });
  
  const targetValues = { satisfaction: 94, rating: 4.8, timeToFirst: 15 };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        satisfaction: Math.round(targetValues.satisfaction * progress),
        rating: Number((targetValues.rating * progress).toFixed(1)),
        timeToFirst: Math.round(targetValues.timeToFirst * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const results = [
    {
      icon: TrendingUp,
      value: `${counters.satisfaction}%`,
      label: "Satisfação dos professores",
      color: "text-primary"
    },
    {
      icon: Star,
      value: `${counters.rating}★`,
      label: "Avaliação média da plataforma",
      color: "text-secondary"
    },
    {
      icon: Clock,
      value: `${counters.timeToFirst}min`,
      label: "Tempo até primeira aula",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-foreground">
              Resultados que comprovam nossa excelência
            </h2>
            <p className="text-xl text-muted-foreground">
              Números reais de uma plataforma que funciona
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-8 border-0 bg-card shadow-glow slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="space-y-6 p-0">
                    <div className={`mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center ${result.color}`}>
                      <Icon size={36} />
                    </div>
                    
                    <div className="space-y-3">
                      <div className={`text-5xl font-bold ${result.color} counter-animation`}>
                        {result.value}
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {result.label}
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

export default ResultsSection;