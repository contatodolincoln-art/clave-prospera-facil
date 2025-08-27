import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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

  const AnimatedTeachersCard = () => (
    <Card className="text-center p-8 border bg-card">
      <CardContent className="space-y-4 p-0">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          <Users size={32} />
        </div>
        
        <div className="space-y-2">
          <div className="text-4xl font-bold text-foreground">
            {teachersCount}+
          </div>
          <p className="text-muted-foreground font-medium">
            professores aguardando
          </p>
        </div>
      </CardContent>
    </Card>
  );

  const AnimatedPhoneCard = () => (
    <Card className="text-center p-8 border bg-card">
      <CardContent className="space-y-4 p-0">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          <Phone size={32} />
        </div>
        
        <div className="space-y-2">
          <div className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
            24/7
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
          </div>
          <p className="text-muted-foreground font-medium">
            Suporte dedicado
          </p>
        </div>
      </CardContent>
    </Card>
  );

  const AnimatedPaymentCard = () => (
    <Card className="text-center p-8 border bg-card">
      <CardContent className="space-y-4 p-0">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          <DollarSign size={32} />
        </div>
        
        <div className="space-y-2">
          <div className="text-4xl font-bold text-foreground">
            100%
          </div>
          <p className="text-muted-foreground font-medium">
            Pagamentos garantidos
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <AnimatedTeachersCard />
          <AnimatedPhoneCard />
          <AnimatedPaymentCard />
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;