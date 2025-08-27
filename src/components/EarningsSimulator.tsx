import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';

const EarningsSimulator = () => {
  const [days, setDays] = useState([15]);
  const [hoursPerDay, setHoursPerDay] = useState([4]);
  
  const pricePerHour = 31.25; // R$ 31,25 por hora trabalhada
  const classesPerHour = 2; // Cada aula dura 30min, então 2 aulas por hora
  
  const totalHours = days[0] * hoursPerDay[0];
  const totalClasses = totalHours * classesPerHour;
  const totalEarnings = totalHours * pricePerHour;

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
    // 1 = 1h, 2 = 2h, etc.
    return sliderValue;
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
                {hoursPerDay[0]}h
              </span>
            </div>
            <Slider
              value={hoursPerDay}
              onValueChange={setHoursPerDay}
              max={12} // 12 horas máximo
              min={1}  // 1 hora mínimo
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1h</span>
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
            <p className="text-xs opacity-80">
              * Cada aula dura 30 minutos
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm opacity-90">
              Ganhos mensais estimados
            </p>
            <div className="text-4xl font-playfair font-bold counter-animation">
              {formatCurrency(totalEarnings)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsSimulator;