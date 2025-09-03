import { Instagram, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Coluna 1 - Marca */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Clave</h3>
            <p className="text-white/90 leading-relaxed">
              Sua experiência musical, reconhecida e bem remunerada.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#sobre" 
                className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
              >
                Sobre nós
              </a>
              <a 
                href="#como-funciona" 
                className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
              >
                Como funciona
              </a>
              <a 
                href="#vaga" 
                className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
              >
                Seja professor
              </a>
              <a 
                href="#contato" 
                className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Coluna 3 - Conexão */}
          <div className="space-y-6">
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} strokeWidth={1.5} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-white text-primary hover:bg-white/90 font-medium"
            >
              Quero ser professor!
            </Button>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-white/80">
            © 2025 Clave. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;