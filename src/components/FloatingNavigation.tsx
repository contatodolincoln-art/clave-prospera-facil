import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, Music } from 'lucide-react';

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'hero', label: '🎯 Início' },
    { id: 'como-funciona', label: '📱 Como funciona' },
    { id: 'depoimentos', label: '⭐ Depoimentos' },
    { id: 'vaga', label: '🚀 Quero minha vaga' }
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      toggleVisibility();
      
      // Detect active section
      const scrollPosition = window.pageYOffset + 100;
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]?.id || '');
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main floating CTA button */}
      <div className="fixed bottom-6 right-6 z-50 slide-up">
        <Button
          size="lg"
          variant="hero"
          className="rounded-full px-6 py-4 shadow-glow hover:shadow-elegant transition-all duration-300 text-base font-semibold"
          onClick={() => scrollToSection('vaga')}
        >
          <Music className="w-5 h-5 mr-2" />
          Quero ser professor!
        </Button>
      </div>

      {/* Quick navigation menu */}
      <div className="fixed bottom-6 left-6 z-50 slide-up">
        <div className="flex flex-col gap-2">
          {/* Back to top button */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-full p-3 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground"
            onClick={scrollToTop}
          >
            <ChevronUp className="w-4 h-4" />
          </Button>

          {/* Quick navigation pills */}
          <div className="flex flex-col gap-1 bg-background/80 backdrop-blur-sm rounded-full p-2 border border-primary/20">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingNavigation;