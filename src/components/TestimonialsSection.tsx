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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-foreground">
              O que nossos professores dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de transformação e sucesso
            </p>
          </div>

          <Card className="bg-gradient-primary-dark border-0 shadow-glow slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-8">
                {/* Profile */}
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-secondary-warm rounded-full flex items-center justify-center text-2xl text-tab-primary-fg font-bold mx-auto">
                    {currentData.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-tab-primary-fg">
                      {currentData.name}
                    </h3>
                    <p className="text-tab-primary-fg/80">
                      Professora de {currentData.instrument}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-xl text-tab-primary-fg italic leading-relaxed max-w-2xl">
                  "{currentData.text}"
                </blockquote>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">
                      {currentData.earnings}
                    </div>
                    <p className="text-sm text-tab-primary-fg/70">
                      Renda mensal
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">
                      {currentData.students}
                    </div>
                    <p className="text-sm text-tab-primary-fg/70">
                      Alunos ativos
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full text-tab-primary-fg hover:bg-tab-primary-fg/10"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-secondary' : 'bg-tab-primary-fg/30'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full text-tab-primary-fg hover:bg-tab-primary-fg/10"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;