import { Button, Link, Text } from 'components';

import artboard from './artboard.svg';
import { Styled } from './hero.styled';
import phone from './phone.svg';

export const Hero = () => {
  const onClickHandler = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <Styled.Hero id="Home" aria-label="Hero section" tabIndex={0}>
      <Styled.HeroContainer>
        <Styled.HeroContent>
          <Text variant="h1" data-aos="fade-in">
            High Quality Software
            <br /> At Affordable Prices
          </Text>

          <Text variant="subtitle1" data-aos="fade-in">
            I build professional websites, modern mobile applications and
            reliable server software. <Link href="#Contact">Contact me</Link>{' '}
            for a quote or further information.
          </Text>
          <Styled.HeroActions>
            <Button
              aria-label="Bring me to contact"
              outlined
              data-aos="fade-right"
              onClick={() => onClickHandler('#Contact')}
            >
              Get in touch
            </Button>
            <Button
              aria-label="Bring me to technologies"
              data-aos="fade-left"
              onClick={() => onClickHandler('#Technology')}
            >
              Technology
            </Button>
          </Styled.HeroActions>
        </Styled.HeroContent>
      </Styled.HeroContainer>
      <Styled.Phone src={phone} aria-label="Smartphone icon" />
      <Styled.Artboard src={artboard} aria-label="Webpage image with icons" />
    </Styled.Hero>
  );
};
