import PropTypes from 'prop-types';
import styles from './Loader.module.scss'

const Loader = ({ progress = 0, ...props }) => {
  return (
    <div className={styles.loader_container} {...props}>
      <div className={styles.loader} />
      <p className={styles.loader_progress}>{Math.round(progress)}%</p>
    </div>
  )
}

Loader.propTypes = {
  progress: PropTypes.number
}

export default Loader;