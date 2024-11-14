import { memo } from "react";
import PropTypes from 'prop-types';
import TypewriterEffect from "../TypewriterEffect";
import LiquidCircle from "../LiquidCircle";
import styles from './HeroInfo.module.scss'

const HeroInfo = ({title, description, typewrite}) => {
  return (
    <>
      <LiquidCircle liquidClass={styles.liquid_model} />
      <h1 className={styles.title}>
        {title}
      </h1>
      <p className={styles.developer}><TypewriterEffect typewrite={typewrite} /></p>
      <p className={styles.subtext}>{description}</p>
    </>
  );
};

HeroInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  typewrite: PropTypes.string,
}

export default memo(HeroInfo);
