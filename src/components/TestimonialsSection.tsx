import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Maria Fernanda",
      instrument: "Piano", 
      image: "MF",
      rating: 5,
      text: "A Clave transformou minha carreira musical. Em 3 meses já tenho uma agenda fixa de 20 alunos e renda consistente de R$ 2.500 por mês.",
      earnings: "R$ 2.500/mês",
      students: 20
    },
    {
      name: "Carlos Eduardo",
      instrument: "Violão",
      image: "CE", 
      rating: 5,
      text: "Nunca pensei que ensinar online pudesse ser tão gratificante. A plataforma me conecta com alunos realmente comprometidos.",
      earnings: "R$ 3.200/mês",
      students: 28
    },
    {
      name: "Ana Beatriz",
      instrument: "Canto",
      image: "AB",
      rating: 5,
      text: "O suporte da equipe é excepcional. Eles entendem as necessidades dos professores e sempre estão prontos para ajudar.",
      earnings: "R$ 1.800/mês",
      students: 15
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-secondary musical-bg">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="max-w-4xl mx-auto">
          {/* Título Duolingo-style */}
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              O que nossos professores{' '}
              <span className="text-primary">realmente dizem</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais • Resultados verificados
            </p>
          </div>

          {/* Card de depoimento com styling Duolingo */}
          <Card className="bg-card-variant border-0 shadow-elegant slide-up hover-lift" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                {/* Profile */}
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-2xl text-primary-foreground font-bold mx-auto">
                    {currentData.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {currentData.name}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      Professor(a) de {currentData.instrument}
                    </p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Depoimento */}
                <blockquote className="text-lg text-foreground italic leading-relaxed max-w-2xl font-medium">
                  "{currentData.text}"
                </blockquote>

                {/* Stats em chips */}
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-primary rounded-[20px] px-6 py-3">
                    <div className="text-xl font-bold text-primary-foreground">
                      {currentData.earnings}
                    </div>
                    <p className="text-sm text-primary-foreground/80">
                      Renda mensal
                    </p>
                  </div>
                  <div className="bg-accent rounded-[20px] px-6 py-3">
                    <div className="text-xl font-bold text-accent-foreground">
                      {currentData.students}
                    </div>
                    <p className="text-sm text-accent-foreground/80">
                      Alunos ativos
                    </p>
                  </div>
                </div>

                {/* Navigation com estilo Duolingo */}
                <div className="flex justify-center items-center gap-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full bg-card hover:bg-accent/10"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentTestimonial ? 'bg-primary scale-125' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full bg-card hover:bg-accent/10"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA após depoimentos */}
          <div className="text-center mt-12 slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg">
              🌟 Quero estar entre esses professores
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Junte-se a centenas de professores bem-sucedidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;