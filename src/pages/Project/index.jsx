import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import Loader from "../../components/Loader";
import pages from "../../assets/json/pages.json";
import styles from "./Project.module.scss";

const Project = () => {
  const { slug } = useParams();
  const getPage = pages.find((page) => page.slug === slug) ?? null;

  if (!getPage) return <Loader showProgress={false} />;

  return (
    <>
      <ScrollToTopOnMount />
      <motion.main
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: "130px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
        className={`${styles.project} container--small`}
      >
        <section className={styles.project_text}>
          <h1 className={styles.project_title}>{getPage?.title}</h1>
          {getPage?.description?.length !== 0 && (
            <div className={styles.project_description}>
              {getPage?.description?.map((page, index) => (<p key={index}>{page}</p>))}
            </div>
          )}
        </section>

        {getPage?.images?.length !== 0 && (
          <section className={styles.project_images}>
            {getPage?.images?.map(({ src, alt }, index) => (
              <img key={index} src={src} alt={alt} loading="lazy" />
            ))}
          </section>
        )}

        <section className={styles.project_back_link}>
          <Link to="/">Back to home</Link>
        </section>
      </motion.main>
    </>
  );
};

export default Project;
