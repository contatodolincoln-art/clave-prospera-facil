import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const StudentPriceSimulator = () => {
  const [lessonsPerMonth, setLessonsPerMonth] = useState([8]);
  const [duration, setDuration] = useState("45");
  const [instrument, setInstrument] = useState("violao");

  const pricePerLesson = {
    "30": 45,
    "45": 60,
    "60": 80
  };

  const totalInvestment = lessonsPerMonth[0] * pricePerLesson[duration as keyof typeof pricePerLesson];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const instruments = [
    { value: "violao", label: "Violão" },
    { value: "piano", label: "Piano" },
    { value: "guitarra", label: "Guitarra" },
    { value: "bateria", label: "Bateria" },
    { value: "canto", label: "Canto" },
    { value: "baixo", label: "Baixo" },
    { value: "ukulele", label: "Ukulele" },
    { value: "flauta", label: "Flauta" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-playfair font-bold text-foreground">
                Calcule quanto você vai investir
              </h2>
              <p className="text-muted-foreground">
                Ajuste os controles e veja o valor das suas aulas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Aulas por mês */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">
                    Aulas por mês
                  </label>
                  <span className="text-lg font-semibold text-primary">
                    {lessonsPerMonth[0]} aulas
                  </span>
                </div>
                <Slider
                  value={lessonsPerMonth}
                  onValueChange={setLessonsPerMonth}
                  max={20}
                  min={4}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>4 aulas</span>
                  <span>20 aulas</span>
                </div>
              </div>

              {/* Duração */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground block">
                  Duração por aula
                </label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutos</SelectItem>
                    <SelectItem value="45">45 minutos</SelectItem>
                    <SelectItem value="60">60 minutos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Instrumento */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground block">
                  Tipo de instrumento
                </label>
                <Select value={instrument} onValueChange={setInstrument}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {instruments.map((inst) => (
                      <SelectItem key={inst.value} value={inst.value}>
                        {inst.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results */}
            <div className="text-center space-y-4 p-8 bg-primary rounded-xl text-primary-foreground">
              <div className="space-y-2">
                <p className="text-sm opacity-90">
                  Seu investimento mensal:
                </p>
                <div className="text-4xl font-playfair font-bold">
                  {formatCurrency(totalInvestment)}
                </div>
                <p className="text-sm opacity-90">
                  Aproximadamente {formatCurrency(pricePerLesson[duration as keyof typeof pricePerLesson])} por aula
                </p>
              </div>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold mt-6"
              >
                🎯 Quero Começar Agora
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StudentPriceSimulator;