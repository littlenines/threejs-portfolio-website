import { useCallback } from "react";

const useScrollIntoView = () => {
  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView();
  }, []);

  return scrollTo;
};

export default useScrollIntoView;