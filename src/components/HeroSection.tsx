import React from 'react';
import { Button } from '@/components/ui/button';
import EarningsSimulator from './EarningsSimulator';
import heroIllustration from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-secondary relative overflow-hidden musical-bg">
      {/* Musical notes decoration com parallax suave */}
      <div className="absolute top-20 left-10 text-4xl text-primary/10 note-float">♪</div>
      <div className="absolute top-40 right-20 text-3xl text-accent/15 note-float" style={{ animationDelay: '1s' }}>♫</div>
      <div className="absolute bottom-32 left-1/4 text-5xl text-primary/10 note-float" style={{ animationDelay: '2s' }}>♪</div>
      
      {/* Container com spacing base 24px (gutters) */}
      <div className="container mx-auto px-6 py-16 max-w-[1140px]">
        {/* Layout 2 colunas: Texto | Ilustração */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Coluna de texto */}
          <div className="space-y-8 slide-up">
            {/* Headline forte 48-56px, peso 800 */}
            <h1 className="text-5xl md:text-6xl font-playfair font-extrabold text-foreground leading-tight">
              Sua experiência musical merece ser{' '}
              <span className="text-primary">
                bem remunerada
              </span>
            </h1>
            
            {/* Subtítulo 20-22px */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              Ensine para todo o Brasil sem sair de casa
            </p>
            
            {/* Frase de apoio com ícones musicais */}
            <div className="flex items-center gap-3 text-accent">
              <span className="text-2xl note-float">♪</span>
              <span className="text-lg font-semibold">Transforme sua paixão em renda</span>
              <span className="text-2xl note-float" style={{ animationDelay: '0.5s' }}>♫</span>
            </div>

            {/* CTAs duplos - Duolingo style */}
            <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" className="font-bold">
                🎯 Quero ser professor na Clave
              </Button>
              <Button variant="outline" size="xl" className="font-semibold">
                📖 Ver como funciona
              </Button>
            </div>
          </div>

          {/* Coluna da ilustração */}
          <div className="flex justify-center lg:justify-end slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <img 
                src={heroIllustration}
                alt="Ilustração de professor dando aula online via videochamada"
                className="w-full max-w-lg rounded-[20px] shadow-elegant hover-lift"
              />
              {/* Onda sonora pulsando - microinteração */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white pulse-musical">
                📻
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Simulator - spacing 64px */}
        <div className="mt-20 slide-up" style={{ animationDelay: '0.9s' }}>
          <EarningsSimulator />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;