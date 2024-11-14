import {memo} from 'react'
import PropTypes from "prop-types";
import styles from "./Sections.module.scss"

const Section = ({title, className = 'container--default', children, ...props}) => {
  return (
    <section className={className} {...props}>
        {title && <h2 className={styles.title}>{title}</h2>}
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