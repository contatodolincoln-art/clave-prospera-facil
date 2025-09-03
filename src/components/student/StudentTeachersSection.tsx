import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const StudentTeachersSection = () => {
  const teachers = [
    {
      name: "João Silva",
      instrument: "Violão Popular",
      experience: "15 anos de experiência",
      rating: 4.9,
      price: 55,
      specialty: "Especialista em MPB e Pop Rock brasileiro",
      emoji: "🎸"
    },
    {
      name: "Ana Costa",
      instrument: "Piano Clássico",
      experience: "12 anos de experiência",
      rating: 4.8,
      price: 65,
      specialty: "Do iniciante ao avançado com metodologia personalizada",
      emoji: "🎹"
    },
    {
      name: "Pedro Santos",
      instrument: "Bateria",
      experience: "10 anos de experiência",
      rating: 5.0,
      price: 70,
      specialty: "Rock, Pop, Jazz e ritmos brasileiros",
      emoji: "🥁"
    },
    {
      name: "Carla Lima",
      instrument: "Canto Popular",
      experience: "8 anos de experiência",
      rating: 4.9,
      price: 60,
      specialty: "Técnica vocal e interpretação para todos os estilos",
      emoji: "🎤"
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground">
            Conheça alguns dos nossos professores
          </h2>
          <p className="text-xl text-muted-foreground">
            Profissionais qualificados e aprovados pela Clave
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teachers.map((teacher, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 space-y-4 h-full flex flex-col">
                {/* Teacher emoji and name */}
                <div className="text-center space-y-2">
                  <div className="text-4xl">{teacher.emoji}</div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {teacher.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {teacher.instrument}
                  </p>
                </div>

                {/* Experience and rating */}
                <div className="space-y-2 flex-1">
                  <p className="text-sm text-muted-foreground">
                    {teacher.experience}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-sm font-medium">{teacher.rating}</span>
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm font-medium text-primary">
                      {formatCurrency(teacher.price)}/aula
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground italic text-center">
                    "{teacher.specialty}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            🎯 Ver Todos os Professores
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentTeachersSection;