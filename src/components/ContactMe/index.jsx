import { memo } from 'react'
import PropTypes from 'prop-types';
import CompanionPortal from '../CompanionPortal'
import styles from './ContactMe.module.scss'

const ContactMe = ({ title, mail, ...props }) => {
    return (
        <div className={styles.contact_info} {...props}>
            <div>
                <h3 className={styles.contact_subtitle}>{title}</h3>
                <p className={styles.contact_email}><a href={`mailto:${mail}`}>{mail}</a></p>
            </div>
            <div className={styles.contact_cube}>
                <CompanionPortal />
            </div>
        </div>
    )
}

ContactMe.propTypes = {
    title: PropTypes.string,
    mail: PropTypes.string,
}

export default memo(ContactMe)