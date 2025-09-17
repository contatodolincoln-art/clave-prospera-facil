import { Button } from '@/components/ui/button';
import { Check, Play, Heart, Clock, Users } from 'lucide-react';

const StudentHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-secondary text-foreground overflow-hidden">
      {/* Musical notes floating animation - unique student experience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 text-4xl note-float">♪</div>
        <div className="absolute top-40 right-16 text-primary/20 text-3xl note-float stagger-1">♫</div>
        <div className="absolute bottom-32 left-20 text-primary/20 text-5xl note-float stagger-2">♩</div>
        <div className="absolute top-60 left-1/3 text-primary/20 text-2xl note-float stagger-3">♬</div>
        <div className="absolute bottom-20 right-1/4 text-primary/20 text-4xl note-float stagger-1">♪</div>
        <div className="absolute top-80 right-10 text-primary/15 text-3xl note-float stagger-4">♭</div>
        <div className="absolute bottom-40 left-1/2 text-primary/15 text-2xl note-float stagger-2">♯</div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                <Heart className="w-4 h-4 text-accent" />
                <span>Seu sonho de tocar música começa aqui</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-young-serif font-normal leading-tight text-foreground">
                Aprenda música <span className="text-primary">nunca foi tão</span> <span className="underline decoration-primary decoration-4">acessível</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-instrument">
                Direto da sua casa, no seu ritmo, com professores que <strong className="text-foreground">realmente entendem você</strong>.
              </p>
              
              <p className="text-lg text-muted-foreground font-instrument">
                Acabou a frustração de desistir antes de começar. Acabaram as desculpas de falta de tempo ou professor longe demais.
              </p>
            </div>

            {/* Pain points solved */}
            <div className="grid grid-cols-2 gap-4 bg-primary/10 p-6 rounded-2xl border border-primary/20">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Sem sair de casa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Preços justos</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Horário flexível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Primeira aula grátis</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="gradient" className="text-lg px-8 py-6 font-bold">
                🎯 Comece Hoje com Aula Grátis
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">+2.000 alunos ativos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Disponível 7 dias</span>
              </div>
            </div>
          </div>

          {/* Right Column - Video Card */}
          <div className="relative slide-up stagger-1">
            <div className="relative bg-foreground/5 backdrop-blur-sm rounded-3xl p-6 border border-primary/20">
              {/* Video Preview */}
              <div className="relative aspect-video bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-6 hover:bg-primary/30 transition-all duration-300 cursor-pointer group">
                    <Play className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                {/* Video Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-foreground/80 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-secondary font-young-serif text-lg">Veja como é simples começar</h3>
                    <p className="text-secondary/80 text-sm font-instrument">2 min • Demonstração da plataforma</p>
                  </div>
                </div>
              </div>
              
              {/* Video Stats */}
              <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <span>👀 +50.000 visualizações</span>
                  <span>⭐ 4.9/5 estrelas</span>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">LIVE</span>
              </div>
              
              {/* Progress badges */}
              <div className="absolute -top-4 -left-4 bg-primary text-secondary px-4 py-2 rounded-full text-sm font-bold shadow-lg badge-float">
                ✨ Aula ao vivo
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-secondary px-4 py-2 rounded-full text-sm font-bold shadow-lg badge-float stagger-1">
                🏠 100% Online
              </div>
              <div className="absolute top-1/2 -right-6 bg-foreground text-secondary px-3 py-1 rounded-full text-xs font-semibold shadow-lg badge-float stagger-2">
                💫 Grátis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHeroSection;