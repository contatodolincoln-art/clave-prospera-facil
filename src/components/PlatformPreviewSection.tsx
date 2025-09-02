import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, TrendingUp, Users, Clock, Award } from 'lucide-react';
import platformMockup from '@/assets/platform-mockup.jpg';
import teacherBadge from '@/assets/teacher-badge.jpg';
const PlatformPreviewSection = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const tabs = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: TrendingUp
  }, {
    id: 'students',
    label: 'Meus Alunos',
    icon: Users
  }, {
    id: 'schedule',
    label: 'Agenda',
    icon: Calendar
  }, {
    id: 'recognition',
    label: 'Reconhecimento',
    icon: Award
  }];
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-primary text-primary-foreground p-6">
                <CardContent className="space-y-2 p-0">
                  <div className="text-3xl font-bold">R$ 3.750</div>
                  <p className="text-sm opacity-90">Ganhos este mês</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary text-secondary-foreground p-6">
                <CardContent className="space-y-2 p-0">
                  <div className="text-3xl font-bold">120</div>
                  <p className="text-sm">Aulas realizadas</p>
                </CardContent>
              </Card>
              <Card className="bg-accent text-accent-foreground p-6">
                <CardContent className="space-y-2 p-0">
                  <div className="text-3xl font-bold">4.9★</div>
                  <p className="text-sm">Avaliação média</p>
                </CardContent>
              </Card>
            </div>
            <img src={platformMockup} alt="Dashboard da plataforma Clave" className="w-full rounded-xl shadow-elegant" />
          </div>;
      case 'students':
        return <div className="space-y-4">
            {[{
            name: 'Ana Silva',
            instrument: 'Piano',
            progress: 85,
            status: 'Ativa'
          }, {
            name: 'Carlos Lima',
            instrument: 'Violão',
            progress: 72,
            status: 'Ativa'
          }, {
            name: 'Maria Santos',
            instrument: 'Piano',
            progress: 93,
            status: 'Ativa'
          }].map((student, index) => <Card key={index} className="p-4">
                <CardContent className="flex items-center justify-between p-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{student.name}</h4>
                      <p className="text-sm text-muted-foreground">{student.instrument}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{student.status}</Badge>
                    <p className="text-sm text-muted-foreground mt-1">Progresso: {student.progress}%</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>;
      case 'schedule':
        return <div className="space-y-4">
            {[{
            time: '09:00',
            student: 'Ana Silva',
            instrument: 'Piano',
            status: 'confirmada'
          }, {
            time: '14:30',
            student: 'Carlos Lima',
            instrument: 'Violão',
            status: 'confirmada'
          }, {
            time: '16:00',
            student: 'Maria Santos',
            instrument: 'Piano',
            status: 'pendente'
          }, {
            time: '19:30',
            student: 'João Pedro',
            instrument: 'Piano',
            status: 'confirmada'
          }].map((classItem, index) => <Card key={index} className="p-4">
                <CardContent className="flex items-center justify-between p-0">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-lg">
                      <Clock size={14} />
                      {classItem.time}
                    </div>
                    <div>
                      <h4 className="font-semibold">{classItem.student}</h4>
                      <p className="text-sm text-muted-foreground">{classItem.instrument}</p>
                    </div>
                  </div>
                  <Badge variant={classItem.status === 'confirmada' ? 'default' : 'secondary'}>
                    {classItem.status}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>;
      case 'recognition':
        return <div className="text-center space-y-8">
            <div className="space-y-4">
              <img src={teacherBadge} alt="Badge de reconhecimento Clave" className="w-32 h-32 mx-auto rounded-full shadow-glow" />
              <div>
                <h4 className="text-2xl font-bold text-primary">Professor Verificado</h4>
                <p className="text-muted-foreground">Selo de excelência Clave</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <CardContent className="space-y-2 p-0">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto" />
                  <div className="text-lg font-bold">4.9★</div>
                  <p className="text-sm text-muted-foreground">Avaliação</p>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="space-y-2 p-0">
                  <Users className="w-8 h-8 text-primary mx-auto" />
                  <div className="text-lg font-bold">156</div>
                  <p className="text-sm text-muted-foreground">Alunos</p>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="space-y-2 p-0">
                  <Award className="w-8 h-8 text-secondary mx-auto" />
                  <div className="text-lg font-bold">2 anos</div>
                  <p className="text-sm text-muted-foreground">Na Clave</p>
                </CardContent>
              </Card>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <section className="py-24 bg-tab-cream-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16 slide-up">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground">
              Veja como será sua <span className="text-primary">experiência real</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Um ecossistema completo pensado para valorizar você como professor
            </p>
          </div>

          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 slide-up" style={{
          animationDelay: '0.2s'
        }}>
            {tabs.map(tab => {
            const Icon = tab.icon;
            return <Button key={tab.id} variant={activeTab === tab.id ? "default" : "outline"} onClick={() => setActiveTab(tab.id)} className="flex items-center gap-2 px-6 py-3 text-base">
                  <Icon size={18} />
                  {tab.label}
                </Button>;
          })}
          </div>

          {/* Tab content */}
          <Card className="p-8 bg-background border-0 shadow-elegant slide-up" style={{
          animationDelay: '0.4s'
        }}>
            <CardContent className="p-0">
              {renderTabContent()}
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-16 slide-up" style={{
          animationDelay: '0.6s'
        }}>
            
            <Button size="lg" variant="hero" className="text-xl px-12 py-6 h-auto">
              Quero acessar meu painel agora
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Configure sua conta agora mesmo!</p>
          </div>
        </div>
      </div>
    </section>;
};
export default PlatformPreviewSection;