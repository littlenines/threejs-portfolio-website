import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Burger from './Burger';
import useScrollIntoView from '../../../hooks/useScrollIntoView';
import useDraggable from '../../../hooks/useDraggable';
import { navigationItems } from '../../../mocks/mock';
import useViewport from '../../../hooks/useViewport';
import shouldScroll from '../../../utils/shouldScroll';
import styles from './Header.module.scss';

function Header() {
  const [active, setActive] = useState(false);
  const { viewportWidth } = useViewport();

  const positionX = viewportWidth > 425 && viewportWidth < 1200 ? viewportWidth - 80 : viewportWidth >= 1200 ? viewportWidth - 105 : viewportWidth - 70;
  const positionY = 0;

  const {position, dragMouseDown, isDragging, menuRef} = useDraggable({positionX, positionY });
  const scrollTo = useScrollIntoView();

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      transition: {
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const handleTabClick = useCallback((id) => {
    shouldScroll(true);
    setActive(false);
    scrollTo(id);
  }, [scrollTo]);

  return (
    <header className={`${styles.header} ${active ? styles.active : ''}`.trim()}>
      <motion.div ref={menuRef}
                  onMouseDown={dragMouseDown}
                  onTouchStart={dragMouseDown}
                  style={{
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    zIndex: 2,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
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
      </motion.div>
      <nav className={styles.nav}>
        <AnimatePresence>
          {active && (
            <motion.ul className={styles.nav_tabs}
                       initial="hidden"
                       animate="visible"
                       exit="hidden"
                       variants={listVariants}
            >
              {navigationItems.map(({title, link}, index) => (
                <motion.li key={index} variants={itemVariants} onClick={() => handleTabClick(link)}>{title}</motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default memo(Header);
