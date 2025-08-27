import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';

const EarningsSimulator = () => {
  const [days, setDays] = useState([15]);
  const [hoursPerDay, setHoursPerDay] = useState([4]);
  
  const pricePerClass = 31.25;
  const classesPerHour = 1; // Assuming 1 hour classes
  
  const totalClasses = days[0] * hoursPerDay[0] * classesPerHour;
  const totalEarnings = totalClasses * pricePerClass;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatMinutesToHours = (totalMinutes: number) => {
    if (totalMinutes < 60) {
      return `${totalMinutes}min`;
    }
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return minutes > 0 ? `${hours}h ${minutes}min` : `${hours}h`;
  };

  const getHoursDisplay = (sliderValue: number) => {
    // Convert slider value to actual time
    // 0 = 15min, 1 = 30min, 2 = 45min, 3 = 1h, etc.
    const totalMinutes = sliderValue === 0 ? 15 : sliderValue * 15;
    if (totalMinutes >= 60) {
      return Math.floor(totalMinutes / 60);
    }
    return totalMinutes / 60; // For values less than 1 hour
  };

  return (
    <Card className="bg-gradient-warm p-8 max-w-2xl mx-auto border-0 shadow-glow">
      <CardContent className="space-y-8 p-0">
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-playfair font-semibold text-foreground">
            Simule seus ganhos como professor ♪
          </h3>
          <p className="text-muted-foreground">
            Ajuste os controles e veja quanto você pode ganhar
          </p>
        </div>

        <div className="space-y-8">
          {/* Days slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-foreground">
                Dias no mês
              </label>
              <span className="text-lg font-semibold text-primary">
                {days[0]} dias
              </span>
            </div>
            <Slider
              value={days}
              onValueChange={setDays}
              max={30}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 dia</span>
              <span>30 dias</span>
            </div>
          </div>

          {/* Hours per day slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-foreground">
                Horas por dia
              </label>
              <span className="text-lg font-semibold text-primary">
                {formatMinutesToHours(hoursPerDay[0] * 15)}
              </span>
            </div>
            <Slider
              value={hoursPerDay}
              onValueChange={setHoursPerDay}
              max={48} // 48 * 15min = 12 hours
              min={1}  // 1 * 15min = 15min
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>15min</span>
              <span>12h</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="text-center space-y-4 p-6 bg-gradient-primary rounded-xl text-primary-foreground">
          <div className="space-y-2">
            <p className="text-sm opacity-90">
              Você daria aproximadamente
            </p>
            <div className="text-3xl font-bold counter-animation">
              {totalClasses} aulas
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm opacity-90">
              Ganhos mensais estimados
            </p>
            <div className="text-4xl font-playfair font-bold counter-animation">
              {formatCurrency(totalEarnings)}
            </div>
            <p className="text-xs opacity-80">
              * Baseado em R$ 31,25 por aula
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsSimulator;