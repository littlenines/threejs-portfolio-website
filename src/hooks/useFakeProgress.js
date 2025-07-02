import { useState, useEffect, useRef } from "react";

export default function useFakeProgress() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const loaderStatusRef = useRef(false);

  useEffect(() => {
    if (loaderStatusRef.current) {
      setProgress(100);
      setDone(true);
      return;
    }

    let current = 0;

    const animate = () => {
      current++;
      setProgress(current);

      if (current >= 101) {
        loaderStatusRef.current = true;
        return setDone(true);
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return { progress, done };
}
