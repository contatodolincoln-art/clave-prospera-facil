import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, Shield } from 'lucide-react';

const AuthoritySection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      text: "professores aguardando",
      color: "text-primary"
    },
    {
      icon: Clock,
      number: "24/7",
      text: "Suporte dedicado",
      color: "text-secondary"
    },
    {
      icon: Shield,
      number: "100%",
      text: "Pagamentos garantidos",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="text-center p-8 border-0 bg-gradient-warm slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="space-y-4 p-0">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center ${stat.color}`}>
                    <Icon size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`text-4xl font-bold ${stat.color} counter-animation`}>
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;