import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const StudentTestimonialsSection = () => {
  const testimonials = [
    {
      text: "Eu desistia toda vez. Achava que não tinha jeito para música. Mas aqui descobri que só estava aprendendo errado. Agora toco violão todo fim de semana para os amigos!",
      author: "Rafael, 28 anos",
      location: "São Paulo • Engenheiro",
      time: "De zero ao intermediário em 6 meses",
      rating: 5,
      highlight: "Superou a frustração"
    },
    {
      text: "Minha filha chorava depois das aulas presenciais. Dizia que era muito difícil. Na Clave ela encontrou quem a entende. Hoje toca suas músicas favoritas no violão!",
      author: "Mariana, mãe da Sofia",
      location: "Belo Horizonte • Sofia tem 14 anos",
      time: "1 ano tocando com alegria",
      rating: 5,
      highlight: "Transformou frustração em paixão"
    },
    {
      text: "Aos 62 anos pensei: 'será que não é tarde demais?' Mas realizei o sonho de aprender piano. Agora toco para os netos. Nunca é tarde para começar!",
      author: "Carlos, 62 anos",
      location: "Rio de Janeiro • Aposentado",
      time: "8 meses realizando um sonho",
      rating: 5,
      highlight: "Provou que nunca é tarde"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
            <span>💝 Histórias reais</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground">
            Eles superaram a <span className="text-primary">frustração</span>. Você é o próximo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pessoas comuns que pararam de postergar e finalmente realizaram o sonho musical
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover-lift bg-white shadow-card">
              <CardContent className="p-8 space-y-6 h-full flex flex-col">
                {/* Highlight badge */}
                <div className="inline-flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary self-start">
                  <span>✨ {testimonial.highlight}</span>
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed italic flex-1 text-base">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="space-y-2 pt-4 border-t border-muted">
                  <p className="font-bold text-foreground text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    🎵 {testimonial.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA after testimonials */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            <strong>Sua história pode ser a próxima.</strong> Não deixe mais um ano passar.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary-variant font-bold text-lg px-8 py-6"
          >
            🚀 Quero Começar Minha História
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonialsSection;