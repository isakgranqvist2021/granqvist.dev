import { Text } from 'components';

import { Styled } from './contact.styled';
import github from './github.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';

export const Contact = () => {
  return (
    <Styled.Contact id="Contact" aria-label="Contact section" tabIndex={4}>
      <Styled.ContactContainer>
        <Styled.Social aria-label="Social media icons">
          <Text
            variant="h3"
            data-aos="fade-in"
            text="You can find me on social media"
          />

          <Styled.SocialIcons>
            <a
              target="_blank"
              rel="noreferrer"
              data-aos="fade-right"
              aria-label="Instagram link"
              href="https://www.instagram.com/isakgranqvist2021/"
              title="Instagram"
            >
              <img src={instagram} alt="Instagram Icon" loading="lazy" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              data-aos="zoom-in"
              aria-label="Linkedin link"
              href="https://www.linkedin.com/in/isak-granqvist-b1217a207/"
              title="Linkedin"
            >
              <img src={linkedin} alt="Linkedin Icon" loading="lazy" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              data-aos="fade-left"
              aria-label="Github link"
              href="https://github.com/isakgranqvist2021"
              title="Github"
            >
              <img src={github} alt="Github Icon" loading="lazy" />
            </a>
          </Styled.SocialIcons>

          <Styled.EmailText>contact@granqvist.dev</Styled.EmailText>
        </Styled.Social>
      </Styled.ContactContainer>
    </Styled.Contact>
  );
};
