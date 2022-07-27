import { Text } from 'components';

import { Styled } from './contact.styled';

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
              <img src="/static/icons/instagram.svg" alt="Instagram Icon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              data-aos="zoom-in"
              aria-label="Linkedin link"
              href="https://www.linkedin.com/in/isak-granqvist-b1217a207/"
              title="Linkedin"
            >
              <img src="/static/icons/linkedin.svg" alt="Linkedin Icon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              data-aos="fade-left"
              aria-label="Github link"
              href="https://github.com/isakgranqvist2021"
              title="Github"
            >
              <img src="/static/icons/github.svg" alt="Github Icon" />
            </a>
          </Styled.SocialIcons>

          <Styled.EmailText data-aos="fade-in">
            contact@granqvist.dev
          </Styled.EmailText>
        </Styled.Social>
      </Styled.ContactContainer>
    </Styled.Contact>
  );
};
