import React, { useState, useEffect } from 'react';
import { Users, Phone, DollarSign } from 'lucide-react';

const AuthoritySection = () => {
  const [teachersCount, setTeachersCount] = useState(450);
  const [callsActive, setCallsActive] = useState(true);
  const [depositAmount, setDepositAmount] = useState(0);
  const [depositAnimation, setDepositAnimation] = useState(false);

  // Animate teacher count
  useEffect(() => {
    const interval = setInterval(() => {
      setTeachersCount(prev => {
        const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        return Math.max(450, Math.min(520, prev + change));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate phone calls
  useEffect(() => {
    const interval = setInterval(() => {
      setCallsActive(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Animate deposits
  useEffect(() => {
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
        <div className={`w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow ${pulse ? 'pulse-musical' : ''}`}>
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
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-primary"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-contrast"></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            {/* Large centered stat */}
            <div className="text-center mb-16 slide-up">
              <div className="inline-flex items-center gap-6 bg-card/30 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                  <Users size={32} />
                </div>
                <div className="text-left">
                  <div className="text-6xl md:text-7xl font-bold text-foreground font-playfair counter-animation">
                    {teachersCount}+
                  </div>
                  <p className="text-xl text-muted-foreground font-medium">
                    professores aguardando
                  </p>
                </div>
              </div>
            </div>

            {/* Side stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="slide-up stagger-1">
                <StatItem 
                  icon={Phone} 
                  value="24/7" 
                  label="Suporte dedicado" 
                  pulse={callsActive}
                />
              </div>
              
              <div className="slide-up stagger-2">
                <StatItem 
                  icon={DollarSign} 
                  value="100%" 
                  label="Pagamentos garantidos"
                />
              </div>
            </div>

            {/* Dynamic deposit animation */}
            {depositAnimation && (
              <div className="fixed bottom-8 right-8 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full shadow-glow animate-fade-in z-20">
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