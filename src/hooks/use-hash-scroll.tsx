import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmoothScroll } from './use-smooth-scroll';

export const useHashScroll = () => {
  const location = useLocation();
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    }
  }, [location.hash, scrollToSection]);

  // Handle browser back/forward button navigation
  useEffect(() => {
    const handlePopState = () => {
      if (location.hash) {
        const sectionId = location.hash.substring(1);
        requestAnimationFrame(() => {
          scrollToSection(sectionId);
        });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [location.hash, scrollToSection]);
}; 