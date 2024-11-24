import { memo } from 'react'
import { useProgress } from '@react-three/drei';
import styles from './Loader.module.scss'

const Loader = ({...props}) => {
  const { progress } = useProgress();
  return (
    <div className={styles.loader_container} {...props}>
      <div className={styles.loader}></div>
      <p className={styles.loader_progress}>{Math.round(progress)}%</p>
    </div>
  )
}

export default memo(Loader)