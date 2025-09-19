import React from 'react';
import { Nav } from './components/nav';
import { Home } from './components/home';
import { Solutions } from './components/solutions';
import { Technology } from './components/technology';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Contact } from './components/contact';

export default function Index() {
  return (
    <React.Fragment>
      <Nav />
      <Home />
      <Solutions />
      <Technology />
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}
