import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Home, Target } from 'lucide-react';

const StudentValueSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Professores Selecionados",
      description: "Só trabalhamos com profissionais qualificados e experientes. Cada professor passa por nossa rigorosa aprovação."
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Agende suas aulas quando quiser. Manhã, tarde, noite ou fim de semana - você escolhe."
    },
    {
      icon: DollarSign,
      title: "Preços Justos",
      description: "Pague apenas pelas aulas que fizer. Sem mensalidades escondidas ou taxas extras."
    },
    {
      icon: Home,
      title: "100% Online",
      description: "Aprenda de onde estiver. Só precisa de internet e um dispositivo. Simples assim."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground">
            Por que a Clave é diferente?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center h-full">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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