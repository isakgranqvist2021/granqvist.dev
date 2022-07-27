import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { GlobalStyles } from 'theme';

import { Nav } from './nav';
import { About, Contact, Features, Hero, Projects } from './sections';

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <GlobalStyles />

      <Nav />
      <Hero />
      <Features />
      <Projects />
      <About />
      <Contact />
    </>
  );
};
