import { lazy } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const GooeyButton = lazy(() => import("../GooeyButton"));
const GooeyIconButton = lazy(() => import("../GooeyIconButton"));

const HeroButtons = ({github, linkedin, cv}) => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, ease: "easeIn" }}>
        <Link to={github} rel="noopener noreferrer" target="_blank">
          <GooeyIconButton icon={<FontAwesomeIcon icon={faGithub} className="icon--medium" />} aria-label="github" />
        </Link>
      </motion.div>
      <motion.div initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, ease: "easeIn" }}>
        <Link to={linkedin} rel="noopener noreferrer" target="_blank">
          <GooeyIconButton icon={<FontAwesomeIcon icon={faLinkedinIn} className="icon--medium" />} aria-label="linkedin"/>
        </Link>
      </motion.div>
      <motion.div initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, ease: "easeIn" }}>
        <Link to={cv} target="_blank" rel="noopener noreferrer" download>
          <GooeyButton isGradientBorder title="Download CV" />
        </Link>
      </motion.div>
    </>
  );
};

HeroButtons.propTypes = {
  github: PropTypes.string,
  linkedin: PropTypes.string,
  cv: PropTypes.string
}

export default HeroButtons;
