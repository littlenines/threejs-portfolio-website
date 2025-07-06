import { useEffect, useRef } from "react";

/**
 * Hook that provides a WebGL renderer ref and ensures it's disposed on unmount.
 *
 * Use this with <Canvas> by assigning the renderer inside the `onCreated` callback:
 *
 * ```js
 * const rendererRef = useModelCleanup();
 * <Canvas onCreated={({ gl }) => (rendererRef.current = gl)} />
 * ```
 *
 * @returns {React.MutableRefObject<THREE.WebGLRenderer|null>} A mutable ref to assign the WebGL renderer.
 */
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
