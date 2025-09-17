import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Home, Target, X, CheckCircle } from 'lucide-react';

const StudentValueSection = () => {
  const problems = [
    { text: "Aulas presenciais caras e distantes", solved: true },
    { text: "Horários rígidos que não cabem na agenda", solved: true },
    { text: "Professores que não entendem seu estilo", solved: true },
    { text: "Medo de gastar e não conseguir aprender", solved: true }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Professores que Te Entendem",
      description: "Cada professor é selecionado por expertise e didática. Eles sabem como te motivar e adaptar o ensino ao seu perfil.",
      highlight: "Aprovados com rigor"
    },
    {
      icon: Clock,
      title: "Encaixa na Sua Vida",
      description: "Manhã, tarde, noite, fim de semana. Você escolhe quando e onde aprender. Sua música, sua agenda.",
      highlight: "Total flexibilidade"
    },
    {
      icon: DollarSign,
      title: "Investimento Transparente",
      description: "Sem pegadinhas. Pague apenas pelas aulas que fizer. Preços justos que cabem no seu bolso.",
      highlight: "Sem surpresas"
    },
    {
      icon: Home,
      title: "Do Sofá ao Palco",
      description: "Transforme qualquer lugar em seu estúdio. Só precisa de internet. Simples, prático, eficiente.",
      highlight: "100% online"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Problems solved section */}
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-3xl lg:text-4xl font-young-serif font-normal text-foreground">
            Chega de <span className="text-primary">frustração</span> com música
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabemos exatamente o que te impedia de começar. Por isso criamos a solução para cada problema.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-xl">
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-muted-foreground line-through text-sm">{problem.text}</span>
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Solutions section */}
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-2xl lg:text-3xl font-young-serif font-normal text-foreground">
            Por isso a Clave é <span className="text-primary">a escolha certa</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center h-full hover-lift interactive-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-primary font-medium uppercase tracking-wide">
                    {benefit.highlight}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentValueSection;