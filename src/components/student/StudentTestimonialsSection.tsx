import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const StudentTestimonialsSection = () => {
  const testimonials = [
    {
      text: "Sempre quis aprender violão, mas nunca tinha tempo para sair de casa. Com a Clave consegui encaixar as aulas na minha rotina e já toco 10 músicas!",
      author: "Rafael, 28 anos",
      location: "São Paulo",
      time: "6 meses na Clave",
      rating: 5
    },
    {
      text: "Minha filha estava desanimada com as aulas presenciais. Na Clave ela encontrou uma professora que ensina exatamente o estilo que ela gosta!",
      author: "Mariana, mãe da Sofia, 14 anos",
      location: "Belo Horizonte",
      time: "1 ano na Clave",
      rating: 5
    },
    {
      text: "Aposentei e realizei o sonho de aprender piano. Meu professor tem uma paciência incrível e adapta tudo para mim.",
      author: "Carlos, 62 anos",
      location: "Rio de Janeiro",
      time: "8 meses na Clave",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground">
            Depoimentos de Alunos
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos alunos falam sobre a experiência
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-8 space-y-6 h-full flex flex-col">
                {/* Rating */}
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed italic flex-1">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonialsSection;