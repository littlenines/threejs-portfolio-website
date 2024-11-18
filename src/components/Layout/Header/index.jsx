import { memo, useState, useRef, useEffect, useCallback } from 'react';
import Burger from './Burger';
import useViewport from '../../../utils/useViewport';
import styles from './Header.module.scss';

function Header() {
  const [active, setActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const menuRef = useRef(null);
  const { viewportWidth, viewportHeight } = useViewport();

  const pos1 = useRef(0);
  const pos2 = useRef(0);
  const pos3 = useRef(0);
  const pos4 = useRef(0);

  const [position, setPosition] = useState({
    x: viewportWidth > 425 ? viewportWidth - 105 : viewportWidth - 70,
    y: 0,
  });

  // Update position when viewportWidth changes
  useEffect(() => {
    if (viewportWidth > 0) {
      setPosition({
        x: viewportWidth > 425 ? viewportWidth - 105 : viewportWidth - 70,
        y: 0,
      });
    }
  }, [viewportWidth]);

  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
  const getClientY = (e) => (e.touches ? e.touches[0].clientY : e.clientY);

  const dragMouseDown = (e) => {
    
    pos3.current = getClientX(e);
    pos4.current = getClientY(e);
    
    setIsDragging(false);
    
    if (e.type === 'touchstart') {
      e.preventDefault();
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
    document.removeEventListener('mousemove', elementDrag, { passive: false });
    document.removeEventListener('mouseup', closeDragElement, { passive: false });
    document.removeEventListener('touchmove', elementDrag, { passive: false });
    document.removeEventListener('touchend', closeDragElement, { passive: false });

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

  return (
    <header className={`${styles.header} ${active ? styles.active : ''}`.trim()}>
      <div ref={menuRef}
           onMouseDown={dragMouseDown}
           onTouchStart={dragMouseDown}
           style={{
             position: 'absolute',
             left: `${position.x}px`,
             top: `${position.y}px`,
             zIndex: 2,
           }}
      >
        <svg className={styles.text_circle}
             xmlns="http://www.w3.org/2000/svg"
             xmlLang="en"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 500 500"
        >
          <defs>
            <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)"/>
          </defs>
          <g className="textcircle">
            <text textLength="940">
              <textPath xlinkHref="#textcircle" aria-label="Drag me" textLength="940">
                Drag me | Drag me | Drag me |&#160;
              </textPath>
            </text>
          </g>
        </svg>
        <Burger active={active}
                setActive={setActive}
                isDragging={isDragging}
                burgerClass={styles.menu}
        />
      </div>
      <nav className={styles.nav}></nav>
    </header>
  );
}

export default memo(Header);
