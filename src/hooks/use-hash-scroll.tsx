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
      const el = document.getElementById(sectionId);
      if (el) {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => {
          scrollToSection(sectionId);
        });
      } else {
        // If the section doesn't exist, clear the hash from the URL
        history.replaceState(null, '', window.location.pathname);
      }
    }
  }, [location.hash, scrollToSection]);

  // Handle browser back/forward button navigation
  useEffect(() => {
    const handlePopState = () => {
      if (location.hash) {
        const sectionId = location.hash.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          requestAnimationFrame(() => {
            scrollToSection(sectionId);
          });
        } else {
          history.replaceState(null, '', window.location.pathname);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [location.hash, scrollToSection]);
}; 