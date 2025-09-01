import React from 'react';
import { Users, Shield, Clock, CheckCircle } from 'lucide-react';

const SocialProofBar = () => {
  const metrics = [
    {
      icon: Users,
      text: "500+ Professores na lista",
      color: "text-accent"
    },
    {
      icon: Shield,
      text: "Pagamentos garantidos",
      color: "text-primary"
    },
    {
      icon: Clock,
      text: "Suporte 24/7",
      color: "text-accent"
    },
    {
      icon: CheckCircle,
      text: "Primeira aula em ~15min",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-8 bg-background border-t-4 border-accent">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-card rounded-[20px] px-4 py-3 shadow-soft hover-lift fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon 
                size={20} 
                className={metric.color}
              />
              <span className="text-sm font-medium text-card-foreground">
                {metric.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;