import PropTypes from 'prop-types';
import styles from './TypewriterEffect.module.scss'

const TypewriterEffect = ({className = '', typewrite}) => {
  return (
    <p className={`${styles.typewriter} ${className}`.trim()}>
      <span>{typewrite}</span>
    </p>
  );
};

TypewriterEffect.propTypes = {
  typewrite: PropTypes.string,
  className: PropTypes.string,
}

export default TypewriterEffect;