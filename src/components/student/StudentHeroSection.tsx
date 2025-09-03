import { Button } from '@/components/ui/button';
import { Check, Play, Heart, Clock, Users } from 'lucide-react';

const StudentHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground overflow-hidden">
      {/* Musical notes floating animation - unique student experience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-white/20 text-4xl note-float">♪</div>
        <div className="absolute top-40 right-16 text-white/20 text-3xl note-float stagger-1">♫</div>
        <div className="absolute bottom-32 left-20 text-white/20 text-5xl note-float stagger-2">♩</div>
        <div className="absolute top-60 left-1/3 text-white/20 text-2xl note-float stagger-3">♬</div>
        <div className="absolute bottom-20 right-1/4 text-white/20 text-4xl note-float stagger-1">♪</div>
        <div className="absolute top-80 right-10 text-white/15 text-3xl note-float stagger-4">♭</div>
        <div className="absolute bottom-40 left-1/2 text-white/15 text-2xl note-float stagger-2">♯</div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4 text-red-300" />
                <span>Seu sonho de tocar música começa aqui</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
                Aprenda música <span className="text-secondary">nunca foi tão</span> <span className="underline decoration-secondary decoration-4">acessível</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Direto da sua casa, no seu ritmo, com professores que <strong>realmente entendem você</strong>.
              </p>
              
              <p className="text-lg text-primary-foreground/80">
                Acabou a frustração de desistir antes de começar. Acabaram as desculpas de falta de tempo ou professor longe demais.
              </p>
            </div>

            {/* Pain points solved */}
            <div className="grid grid-cols-2 gap-4 bg-white/10 p-6 rounded-2xl">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Sem sair de casa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Preços justos</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Horário flexível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Primeira aula grátis</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-bold">
                🎯 Comece Hoje com Aula Grátis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
                <Play className="w-5 h-5 mr-2" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-sm text-primary-foreground/80">+2.000 alunos ativos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm text-primary-foreground/80">Disponível 7 dias</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Experience */}
          <div className="relative slide-up stagger-1">
            <div className="relative">
              <img 
                src="/src/assets/hero-call-illustration.jpg"
                alt="Aluno realizando seu sonho de tocar música"
                className="w-full h-auto rounded-3xl shadow-elegant hover-lift"
              />
              
              {/* Progress badges - Duolingo inspired */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg badge-float">
                ✨ Sonho realizado
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg badge-float stagger-1">
                🏠 100% Online
              </div>
              <div className="absolute top-1/2 -right-6 bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold shadow-lg badge-float stagger-2">
                💫 Fácil
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHeroSection;