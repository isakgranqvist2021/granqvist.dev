import { Container } from 'components';

import logo from './logo.svg';
import { LINKS } from './nav.constants';
import { useNavState } from './nav.helpers';
import { Styled } from './nav.styled';

export const Nav = () => {
  const { navIsOpen, closeNav, toggleNav } = useNavState();

  return (
    <Styled.Nav>
      <Container className="container">
        <a href="#Home" aria-label="Top of the page link">
          <Styled.Logo
            aria-label="granqvist.dev company logo"
            src={logo}
            alt="Isak Granqvist Logo"
          />
        </a>
        <Styled.NavLinks open={navIsOpen}>
          {LINKS.map(({ selector, text }) => (
            <Styled.Link
              aria-label={selector}
              key={selector}
              href={selector}
              onClick={closeNav}
            >
              {text}
            </Styled.Link>
          ))}
        </Styled.NavLinks>

        <Styled.Bars.Container
          aria-label="Menu icon"
          onClick={toggleNav}
          open={navIsOpen}
        >
          <Styled.Bars.Line open={navIsOpen} />
          <Styled.Bars.Line open={navIsOpen} />
          <Styled.Bars.Line open={navIsOpen} />
        </Styled.Bars.Container>
      </Container>

      <Styled.Backdrop open={navIsOpen} onClick={closeNav} />
    </Styled.Nav>
  );
};
