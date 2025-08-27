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
    <section className="py-24 bg-gradient-contrast relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl text-white/20 note-float">♪</div>
      <div className="absolute bottom-10 right-10 text-5xl text-white/20 note-float" style={{ animationDelay: '1s' }}>♫</div>
      <div className="absolute top-1/2 left-20 text-3xl text-white/20 note-float" style={{ animationDelay: '2s' }}>♪</div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          
          {/* Urgency Header */}
          <div className="space-y-8 slide-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium">
              <Clock size={20} />
              <span>Últimas horas para garantir sua vaga</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight">
              Não perca esta{' '}
              <span className="text-yellow-300">oportunidade única</span>
            </h2>
            
            <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium">
              Faça parte da maior plataforma de ensino musical do Brasil e transforme sua vida
            </p>
          </div>

          {/* Countdown and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 slide-up" style={{ animationDelay: '0.3s' }}>
            
            {/* Countdown */}
            <Card className="bg-white/10 backdrop-blur-sm text-white border-0 shadow-elegant">
              <CardContent className="p-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Clock size={24} />
                  <span className="font-semibold text-xl">Tempo restante</span>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold counter-animation">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-lg opacity-80">horas</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold counter-animation">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-lg opacity-80">min</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold counter-animation">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-lg opacity-80">seg</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spots Left */}
            <Card className="bg-white/10 backdrop-blur-sm text-white border-0 shadow-elegant">
              <CardContent className="p-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Users size={24} />
                  <span className="font-semibold text-xl">Vagas restantes</span>
                </div>
                
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-yellow-300 counter-animation">
                    {spotsLeft}
                  </div>
                  <div className="text-lg opacity-80">
                    de 500 vagas iniciais
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-white/20 rounded-full h-3 mt-6">
                    <div 
                      className="bg-yellow-300 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${(spotsLeft / 500) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA */}
          <div className="space-y-8 slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="text-2xl px-16 py-8 h-auto bg-yellow-300 hover:bg-yellow-400 text-primary shadow-elegant hover:scale-105 transition-all duration-300 font-bold"
            >
              <Zap size={28} className="mr-3" />
              QUERO MINHA VAGA AGORA - RESTAM POUCAS HORAS
            </Button>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-musical"></div>
                <span>Sem taxa de inscrição</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-musical"></div>
                <span>Suporte 24/7 especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-musical"></div>
                <span>Pagamentos 100% garantidos</span>
              </div>
            </div>
          </div>

          {/* Final message */}
          <div className="space-y-6 slide-up" style={{ animationDelay: '0.9s' }}>
            <p className="text-2xl text-white/90 italic font-playfair">
              "Sua música tem valor. Seu ensino merece reconhecimento."
            </p>
            <div className="text-4xl">♪ ♫ ♪</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;