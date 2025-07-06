import { useEffect, useState } from "react";

const useModelCleanup = () => {
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    return () => {
      if (!renderer) return;
      renderer.dispose?.();
    };
  }, [renderer]);

  return { setRenderer };
};

export default useModelCleanup;
