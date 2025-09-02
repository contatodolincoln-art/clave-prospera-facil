import React from 'react';
import { Button } from '@/components/ui/button';
import EarningsSimulator from './EarningsSimulator';
import heroCallIllustration from '@/assets/hero-call-illustration.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-tab-cream-bg relative overflow-hidden">
      {/* Musical notes decoration with parallax effect */}
      <div className="absolute top-20 left-10 text-6xl text-primary/20 note-float">♪</div>
      <div className="absolute top-40 right-20 text-4xl text-primary/30 note-float" style={{ animationDelay: '1s' }}>♫</div>
      <div className="absolute bottom-32 left-1/4 text-5xl text-primary/20 note-float" style={{ animationDelay: '2s' }}>♪</div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 slide-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground leading-tight">
                Transforme sua paixão em{' '}
                <span className="text-primary">
                  profissão
                </span>
                {' '}sem complicações
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Ensine música online para todo o Brasil. A Clave cuida de tudo para você focar no que ama: <strong>ensinar</strong>.
              </p>
              
              <div className="flex items-center gap-3 text-primary bg-primary/10 px-6 py-3 rounded-full inline-flex">
                <span className="text-2xl note-float">♪</span>
                <span className="text-lg font-semibold">Sua experiência musical merece reconhecimento</span>
                <span className="text-2xl note-float" style={{ animationDelay: '0.5s' }}>♫</span>
              </div>
            </div>

            {/* CTAs estilo Duolingo */}
            <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="lg" className="text-lg px-10 py-4 h-auto">
                🎯 Quero ser professor na Clave
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                📱 Ver como funciona
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cadastro 100% gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Primeiros ganhos em 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img 
                src="/lovable-uploads/e60433c9-4e09-40bf-89de-afecda6a7009.png" 
                alt="Professor ensinando música online" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Aula ao vivo
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                🎵 Interativo
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Simulator */}
        <div className="mt-24 slide-up" style={{ animationDelay: '0.6s' }}>
          <EarningsSimulator />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;