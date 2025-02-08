import { useRef, useState, useEffect, useCallback } from 'react';
import useViewport from './useViewport';

const useDraggable = ({positionX, positionY}) => {
    const menuRef = useRef(null);
    const { viewportWidth, viewportHeight } = useViewport();
    const [isDragging, setIsDragging] = useState(false);

    const pos1 = useRef(0);
    const pos2 = useRef(0);
    const pos3 = useRef(0);
    const pos4 = useRef(0);
  
    const [position, setPosition] = useState({
      x: positionX,
      y: positionY,
    });
  
    useEffect(() => {
      if (viewportWidth > 0) {
        setPosition({
          x: positionX,
          y: positionY,
        });
      }
    }, [viewportWidth, positionX, positionY]);
  
    const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
    const getClientY = (e) => (e.touches ? e.touches[0].clientY : e.clientY);
  
    const dragMouseDown = (e) => {
      
      pos3.current = getClientX(e);
      pos4.current = getClientY(e);
      
      setIsDragging(false);
      
      if (e.type === 'touchstart') {
        document.addEventListener('touchmove', elementDrag, { passive: false });
        document.addEventListener('touchend', closeDragElement,  { passive: false });
      } else {
        document.addEventListener('mousemove', elementDrag,  { passive: false });
        document.addEventListener('mouseup', closeDragElement,  { passive: false });
      }
    };
  
    const elementDrag = useCallback((e) => {
      e.preventDefault();
      const deltaX = getClientX(e) - pos3.current;
      const deltaY = getClientY(e) - pos4.current;
      const distanceMoved = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  
      if (distanceMoved > 5) {
        setIsDragging(true);
      }
  
      pos1.current = pos3.current - getClientX(e);
      pos2.current = pos4.current - getClientY(e);
      pos3.current = getClientX(e);
      pos4.current = getClientY(e);
  
      setPosition((prevPos) => {
        if (!menuRef.current) return prevPos;
  
        let newX = prevPos.x - pos1.current;
        let newY = prevPos.y - pos2.current;
  
        const headerWidth = menuRef.current.offsetWidth;
        const headerHeight = menuRef.current.offsetHeight;
  
        newX = Math.max(0, Math.min(newX, viewportWidth - headerWidth));
        newY = Math.max(0, Math.min(newY, viewportHeight - headerHeight));
  
        return { x: newX, y: newY };
      });
    }, [viewportWidth, viewportHeight]);
  
    const closeDragElement = useCallback(() => {
      document.removeEventListener('mousemove', elementDrag);
      document.removeEventListener('mouseup', closeDragElement);
      document.removeEventListener('touchmove', elementDrag);
      document.removeEventListener('touchend', closeDragElement);
  
      setTimeout(() => setIsDragging(false), 100);
    }, [elementDrag]);
  
    useEffect(() => {
      return () => {
        document.removeEventListener('mousemove', elementDrag);
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('touchmove', elementDrag);
        document.removeEventListener('touchend', closeDragElement);
      };
    }, [elementDrag, closeDragElement]);

  return { position, dragMouseDown, isDragging, menuRef };
};

export default useDraggable;
