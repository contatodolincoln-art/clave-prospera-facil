import { Instagram, Youtube, Linkedin } from 'lucide-react';

const StudentFooter = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-playfair font-bold">Clave</h3>
            <p className="text-xl text-white/90">
              Conectando você à música que você ama
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <a 
              href="#hero" 
              className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
            >
              Início
            </a>
            <a 
              href="#como-funciona" 
              className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
            >
              Como funciona
            </a>
            <a 
              href="#professores" 
              className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
            >
              Professores
            </a>
            <a 
              href="#preco" 
              className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
            >
              Preços
            </a>
            <a 
              href="#depoimentos" 
              className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-all duration-200"
            >
              Depoimentos
            </a>
          </nav>

          {/* Social Media */}
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-white hover:text-white/80 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-white/80 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={24} strokeWidth={1.5} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-white/80 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
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

export default StudentFooter;