import { useState } from 'react';
import { Music, Guitar, Piano, Drum, Mic, Wind, Volume2 } from 'lucide-react';

const instruments = [
  {
    id: 'violao',
    name: 'Violão',
    icon: Guitar,
    description: 'O instrumento mais popular do Brasil',
    teachers: 120,
    avgPrice: 55,
    styles: ['MPB', 'Sertanejo', 'Pop Rock', 'Clássico'],
    color: 'from-orange-500 to-red-500',
    details: 'Perfeito para iniciantes e avançados. Aprenda seus hits favoritos e desenvolva técnicas profissionais.',
    lessons: 'Acordes básicos, dedilhado, ritmos brasileiros, solos'
  },
  {
    id: 'piano',
    name: 'Piano & Teclado',
    icon: Piano,
    description: 'A base de toda teoria musical',
    teachers: 95,
    avgPrice: 65,
    styles: ['Clássico', 'Jazz', 'Pop', 'Gospel'],
    color: 'from-blue-500 to-purple-500',
    details: 'Do básico ao avançado, desenvolva coordenação e expressividade musical única.',
    lessons: 'Escalas, acordes, partitura, improvisação'
  },
  {
    id: 'guitarra',
    name: 'Guitarra',
    icon: Guitar,
    description: 'Power e expressividade do rock',
    teachers: 85,
    avgPrice: 70,
    styles: ['Rock', 'Blues', 'Metal', 'Funk'],
    color: 'from-red-500 to-pink-500',
    details: 'Domine solos épicos, riffs poderosos e técnicas que marcaram a história do rock.',
    lessons: 'Solos, riffs, técnicas de solo, efeitos'
  },
  {
    id: 'bateria',
    name: 'Bateria',
    icon: Drum,
    description: 'O coração de qualquer banda',
    teachers: 65,
    avgPrice: 75,
    styles: ['Rock', 'Samba', 'Pop', 'Jazz'],
    color: 'from-green-500 to-teal-500',
    details: 'Desenvolva groove, coordenação e seja a base rítmica que toda música precisa.',
    lessons: 'Ritmos básicos, fills, coordenação, estilos'
  },
  {
    id: 'contrabaixo',
    name: 'Contrabaixo',
    icon: Volume2,
    description: 'A fundação harmônica da música',
    teachers: 45,
    avgPrice: 68,
    styles: ['Funk', 'Rock', 'Jazz', 'MPB'],
    color: 'from-purple-500 to-indigo-500',
    details: 'Crie linhas de baixo marcantes e seja o alicerce harmônico de qualquer música.',
    lessons: 'Técnica de dedos, slap, walking bass, groove'
  },
  {
    id: 'canto',
    name: 'Canto',
    icon: Mic,
    description: 'Sua voz é seu instrumento',
    teachers: 110,
    avgPrice: 60,
    styles: ['Pop', 'MPB', 'Gospel', 'Rock'],
    color: 'from-pink-500 to-rose-500',
    details: 'Desenvolva técnica vocal, interpretação e confiança para cantar qualquer estilo.',
    lessons: 'Respiração, afinação, interpretação, repertório'
  },
  {
    id: 'sopros',
    name: 'Instrumentos de Sopro',
    icon: Wind,
    description: 'Flauta, saxofone, trompete e mais',
    teachers: 35,
    avgPrice: 72,
    styles: ['Jazz', 'Clássico', 'Popular', 'Choro'],
    color: 'from-yellow-500 to-orange-500',
    details: 'Domine a respiração e expressividade única dos instrumentos de sopro.',
    lessons: 'Respiração, embocadura, escalas, repertório'
  }
];

const StudentInstrumentsSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Music className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Escolha Seu Instrumento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Qual é o <span className="text-primary">seu sonho musical</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra o instrumento perfeito para você. Cada um tem sua personalidade única e nossos professores especialistas estão prontos para guiar sua jornada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {instruments.map((instrument) => {
            const Icon = instrument.icon;
            const isExpanded = expandedCard === instrument.id;
            
            return (
              <div
                key={instrument.id}
                className={`
                  group cursor-pointer transition-all duration-500 ease-out
                  ${isExpanded 
                    ? 'md:col-span-2 lg:col-span-2 xl:col-span-2 scale-105' 
                    : 'hover:scale-105 hover:-translate-y-2'
                  }
                `}
                onClick={() => setExpandedCard(isExpanded ? null : instrument.id)}
              >
                <div className="bg-card rounded-2xl p-6 h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-card-hover">
                  <div className="relative">
                    {/* Icon with gradient background */}
                    <div className={`
                      w-16 h-16 rounded-xl mb-4 flex items-center justify-center
                      bg-gradient-to-br ${instrument.color} shadow-lg
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Header Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2">{instrument.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{instrument.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-primary font-semibold">
                          {instrument.teachers} professores
                        </span>
                        <span className="text-muted-foreground">
                          A partir de R$ {instrument.avgPrice}
                        </span>
                      </div>
                    </div>

                    {/* Styles tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {instrument.styles.slice(0, isExpanded ? 4 : 2).map((style) => (
                        <span
                          key={style}
                          className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                        >
                          {style}
                        </span>
                      ))}
                      {!isExpanded && instrument.styles.length > 2 && (
                        <span className="px-2 py-1 bg-primary/10 rounded-md text-xs text-primary">
                          +{instrument.styles.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Expanded content */}
                    <div className={`
                      overflow-hidden transition-all duration-500 ease-out
                      ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="pt-4 border-t border-muted">
                        <p className="text-muted-foreground text-sm mb-4">
                          {instrument.details}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">O que você vai aprender:</h4>
                          <p className="text-muted-foreground text-sm">
                            {instrument.lessons}
                          </p>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105">
                          Encontrar Professores
                        </button>
                      </div>
                    </div>

                    {/* Expand indicator */}
                    {!isExpanded && (
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Music className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Não encontrou seu instrumento?
            </h3>
            <p className="text-muted-foreground mb-6">
              Temos professores para mais de 20 instrumentos diferentes. Fale conosco e encontre o professor ideal!
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105">
              Ver Todos os Instrumentos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentInstrumentsSection;