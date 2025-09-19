'use client';

import React from 'react';

export function Nav() {
  const navRef = React.useRef<HTMLElement>(null);
  const navAnimationRef = React.useRef<HTMLDivElement>(null);
  const barsRef = React.useRef<HTMLDivElement>(null);
  const navContentRef = React.useRef<HTMLDivElement>(null);

  const closeNav = React.useCallback(() => {
    document.body.classList.remove('overflow-hidden');

    navRef.current?.classList.remove('open');
    navAnimationRef.current?.classList.remove('open');
    barsRef.current?.classList.remove('open');
    navContentRef.current?.classList.remove('open');
  }, []);

  const openNav = React.useCallback(() => {
    document.body.classList.add('overflow-hidden');

    navRef.current?.classList.add('open');
    navAnimationRef.current?.classList.add('open');
    barsRef.current?.classList.add('open');
    navContentRef.current?.classList.add('open');
  }, []);

  const toggleNav = React.useCallback(() => {
    navRef.current?.classList.contains('open') ? closeNav() : openNav();
  }, [closeNav, openNav]);

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;

      toggleNav();
    });
  }, [toggleNav]);

  return (
    <React.Fragment>
      <div ref={barsRef} className="bars" onClick={toggleNav}>
        <div className="bars-line"></div>
        <div className="bars-line"></div>
        <div className="bars-line"></div>
      </div>

      <nav ref={navRef}>
        <div ref={navContentRef} className="nav-content">
          <a onClick={closeNav} href="#home">
            home
          </a>
          <a onClick={closeNav} href="#solutions">
            solutions
          </a>
          <a onClick={closeNav} href="#technology">
            technology
          </a>
          <a onClick={closeNav} href="#about">
            about
          </a>
          <a onClick={closeNav} href="#projects">
            projects
          </a>
          <a onClick={closeNav} href="#contact">
            contact
          </a>
        </div>

        <div className="social">
          <div className="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/isakgranqvist2021/"
              title="Instagram"
            >
              <img
                src="/svg/instagram.svg"
                alt="Instagram Icon"
                loading="lazy"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/isak-granqvist-b1217a207/"
              title="Linkedin"
            >
              <img src="/svg/linkedin.svg" alt="Linkedin Icon" loading="lazy" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/isakgranqvist2021"
              title="Github"
            >
              <img src="/svg/github.svg" alt="Github Icon" loading="lazy" />
            </a>
          </div>
        </div>
      </nav>

      <div ref={navAnimationRef} className="nav-animation"></div>
    </React.Fragment>
  );
}
