import { lazy, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import { useProgress } from "@react-three/drei";
import { motion } from "motion/react";
import Section from "./components/Section";
import Header from './components/Layout/Header'
import LiquidCircle from "./components/LiquidCircle";
import GooeyButton from "./components/GooeyButton";
import GooeyIconButton from "./components/GooeyIconButton";
import HeroInfo from "./components/HeroInfo";
import Loader from "./components/Loader";
const LabItem = lazy(() => import("./components/LabItem"));
const CubePortal = lazy(() => import("./components/CubePortal"));
const MemoCard = lazy(() => import("./components/MemoCard"));
const ContactMe = lazy(() => import("./components/ContactMe"));
import projects from "./assets/json/projects.json"
import skills from './assets/json/skills.json'

import "./App.scss";

function App() {
  const [isAppReady, setAppReady] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) setTimeout(() => setAppReady(true), 200);
  }, [progress]);

  if (!isAppReady) return <Loader aria-live="polite" />;

  return (
    <>
      <Header />
      <Section className="container--hero" id='about'>
        <motion.div className="hero"
                    initial={{ opacity: 0, transform: 'translate3d(0, 125px, 0)' }}
                    whileInView={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}>
          <div className="hero_info">
            <HeroInfo title='Hey! My name is Nemanja.'
                      typewrite='FRONTEND DEVELOPER'
                      description='I&apos;m from Serbia, currently based in Niš. With over 3 years of experience, focused on writing clean, efficient code to bring web projects to life. I’m passionate about developing interactive and responsive user interfaces and always up for tackling new challenges in frontend development.' />
            <div className="hero_info_buttons">
              <motion.div initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7, ease: "linear" }}>
                <Link to='https://github.com/littlenines' rel="noopener noreferrer" target="_blank">
                  <GooeyIconButton icon={<FontAwesomeIcon icon={faGithub} className="icon--medium" />} aria-label='github' />
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9, ease: "linear" }}>
                <Link to='https://www.linkedin.com/in/galbinovic584/' rel="noopener noreferrer" target="_blank">
                  <GooeyIconButton icon={<FontAwesomeIcon icon={faLinkedinIn} className="icon--medium" />} aria-label='linkedin' />
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.1, ease: "linear" }}>
                <Link to='/cv/nemanja-galbinovic-cv.pdf' target="_blank" rel="noopener noreferrer" download>
                  <GooeyButton isGradientBorder title="Download CV" />
                </Link>
              </motion.div>
            </div>
          </div>
          <LiquidCircle />
        </motion.div>
      </Section>

      {/* Cubes */}
      <CubePortal />

      {/* Personal Projects */}
      <Section title='Personal Projects' id='projects'>
        <div className="projects_card">
          {projects.map(({ image, imageAlt, title, subtitle, slug }) => {
            return (
              <motion.section key={slug}
                              className='projects_card_item'
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
        <div className="skills_wrap">
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
