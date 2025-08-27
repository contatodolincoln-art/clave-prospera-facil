import React from 'react';
import { Button } from '@/components/ui/button';
import EarningsSimulator from './EarningsSimulator';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Musical notes decoration */}
      <div className="absolute top-20 left-10 text-6xl text-primary/20 note-float">♪</div>
      <div className="absolute top-40 right-20 text-4xl text-primary/30 note-float" style={{ animationDelay: '1s' }}>♫</div>
      <div className="absolute bottom-32 left-1/4 text-5xl text-primary/20 note-float" style={{ animationDelay: '2s' }}>♪</div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main heading - Hierarquia refinada */}
          <div className="space-y-6 slide-up">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-foreground leading-tight">
              Sua experiência musical merece ser{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                bem remunerada
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Ensine para todo o Brasil sem sair de casa
            </p>
            
            <div className="flex items-center justify-center gap-3 text-primary">
              <span className="text-3xl note-float">♪</span>
              <span className="text-xl font-semibold">Transforme sua paixão em renda</span>
              <span className="text-3xl note-float" style={{ animationDelay: '0.5s' }}>♫</span>
            </div>
          </div>

          {/* CTAs reforçados */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="default" size="lg" className="text-xl px-12 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground btn-musical shadow-elegant">
              🎯 Garantir minha vaga como professor
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-6 h-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              📖 Ver como funciona
            </Button>
          </div>

          {/* Earnings Simulator */}
          <div className="mt-20 slide-up" style={{ animationDelay: '0.6s' }}>
            <EarningsSimulator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;