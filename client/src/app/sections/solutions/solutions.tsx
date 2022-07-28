import { Container, Text } from 'components';

import cloud from './cloud.svg';
import domain from './domain.svg';
import { Styled } from './solutions.styled';
import storeFront from './store-front.svg';

export const Features = () => {
  return (
    <Styled.Features id="Solutions" aria-label="My solutions" tabIndex={1}>
      <Container>
        <Styled.Grid>
          <Styled.Card data-aos="fade-right">
            <Styled.CardIcon aria-label="Business building icon">
              <img src={domain} alt="Business building icon" loading="lazy" />
            </Styled.CardIcon>
            <Text text="Backend Development" variant="h3" />
            <Text variant="subtitle3">
              Do you need reliable software to power your business
              infrastructure? I utilize popular tools like TypeScript, C# and Go
              to make that happen.
            </Text>
          </Styled.Card>
          <Styled.Card data-aos="fade-up">
            <Styled.CardIcon aria-label="Storefront icon">
              <img src={storeFront} alt="Storefront icon" loading="lazy" />
            </Styled.CardIcon>
            <Text text="Frontend Development" variant="h3" />
            <Text variant="subtitle3">
              Do you want a modern, fast and user friendly user interface? I
              build modern user interfaces with tools like React and Angular.
            </Text>
          </Styled.Card>
          <Styled.Card data-aos="fade-left" aria-label="Cloud icon">
            <Styled.CardIcon>
              <img src={cloud} alt="Cloud icon" loading="lazy" />
            </Styled.CardIcon>
            <Text text="Cloud Solutions" variant="h3" />
            <Text variant="subtitle3">
              Are you looking to scale your software infrastructure with tools
              provided by Google or Amazon? Then I would be glad to help you.
            </Text>
          </Styled.Card>
        </Styled.Grid>
      </Container>
    </Styled.Features>
  );
};
