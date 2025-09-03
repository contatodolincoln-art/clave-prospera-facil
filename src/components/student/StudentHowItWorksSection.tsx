import { Card, CardContent } from '@/components/ui/card';
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em 4 passos simples você já está aprendendo música
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-8">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {step.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentHowItWorksSection;