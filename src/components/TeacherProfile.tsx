import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeacherProfile = () => {
  const todayClasses = [
    { time: "09:00", student: "Ana Silva", instrument: "Piano" },
    { time: "14:30", student: "Carlos Lima", instrument: "Violão" },
    { time: "16:00", student: "Maria Santos", instrument: "Piano" },
    { time: "19:30", student: "João Pedro", instrument: "Piano" }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 mb-16 slide-up">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground">
              Conheça o Professor <span className="text-primary">João Silva</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium">
              Um exemplo real de sucesso na nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <Card className="bg-background border-0 shadow-elegant slide-up card-musical">
              <CardContent className="p-10 space-y-8">
                {/* Profile header */}
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-3xl text-primary-foreground font-bold mx-auto shadow-glow">
                    JS
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-playfair">
                      Professor João Silva
                    </h3>
                    <p className="text-lg text-muted-foreground">Especialista em Violão</p>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full pulse-musical"></div>
                      <span className="text-sm text-green-600 font-medium">Ativo agora</span>
                    </div>
                  </div>
                </div>

                {/* Today's schedule */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar size={20} />
                    <span className="font-semibold text-lg">Agenda de hoje</span>
                  </div>
                  
                  <div className="space-y-4">
                    {todayClasses.map((classItem, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 bg-card rounded-xl shadow-soft"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-lg">
                            <Clock size={14} />
                            {classItem.time}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {classItem.student}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {classItem.instrument}
                            </p>
                          </div>
                        </div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats and CTA */}
            <div className="space-y-8 slide-up" style={{ animationDelay: '0.3s' }}>
              {/* Monthly earnings */}
              <Card className="text-center p-8 bg-primary text-primary-foreground shadow-glow">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <DollarSign size={24} />
                    <span className="text-xl font-semibold">Ganhos do mês</span>
                  </div>
                  <div className="text-5xl font-bold counter-animation">
                    R$ 2.760
                  </div>
                  <p className="text-lg opacity-90">
                    88 aulas realizadas
                  </p>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center space-y-6">
                <p className="text-xl text-muted-foreground">
                  Você também pode ter resultados como o João!
                </p>
                <Button size="lg" variant="hero" className="text-xl px-10 py-6 h-auto">
                  🎯 Quero me tornar professor agora
                </Button>
                <p className="text-sm text-muted-foreground">
                  Cadastro gratuito • Primeiros ganhos em 7 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;