import { useEffect, useRef } from "react";

const useModelCleanup = () => {
  const rendererRef = useRef(null);

  useEffect(() => {
    return () => {
      const renderer = rendererRef.current;
      if (!renderer) return;

      renderer.dispose?.();
    };
  }, []);

  return rendererRef;
};

export default useModelCleanup;
