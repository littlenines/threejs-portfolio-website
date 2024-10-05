import { useState, useEffect } from 'react';

function useViewport() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? document.documentElement.clientWidth : 0
  );
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(document.documentElement.clientWidth);
      setViewportHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { viewportWidth, viewportHeight };
}

export default useViewport;