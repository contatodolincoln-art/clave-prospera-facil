import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, DollarSign } from 'lucide-react';

const TeacherProfile = () => {
  const todayClasses = [
    { time: "09:00", student: "Ana Silva", instrument: "Piano" },
    { time: "14:30", student: "Carlos Lima", instrument: "Violão" },
    { time: "16:00", student: "Maria Santos", instrument: "Piano" },
    { time: "19:30", student: "João Pedro", instrument: "Piano" }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-foreground">
              Conheça o Professor João Silva
            </h2>
            <p className="text-xl text-muted-foreground">
              Um exemplo real de sucesso na nossa plataforma
            </p>
          </div>

          <Card className="max-w-md mx-auto bg-card border-0 shadow-glow slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8 space-y-6">
              {/* Profile header */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl text-primary-foreground font-bold mx-auto">
                  JS
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Professor João Silva
                  </h3>
                  <p className="text-muted-foreground">Especialista em Violão</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full pulse-musical"></div>
                    <span className="text-sm text-green-600 font-medium">Ativo agora</span>
                  </div>
                </div>
              </div>

              {/* Today's schedule */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Calendar size={16} />
                  <span>Agenda de hoje</span>
                </div>
                
                <div className="space-y-3">
                  {todayClasses.map((classItem, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-gradient-warm rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs text-primary font-medium">
                          <Clock size={12} />
                          {classItem.time}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {classItem.student}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {classItem.instrument}
                          </p>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly earnings */}
              <div className="text-center p-4 bg-gradient-primary rounded-lg text-primary-foreground">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign size={16} />
                  <span className="text-sm font-medium">Ganhos do mês</span>
                </div>
                <div className="text-3xl font-bold counter-animation">
                  R$ 2.760
                </div>
                <p className="text-xs opacity-80 mt-1">
                  88 aulas realizadas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;