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

  React.useEffect(() => {
    const lines = Array.from(
      document.querySelectorAll<HTMLElement>('.bars-line')
    );
    if (!lines.length) return;

    const THEME_SEL = '.bg-dark, .bg-light';

    const pickThemeAt = (x: number, y: number) => {
      const stack =
        (document.elementsFromPoint?.(x, y) as HTMLElement[]) ??
        [document.elementFromPoint(x, y) as HTMLElement | null].filter(Boolean);

      for (const el of stack) {
        const themed = el.closest<HTMLElement>(THEME_SEL);
        if (themed) {
          return themed.classList.contains('bg-dark') ? 'dark' : 'light';
        }
      }
      return null;
    };

    const updateOne = (line: HTMLElement) => {
      const r = line.getBoundingClientRect();
      const theme = pickThemeAt(r.left + r.width / 2, r.top + r.height / 2);

      line.classList.toggle('light', theme === 'dark');
    };

    let ticking = false;
    const updateAll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        lines.forEach(updateOne);
        ticking = false;
      });
    };
    window.addEventListener('scroll', updateAll, { passive: true });
    window.addEventListener('resize', updateAll);

    const io = new IntersectionObserver(updateAll, { threshold: [0, 0.5, 1] });
    document.querySelectorAll(THEME_SEL).forEach((s) => io.observe(s));

    updateAll();

    return () => {
      window.removeEventListener('scroll', updateAll);
      window.removeEventListener('resize', updateAll);
      io.disconnect();
    };
  }, []);

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

        <a href="mailto:contact@granqvist.dev" className="email-text">
          contact@granqvist.dev
        </a>
      </nav>

      <div ref={navAnimationRef} className="nav-animation"></div>
    </React.Fragment>
  );
}
