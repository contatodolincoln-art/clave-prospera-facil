import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Phone, DollarSign } from 'lucide-react';

const AuthoritySection = () => {
  const [teachersCount, setTeachersCount] = React.useState(450);
  const [callsActive, setCallsActive] = React.useState(true);
  const [depositAmount, setDepositAmount] = React.useState(0);
  const [depositAnimation, setDepositAnimation] = React.useState(false);

  // Animate teacher count
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTeachersCount(prev => {
        const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        return Math.max(450, Math.min(520, prev + change));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate phone calls
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCallsActive(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Animate deposits
  React.useEffect(() => {
    const interval = setInterval(() => {
      setDepositAnimation(true);
      setDepositAmount(Math.floor(Math.random() * 500) + 100);
      setTimeout(() => setDepositAnimation(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const StatItem = ({ icon: Icon, value, label, isAnimated = false, pulse = false }) => (
    <div className="relative group">
      <div className="flex items-center gap-4 hover:scale-105 transition-all duration-300">
        <div className={`w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-glow ${pulse ? 'pulse-musical' : ''}`}>
          <Icon size={24} />
        </div>
        <div className="text-left">
          <div className={`text-3xl md:text-4xl font-bold text-foreground font-playfair ${isAnimated ? 'counter-animation' : ''}`}>
            {value}
            {pulse && <span className="inline-block w-2 h-2 rounded-full bg-green-500 ml-2 pulse-musical"></span>}
          </div>
          <p className="text-muted-foreground text-sm font-medium tracking-wide">
            {label}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary"></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            {/* All stats in one line */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto items-center">
              <div className="slide-up stagger-1">
                <StatItem 
                  icon={Users} 
                  value={`${teachersCount}+`} 
                  label="professores aguardando" 
                  isAnimated={true}
                />
              </div>
              
              <div className="slide-up stagger-2">
                <StatItem 
                  icon={Phone} 
                  value="24/7" 
                  label="Suporte dedicado" 
                  pulse={callsActive}
                />
              </div>
              
              <div className="slide-up stagger-3">
                <StatItem 
                  icon={DollarSign} 
                  value="100%" 
                  label="Pagamentos garantidos"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 slide-up stagger-4">
              <Button size="lg" variant="hero" className="text-xl px-8 py-4">
                Comece Agora - É Grátis
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Sem taxas de adesão • Suporte completo
              </p>
            </div>

            {/* Dynamic deposit animation */}
            {depositAnimation && (
              <div className="fixed bottom-8 right-8 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-glow animate-fade-in z-20">
                <div className="flex items-center gap-2">
                  <DollarSign size={16} />
                  <span className="text-sm font-semibold">+R$ {depositAmount}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;