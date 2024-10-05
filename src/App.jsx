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

import "./App.scss";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <section className="container">
        <div className="hero">
          <div className="hero_info">
            <HeroInfo />

            <div className="buttons">
              <GooeyIconButton icon={<FontAwesomeIcon icon={faGithub} className="icon_size" />}/>
              <GooeyIconButton icon={<FontAwesomeIcon icon={faLinkedinIn} className="icon_size" />}/>
              <GooeyButton isGradientBorder title="Download CV" />
            </div>
          </div>
          <LiquidCircle liquidClass="liquidModelDesktop" />
        </div>
      </section>
      
      {/* Personal Projects */}
      <section className="container">
        <h2 className="projects_title">Personal Projects</h2>
        <div className="projects">
          {projects.map(({ image, imageAlt, title, subtitle }, index) => {
            return (
              <LabItem
                key={index}
                image={image}
                imageAlt={imageAlt}
                title={title}
                subtitle={subtitle}
                className='projects_item'
              />
            );
          })}
        </div>
      </section>
    </Suspense>
  );
}

export default App;
