import { memo } from 'react'
import PropTypes from 'prop-types';
import styles from './GooeyIconButton.module.scss'

const GooeyIconButton = ({ icon, buttonClassName = '', gooeyClassName='', isGradientBorder = false, ...props }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={styles.svg}>
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <div className={styles.gooey}>
                <div className={isGradientBorder ? styles.gooey_border : ''}>

                <button className={`${isGradientBorder ? styles.gooey_button_outlined : styles.gooey_button} ${buttonClassName}`} {...props}>{icon}</button>
                <span className={styles.bubbles}>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                    <span className={`${styles.bubble} ${gooeyClassName}`}></span>
                </span>
                </div>
            </div>
        </>
    )
}

GooeyIconButton.propTypes = {
    icon: PropTypes.node,
    buttonClassName: PropTypes.string,
    gooeyClassName: PropTypes.string,
    isGradientBorder: PropTypes.bool
}

export default memo(GooeyIconButton)