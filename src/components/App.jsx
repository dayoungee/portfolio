import React, { useState, useEffect } from 'react';
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
} from '../mock/data';
import Header from "./Header/Header";

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [header, setHeader] = useState({});
  const [project, setProject] = useState([]);
  const [projectImage, setProjectImage] = useState([]);
  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setHeader({ ...headerData });
    setProject([ ...projectData ]);
    setProjectImage([ ...projectImageData ]);
  }, []);
  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, header, project, projectImage }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
