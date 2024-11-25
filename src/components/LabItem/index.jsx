import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './LabItem.module.scss'

const LabItem = ({image, imageAlt, title, subtitle, ...props}) => {
  return (
    <div {...props}>
      <div className={styles.lab_image}>
        <img src={image} alt={imageAlt} loading='lazy' />
      </div>
      <div className={styles.lab_info}>
        <h3 className={styles.lab_info_title}>{title}</h3>
        <p className={styles.lab_info_subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

LabItem.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default memo(LabItem);
