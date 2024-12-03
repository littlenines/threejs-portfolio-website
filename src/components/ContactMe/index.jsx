import { memo } from 'react'
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import CompanionPortal from '../CompanionPortal'
import styles from './ContactMe.module.scss'

const ContactMe = ({ title, mail, ...props }) => {
    return (
        <div className={styles.contact_info} {...props}>
            <motion.div initial={{ opacity: 0, translateX: '-125px' }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}>
                <h3 className={styles.contact_subtitle}>{title}</h3>
                <p className={styles.contact_email}><a href={`mailto:${mail}`}>{mail}</a></p>
            </motion.div>
            <motion.div className={styles.contact_cube} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}>
                <CompanionPortal />
            </motion.div>
        </div>
    )
}

ContactMe.propTypes = {
    title: PropTypes.string,
    mail: PropTypes.string,
}

export default memo(ContactMe)