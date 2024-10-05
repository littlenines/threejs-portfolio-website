import { memo } from "react";
import TypewriterEffect from "../TypewriterEffect";
import LiquidCircle from "../LiquidCircle";
import styles from './HeroInfo.module.scss'

const HeroInfo = () => {
  return (
    <>
      <LiquidCircle liquidClass={styles.liquid_model} />
      <h1 className={styles.title}>
      Hey! My name is Nemanja.
        {/* Hi! I&apos;m<span className={styles.title_name}>Nemanja</span> */}
      </h1>
      <p className={styles.developer}><TypewriterEffect /></p>
      <p className={styles.subtext}>I&apos;m from Serbia, currently based in Niš. With over 3 years of experience, focused on writing clean, efficient code to bring web projects to life. I’m passionate about developing interactive and responsive user interfaces and always up for tackling new challenges in frontend development.
      </p>
    </>
  );
};

export default memo(HeroInfo);
