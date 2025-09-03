import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Check } from 'lucide-react';

const StudentFinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const benefits = [
    "Cadastro em 30 segundos",
    "Sem cartão de crédito",
    "Suporte incluído"
  ];

  return (
    <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
      {/* Musical notes decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-white/10 text-4xl note-float">♪</div>
        <div className="absolute top-20 right-16 text-white/10 text-3xl note-float note-delay-1">♫</div>
        <div className="absolute bottom-20 left-20 text-white/10 text-5xl note-float note-delay-2">♩</div>
        <div className="absolute top-40 right-1/3 text-white/10 text-2xl note-float note-delay-3">♬</div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold">
              Pronto para começar sua jornada musical?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Junte-se a mais de 2.000 alunos que já transformaram suas vidas com música
            </p>
          </div>

          {/* Urgency section */}
          <div className="bg-white/10 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                🔥 Última chance - Primeira aula grátis
              </span>
            </div>
            
            <p className="text-primary-foreground/90">
              Promoção válida apenas para novos alunos
            </p>

            {/* Countdown */}
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/80">
                Tempo restante para garantir:
              </p>
              <div className="flex items-center justify-center space-x-2 text-2xl font-mono font-bold">
                <Clock className="w-6 h-6" />
                <span>{formatTime(timeLeft.hours)}h</span>
                <span>{formatTime(timeLeft.minutes)}min</span>
                <span>{formatTime(timeLeft.seconds)}seg</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            variant="secondary"
            className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 font-bold"
          >
            🎯 QUERO MINHA AULA GRÁTIS AGORA
          </Button>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-300" />
                <span className="text-primary-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="pt-8 space-y-2 text-sm text-primary-foreground/80">
            <p>📍 Disponível em todo o Brasil</p>
            <p>📱 App para iOS e Android</p>
            <p>💬 Suporte via WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFinalCTA;