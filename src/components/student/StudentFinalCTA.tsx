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
    <section className="relative py-20 bg-gradient-to-br from-primary via-primary-variant to-primary text-primary-foreground overflow-hidden">
      {/* Musical notes decoration - enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-white/15 text-4xl note-float">♪</div>
        <div className="absolute top-20 right-16 text-white/15 text-3xl note-float stagger-1">♫</div>
        <div className="absolute bottom-20 left-20 text-white/15 text-5xl note-float stagger-2">♩</div>
        <div className="absolute top-40 right-1/3 text-white/15 text-2xl note-float stagger-3">♬</div>
        <div className="absolute bottom-40 right-10 text-white/10 text-3xl note-float stagger-4">♭</div>
        <div className="absolute top-60 left-1/4 text-white/10 text-4xl note-float stagger-1">♯</div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
              <span>🎉 Momento de transformar sua vida</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold">
              Seu <span className="text-secondary underline decoration-4">sonho musical</span> começa agora
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Junte-se a <strong>mais de 2.000 alunos</strong> que já transformaram frustração em música
            </p>
          </div>

            {/* Urgency section */}
            <div className="bg-white/10 rounded-2xl p-8 space-y-6 hover-lift">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">
                  🔥 Última chance - Primeira aula 100% grátis
                </span>
              </div>
              
              <p className="text-primary-foreground/90">
                <strong>Somente hoje</strong> para quem nunca teve aula na Clave
              </p>

              {/* Countdown */}
              <div className="space-y-3">
                <p className="text-sm text-primary-foreground/80">
                  ⏰ Garanta sua vaga grátis em:
                </p>
                <div className="flex items-center justify-center space-x-2 text-2xl font-mono font-bold bg-white/10 p-4 rounded-xl">
                  <Clock className="w-6 h-6" />
                  <span className="counter-animation">{formatTime(timeLeft.hours)}h</span>
                  <span className="counter-animation">{formatTime(timeLeft.minutes)}min</span>
                  <span className="counter-animation">{formatTime(timeLeft.seconds)}seg</span>
                </div>
                <div className="text-xs text-primary-foreground/70">
                  💫 Depois disso, volta ao preço normal
                </div>
              </div>
            </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 font-bold hover-lift"
            >
              🎯 QUERO MINHA AULA GRÁTIS AGORA
            </Button>
            <p className="text-sm text-primary-foreground/70">
              ↑ Clique e comece em menos de 2 minutos
            </p>
          </div>

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