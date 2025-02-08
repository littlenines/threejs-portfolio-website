import {memo, lazy} from 'react'
import PropTypes from 'prop-types';
const PortalHead = lazy(() => import('../PortalHead/index'));
import styles from './LiquidCircle.module.scss'

const LiquidCircle = ({liquidClass = ''}) => {
  return (
    <div className={`${styles.liquid_circle} ${liquidClass}`.trim()}><PortalHead /></div>
  )
}

LiquidCircle.propTypes = {
  liquidClass: PropTypes.string
}

export default memo(LiquidCircle)