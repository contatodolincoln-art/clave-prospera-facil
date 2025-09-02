import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, Music } from 'lucide-react';
const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const sections = [{
    id: 'hero',
    label: '🎯 Início'
  }, {
    id: 'como-funciona',
    label: '📱 Como funciona'
  }, {
    id: 'depoimentos',
    label: '⭐ Depoimentos'
  }, {
    id: 'vaga',
    label: '🚀 Quero minha vaga'
  }];
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
      const sectionElements = sections.map(section => document.getElementById(section.id)).filter(Boolean);
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (!isVisible) return null;
  return <>
      {/* Main floating CTA button */}
      <div className="fixed bottom-6 right-6 z-50 slide-up">
        <Button size="lg" variant="hero" className="rounded-full px-6 py-4 shadow-glow hover:shadow-elegant transition-all duration-300 text-base font-semibold" onClick={() => scrollToSection('vaga')}>
          <Music className="w-5 h-5 mr-2" />
          Quero ser professor!
        </Button>
      </div>

      {/* Quick navigation menu */}
      <div className="fixed bottom-6 left-6 z-50 slide-up">
        
      </div>
    </>;
};
export default FloatingNavigation;