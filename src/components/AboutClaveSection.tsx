import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Award, Users } from 'lucide-react';
import missionHero from '@/assets/mission-hero.jpg';

const AboutClaveSection = () => {
  const features = [
    {
      icon: Music,
      title: "Criada por professores",
      description: "Nossa plataforma nasceu da experiência real de educadores musicais"
    },
    {
      icon: Award,
      title: "10+ anos de experiência",
      description: "Uma década conectando professores de música com seus alunos ideais"
    },
    {
      icon: Users,
      title: "Suporte especializado",
      description: "Nossa equipe entende sua realidade e está sempre pronta para ajudar"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 slide-up">
            <h2 className="text-4xl font-playfair font-bold text-foreground">
              Sobre a <span className="text-primary">Clave</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos mais que uma plataforma - somos uma comunidade dedicada a valorizar 
              e empoderar professores de música em todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-8 border-0 bg-card slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="space-y-4 p-0">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={28} />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mission statement - Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left side - Image */}
            <div className="relative overflow-hidden">
              <img 
                src={missionHero} 
                alt="Professor de música ensinando em estúdio profissional" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="bg-foreground text-background flex items-center p-8 md:p-12 lg:p-16">
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold font-playfair leading-tight">
                  EDUCAÇÃO MUSICAL DE
                  <br />
                  <span className="text-primary">QUALIDADE</span>
                </h3>
                <p className="text-lg md:text-xl leading-relaxed opacity-90">
                  Nossa dedicação à excelência é evidente pelo cuidado completo que temos 
                  com cada professor e aluno em nossa plataforma, oferecendo uma experiência 
                  única que define os padrões éticos e humanos da educação musical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClaveSection;