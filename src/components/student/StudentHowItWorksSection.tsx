import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Video, Star } from 'lucide-react';

const StudentHowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Encontre Seu Professor",
      subtitle: "Busque por instrumento, estilo ou região",
      description: "Filtre por preço, disponibilidade e especialidade. Veja perfis completos com vídeos e avaliações."
    },
    {
      number: 2,
      icon: Calendar,
      title: "Agende Sua Primeira Aula",
      subtitle: "Escolha dia e horário que funciona para você",
      description: "Nossa agenda mostra todos os horários disponíveis em tempo real. Agende em 30 segundos."
    },
    {
      number: 3,
      icon: Video,
      title: "Tenha Sua Aula Online",
      subtitle: "Plataforma integrada, sem complicações",
      description: "Acesse direto pelo navegador ou app. Gravação da aula incluída para você revisar depois."
    },
    {
      number: 4,
      icon: Star,
      title: "Avalie e Continue Aprendendo",
      subtitle: "Feedback para melhorar sempre",
      description: "Conte como foi sua experiência e agende as próximas aulas com facilidade."
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
            <span>✨ Processo super simples</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-young-serif font-normal">
            Da primeira aula ao <span className="text-secondary">seu primeiro show</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Em 4 passos você já está tocando suas músicas favoritas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-white/10 border-white/20 hover-lift">
              <CardContent className="p-8">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-secondary font-medium">
                        {step.subtitle}
                      </p>
                      <p className="text-primary-foreground/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress indicator */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-secondary rounded-full"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6"
          >
            🚀 Começar Minha Jornada Musical
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentHowItWorksSection;