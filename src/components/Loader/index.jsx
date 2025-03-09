import { useProgress } from '@react-three/drei';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss'

const Loader = ({ showProgress = true, ...props }) => {
  const { progress } = useProgress();
  return (
    <div className={styles.loader_container} {...props}>
      <div className={styles.loader} />
      {showProgress && <p className={styles.loader_progress}>{Math.round(progress)}%</p>}
    </div>
  )
}

Loader.propTypes = {
  showProgress: PropTypes.bool
}

export default Loader;