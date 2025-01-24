import { useCallback } from "react";

export const useMouseGrab = () => {
  return useCallback((event) => {
    if (!event.target || !(event.target instanceof HTMLElement)) return;

    const element = event.target;

    if (event.type === "mousedown") {
      element.style.cursor = "grabbing";

      const handleGlobalMouseUp = () => {
        element.style.cursor = "grab";
        window.removeEventListener("mouseup", handleGlobalMouseUp);
      };

      window.addEventListener("mouseup", handleGlobalMouseUp);
    } else if (event.type === "mouseup") {
      element.style.cursor = "grab";
    }
  }, []);
};