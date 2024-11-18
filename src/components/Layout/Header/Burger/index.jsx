import { memo, useState } from "react";
import PropTypes from 'prop-types';
import styles from './Burger.module.scss'

const Burger = ({active, setActive, isDragging = false, burgerClass = ''}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (isDragging) return;
        setIsActive(!isActive);
        setActive(!active)
    };

    return (
        <div className={`${styles.burger} ${burgerClass}`.trim()} onClick={handleClick}>
            <svg
                className={`${styles.ham} ${styles.hamRotate} ${styles.ham1}  ${isActive ? styles.active : ''}`.trim() || undefined}
                viewBox="0 0 100 100"
            >
                <path
                    className={`${styles.line} ${styles.top}`}
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className={`${styles.line}`} d="m 30,50 h 40" />
                <path
                    className={`${styles.line} ${styles.bottom}`}
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
            </svg>
        </div>
    );
};

Burger.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    isDragging: PropTypes.bool,
    burgerClass: PropTypes.string
}

export default memo(Burger);
