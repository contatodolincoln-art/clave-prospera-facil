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
          {/* Main heading */}
          <div className="space-y-6 slide-up">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-tight">
              Sua experiência musical merece ser{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                bem remunerada
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Ensine para todo o Brasil sem sair de casa
            </p>
            
            <div className="flex items-center justify-center gap-2 text-primary">
              <span className="text-2xl note-float">♪</span>
              <span className="text-lg font-medium">Transforme sua paixão em renda</span>
              <span className="text-2xl note-float" style={{ animationDelay: '0.5s' }}>♫</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              🎯 Garantir minha vaga como professor
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              📖 Ver como funciona
            </Button>
          </div>

          {/* Earnings Simulator */}
          <div className="mt-16 slide-up" style={{ animationDelay: '0.6s' }}>
            <EarningsSimulator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;