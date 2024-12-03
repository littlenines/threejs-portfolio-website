import {memo} from 'react'
import PropTypes from "prop-types";
import { motion } from 'motion/react';
import styles from "./Sections.module.scss"

const Section = ({title, className = 'container--default', children, ...props}) => {
  return (
    <section className={className} {...props}>
        {title && 
          <motion.h2 className={styles.title} 
                     initial={{ opacity: 0, translateY: '80px' }} 
                     whileInView={{ opacity: 1, translateY: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, ease: "linear" }}>
                      {title}
          </motion.h2>}
        {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default memo(Section)