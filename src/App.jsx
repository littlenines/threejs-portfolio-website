import { Suspense } from "react";
import Header from './components/Layout/Header'
import LiquidCircle from "./components/LiquidCircle";
import GooeyButton from "./components/GooeyButton";
import GooeyIconButton from "./components/GooeyIconButton";
import HeroInfo from "./components/HeroInfo";
import Loader from "./components/Loader";
import LabItem from "./components/LabItem";
import projects from "./assets/json/projects.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import CubePortal from "./components/CubePortal";
import MemoCard from "./components/MemoCard";
import CompanionPortal from "./components/CompanionPortal";
import Section from "./components/Section";
import skills from './assets/json/skills.json'

import "./App.scss";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Section>
        <div className="hero">
          <div className="hero_info">
            <HeroInfo />

            <div className="buttons">
              <GooeyIconButton icon={<FontAwesomeIcon icon={faGithub} className="icon_size" />} aria-label='github'/>
              <GooeyIconButton icon={<FontAwesomeIcon icon={faLinkedinIn} className="icon_size" />} aria-label='linkedin' />
              <GooeyButton isGradientBorder title="Download CV" />
            </div>
          </div>
          <LiquidCircle liquidClass="liquid_model_desktop" />
        </div>
      </Section>

      {/* Cubes */}
      <CubePortal />
      
      {/* Personal Projects */}
      <Section title='Personal Projects'>
        <div className="projects_card">
          {projects.map(({ image, imageAlt, title, subtitle }, index) => {
            return (
              <LabItem
                key={index}
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

      {/* SKILLS */}
      <Section title='Technologies I&apos;ve Been Working With' className="container_md">
        <div className="skills_wrap">
          {skills?.map(({ id, image, alt, text }) => <MemoCard key={id} image={image} alt={alt} text={text} />)}
        </div>
      </Section>

      <Section title='Want to work with me?'>
        <div className="contact_info">
          <div>
            <h3 className="contact_subtitle">Send me a message</h3>
            <p className="contact_email"><a href="mailto:galbinovic584@gmail.com">galbinovic584@gmail.com</a></p>
          </div>
          <div className="contact_cube">
            <CompanionPortal />
          </div>
        </div>
      </Section>
    </Suspense>
  );
}

export default App;
