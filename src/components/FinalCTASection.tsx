import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Zap } from 'lucide-react';

const FinalCTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });
  
  const [spotsLeft, setSpotsLeft] = useState(127);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate spots decreasing
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => Math.max(120, prev - 1));
    }, 30000); // Decrease every 30 seconds

    return () => clearInterval(spotsTimer);
  }, []);

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl text-primary/20 note-float">♪</div>
      <div className="absolute bottom-10 right-10 text-5xl text-primary/20 note-float" style={{ animationDelay: '1s' }}>♫</div>
      <div className="absolute top-1/2 left-20 text-3xl text-primary/20 note-float" style={{ animationDelay: '2s' }}>♪</div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Urgency Header */}
          <div className="space-y-6 slide-up">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium">
              <Clock size={16} />
              <span>Últimas horas para garantir sua vaga</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground leading-tight">
              Suas últimas{' '}
              <span className="text-primary">48 horas</span>{' '}
              para garantir sua vaga
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Não perca a oportunidade de fazer parte da maior plataforma de ensino musical do Brasil
            </p>
          </div>

          {/* Countdown and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 slide-up" style={{ animationDelay: '0.3s' }}>
            
            {/* Countdown */}
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock size={20} />
                  <span className="font-medium">Tempo restante</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold counter-animation">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm opacity-80">horas</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold counter-animation">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm opacity-80">min</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold counter-animation">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm opacity-80">seg</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spots Left */}
            <Card className="bg-card border-0 shadow-glow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4 text-foreground">
                  <Users size={20} />
                  <span className="font-medium">Vagas restantes</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary counter-animation">
                    {spotsLeft}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    de 500 vagas iniciais
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-muted rounded-full h-2 mt-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(spotsLeft / 500) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA */}
          <div className="space-y-6 slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xl px-12 py-6 h-auto shadow-glow hover:scale-105 transition-transform duration-300"
            >
              <Zap size={24} className="mr-2" />
              QUERO MINHA VAGA AGORA - RESTAM 48H
            </Button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sem taxa de inscrição</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Pagamentos garantidos</span>
              </div>
            </div>
          </div>

          {/* Final message */}
          <div className="space-y-4 slide-up" style={{ animationDelay: '0.9s' }}>
            <p className="text-lg text-muted-foreground italic">
              "Sua música tem valor. Seu ensino merece reconhecimento."
            </p>
            <div className="text-2xl">♪ ♫ ♪</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;