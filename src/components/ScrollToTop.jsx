import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure the component is mounted before scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
