import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import Loader from "./components/Loader";
const HeroInfo = lazy(() => import("./components/HeroInfo"));
const HeroButtons = lazy(() => import("./components/HeroButtons"));
const LiquidCircle = lazy(() => import("./components/LiquidCircle"));
const Header = lazy(() => import("./components/Layout/Header"));
const Section = lazy(() => import("./components/Section"));
const LabItem = lazy(() => import("./components/LabItem"));
const CubePortal = lazy(() => import("./components/CubePortal"));
const MemoCard = lazy(() => import("./components/MemoCard"));
const ContactMe = lazy(() => import("./components/ContactMe"));
import projects from "./assets/json/projects.json";
import skills from './assets/json/skills.json';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader aria-live="polite" />}>
        <Section className="container--hero" id='about'>
          <motion.div className={styles.hero}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}>
            <div className="hero_info">
              <HeroInfo title='Hey! My name is Nemanja.'
                        typewrite='FRONTEND DEVELOPER'
                        description='I&apos;m from Serbia, currently based in Niš. With over 3 years of experience, focused on writing clean, efficient code to bring web projects to life. I’m passionate about developing interactive and responsive user interfaces and always up for tackling new challenges in frontend development.' />
              <div className={styles.hero_info_buttons}>
                <HeroButtons github='https://github.com/littlenines' 
                             linkedin='https://www.linkedin.com/in/galbinovic584/'
                             cv='/cv/nemanja-galbinovic-cv.pdf' />
              </div>
            </div>
            <LiquidCircle />
          </motion.div>
        </Section>
      </Suspense>

      {/* Cubes */}
      <CubePortal />
      
      {/* Personal Projects */}
      <Section title='Personal Projects' id='projects'>
        <div className={styles.projects_card}>
          {projects.map(({ image, imageAlt, title, subtitle, slug }) => {
            return (
              <motion.section key={slug}
                              className={styles.projects_card_item}
                              initial={{ opacity: 0, translateY: '150px' }}
                              whileInView={{ opacity: 1, translateY: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, ease: "easeIn" }}>
                <LabItem image={image}
                         imageAlt={imageAlt}
                         title={title}
                         subtitle={subtitle}
                         link={slug}/>
              </motion.section>
            );
          })}
        </div>
      </Section>

      {/* Skills */}
      <Section title='Technologies I&apos;ve Been Working With' className="container--medium" id='technology'>
        <div className={styles.skills_wrap}>
          {skills?.map(({ id, image, alt, text }) => {
            return (
              <motion.section key={id}
                              initial={{ opacity: 0, translateY: '50px' }}
                              whileInView={{ opacity: 1, translateY: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: id * 0.04, ease: "easeIn" }}>
                <MemoCard image={image} alt={alt} text={text} />
              </motion.section>)
          })}
        </div>
      </Section>

      {/* Contact */}
      <Section title='Want to work with me?' id='contact'>
        <ContactMe title='Send me a message' mail='galbinovic584@gmail.com' />
      </Section>
    </>
  );
}

export default App;
