import { Button } from '@/components/ui/button';
import { Check, Play } from 'lucide-react';

const StudentHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Musical notes decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 text-4xl note-float">♪</div>
        <div className="absolute top-40 right-16 text-primary/20 text-3xl note-float note-delay-1">♫</div>
        <div className="absolute bottom-32 left-20 text-primary/20 text-5xl note-float note-delay-2">♩</div>
        <div className="absolute top-60 left-1/3 text-primary/20 text-2xl note-float note-delay-3">♬</div>
        <div className="absolute bottom-20 right-1/4 text-primary/20 text-4xl note-float note-delay-1">♪</div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 slide-up">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                Aprenda música com os <span className="text-primary">melhores professores</span> do Brasil
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Direto da sua casa, no seu ritmo, com quem realmente entende do assunto.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Encontre o professor ideal para você em segundos. Aulas online personalizadas que cabem na sua agenda e no seu orçamento.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Primeira aula experimental grátis</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Professores verificados e aprovados</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Horários flexíveis 7 dias por semana</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6">
                📱 Encontrar Meu Professor
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Ver Como Funciona
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative slide-up slide-delay-1">
            <div className="relative">
              <img 
                src="/src/assets/hero-call-illustration.jpg"
                alt="Aluno tendo aula de música online"
                className="w-full h-auto rounded-3xl shadow-hero"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg badge-float">
                🎵 Aula ao vivo
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg badge-float badge-delay-1">
                ⭐ 100% Online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHeroSection;