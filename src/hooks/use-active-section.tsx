import { useState, useEffect, useCallback } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  const updateActiveSection = useCallback((sectionId: string) => {
    setActiveSection(prev => {
      if (prev !== sectionId) {
        return sectionId;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const sections = ['home', 'projects', 'experience', 'github', 'skills', 'education', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -90% 0px', // More precise triggering
      threshold: [0, 0.1, 0.5, 1] // Multiple thresholds for better detection
    };

    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver((entries) => {
      // Clear any pending timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Use a small delay to batch updates and reduce stuttering
      timeoutId = setTimeout(() => {
        let maxRatio = 0;
        let mostVisibleSection = 'home';

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (maxRatio > 0.1) { // Only update if section is significantly visible
          updateActiveSection(mostVisibleSection);
        }
      }, 50); // Small delay to batch updates
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [updateActiveSection]);

  return activeSection;
}; 
 