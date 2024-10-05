import { memo, useState, useRef, useEffect } from 'react'
import Burger from './Burger'
import styles from './Header.module.scss'

function Header() {
  const [active, setActive] = useState(false)

  const menuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth > 425 ? window.innerWidth - 105 : window.innerWidth - 70, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Utility to handle both mouse and touch events
  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
  const getClientY = (e) => (e.touches ? e.touches[0].clientY : e.clientY);

  const handleStart = (e) => {
    setIsDragging(false); // Reset dragging flag
    setDragStart({ x: getClientX(e), y: getClientY(e) });

    // Record initial position
    menuRef.current.startX = getClientX(e) - position.x;
    menuRef.current.startY = getClientY(e) - position.y;

    // Add listeners for dragging
    if (e.touches) {
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
    } else {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current) {
        const headerWidth = menuRef.current.offsetWidth;
        const headerHeight = menuRef.current.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        setPosition((prevPosition) => {

          const newX = Math.min(prevPosition.x, viewportWidth - headerWidth - 5);
          const newY = Math.min(prevPosition.y, viewportHeight - headerHeight);

          return {
            x: Math.max(0, newX),
            y: Math.max(0, newY),
          };
        });
      }
    };

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMove = (e) => {
    const distanceMoved = Math.sqrt(
      Math.pow(getClientX(e) - dragStart.x, 2) + Math.pow(getClientY(e) - dragStart.y, 5)
    );

    if (distanceMoved > 5) {
      if (e.touches) e.preventDefault();
      setIsDragging(true); // Mark as dragging only if movement is significant
      let newX = getClientX(e) - menuRef.current.startX;
      let newY = getClientY(e) - menuRef.current.startY;

      // Get the viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Get the dimensions of the header (menuRef element)
      const headerWidth = menuRef.current.offsetWidth;
      const headerHeight = menuRef.current.offsetHeight;

      // Clamp the values to keep the header inside the viewport
      newX = Math.max(0, Math.min(newX, viewportWidth - headerWidth));

      newY = Math.max(0, Math.min(newY, viewportHeight - headerHeight));
      if(newX >= viewportWidth - headerWidth - 2) return;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleEnd = () => {
    // Remove listeners
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);

    setTimeout(() => setIsDragging(false), 0);
  };


  return (
    <header className={`${styles.header} ${active ? styles.active : ''}`}>
        {/*
        <ul className={styles.tabs}>
            <li>About me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact me</li>
        </ul> */}
        <div
        ref={menuRef}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 2
      }}
    >

        <svg className={styles.text_circle} xmlns="http://www.w3.org/2000/svg" xmlLang="en" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
        <defs>
          <path id="textcircle" d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
        </defs>
        <g className="textcircle">
          <text textLength="940">
            <textPath 
                      xlinkHref="#textcircle" 
                      aria-label="CSS & SVG are awesome" 
                      textLength="940">
              Drag me | Drag me | Drag me |&#160;
            </textPath>
          </text>
        </g>
      </svg>
        <Burger active={active} setActive={setActive} isDragging={isDragging} burgerClass={styles.menu} />
    </div>
        <nav className={styles.nav}>
        </nav>
    </header>
  )
}

export default memo(Header)