import { Suspense, lazy } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
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
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Section>
        <div className="hero">
          <div className="hero_info">
            <HeroInfo title='Hey! My name is Nemanja.'
                      typewrite='FRONTEND DEVELOPER'
                      description='I&apos;m from Serbia, currently based in Niš. With over 3 years of experience, focused on writing clean, efficient code to bring web projects to life. I’m passionate about developing interactive and responsive user interfaces and always up for tackling new challenges in frontend development.' />

            <div className="hero_info_buttons">
              <Link to='https://github.com/littlenines' rel="noopener noreferrer" target="_blank">
                <GooeyIconButton icon={<FontAwesomeIcon icon={faGithub} className="icon--medium" />} aria-label='github' />
              </Link>
              <Link to='https://www.linkedin.com/in/galbinovic584/' rel="noopener noreferrer" target="_blank">
                <GooeyIconButton icon={<FontAwesomeIcon icon={faLinkedinIn} className="icon--medium" />} aria-label='linkedin' />
              </Link>
              <Link to='/cv/nemanja-galbinovic-cv.pdf' target="_blank" rel="noopener noreferrer" download>
                <GooeyButton isGradientBorder title="Download CV" />
              </Link>
            </div>
          </div>
          <LiquidCircle liquidClass="liquid_circle--desktop" />
        </div>
      </Section>

      {/* Cubes */}
      <CubePortal />

      {/* Personal Projects */}
      <Section title='Personal Projects'>
        <div className="projects_card">
          {projects.map(({ image, imageAlt, title, subtitle }, index) => {
            return (
              <LabItem key={index}
                       image={image}
                       imageAlt={imageAlt}
                       title={title}
                       subtitle={subtitle}
                       className='projects_card_item'
              />
            );
          })}
        </div>
      </Section>

      {/* Skills */}
      <Section title='Technologies I&apos;ve Been Working With' className="container--medium">
        <div className="skills_wrap">
          {skills?.map(({ id, image, alt, text }) => <MemoCard key={id} image={image} alt={alt} text={text} />)}
        </div>
      </Section>

      {/* Contact */}
      <Section title='Want to work with me?'>
        <ContactMe title='Send me a message' mail='galbinovic584@gmail.com' />
      </Section>
    </Suspense>
  );
}

export default App;
