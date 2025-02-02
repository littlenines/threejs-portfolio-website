import { Link } from 'react-router-dom';
import GooeyButton from '../../components/GooeyButton';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main>
      <section className={styles.not_found_illustration}>
        <aside className={styles.not_found_illustration_text}>
          <p>/ /</p>
          <p> / /  Nice job breaking it,</p>
          <p> / / / hero.</p>
          <p>/</p>
        </aside>
        <figure className={styles.not_found_illustration_image}>
          <img src="/glados.webp" alt="glados" />
        </figure>
      </section>
      <section className={styles.not_found_content}>
        <h1 className={styles.not_found_content_title}>404</h1>
        <p className={styles.not_found_content_subtitle}>This page is a <span className={styles.not_found_content_highlight}>lie.</span></p>
        <Link to={'/'}><GooeyButton title="Back Home" /></Link>
      </section>
    </main>
  )
}

export default NotFound