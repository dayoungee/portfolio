import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
    heroData,
    aboutData,
    projectsData,
    contactData,
    footerData,
    headerData,
    projectData,
    projectImageData,
    projectFontData,
    careerData
} from '../mock/data';
import Header from "./Header/Header";
import Career from "./Carrer/Career";

function App() {
  const portfolioData = {
    hero: heroData,
    about: aboutData,
    projects: projectsData,
    contact: contactData,
    footer: footerData,
    header: headerData,
    project: projectData,
    projectImage: projectImageData,
    projectFont: projectFontData,
    careers: careerData,
  };

  return (
    <PortfolioProvider value={portfolioData}>
      <Header />
      <Hero />
      <About />
      <Career />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
