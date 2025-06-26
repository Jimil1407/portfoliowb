import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate height of the fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }, []);

  const scrollToElement = useCallback((element: HTMLElement, offset: number = 80) => {
    const elementPosition = element.offsetTop - offset;
    
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  }, []);

  return {
    scrollToSection,
    scrollToTop,
    scrollToElement
  };
}; 