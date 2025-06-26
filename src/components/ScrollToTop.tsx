import { useState, useEffect, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const shouldShow = window.pageYOffset > 300;
    setIsVisible(prev => {
      if (prev !== shouldShow) {
        return shouldShow;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop; 