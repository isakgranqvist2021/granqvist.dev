import { Container } from 'components';
import styled from 'styled-components';

const Contact = styled('div')`
  padding: 100px 0;
  overflow: hidden;
  background-color: #fff;

  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

const ContactContainer = styled(Container)`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 600px) {
    gap: 25px;
  }
`;

const Social = styled('div')`
  width: 100%;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 3rem;
    font-weight: 900;
    color: #333;
  }

  @media (max-width: 1100px) {
    margin: 0 0 100px 0 !important;
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 1100px) {
    margin: 0 0 50px 0 !important;
  }

  @media (max-width: 500px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

const SocialIcons = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  a {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease !important;
    width: 64px;
    height: 64px;
    border: 2px solid transparent;

    :active {
      border-color: rgb(207, 48, 48);
    }

    :hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    :not(:last-of-type) {
      margin-right: 1rem;
    }

    img {
      height: 32px;
      width: 32px;
      display: block;
    }
  }

  @media (max-width: 1100px) {
    justify-content: center;
    margin-top: 30px;
  }

  @media (max-width: 500px) {
    a {
      margin-bottom: 10px;
    }
  }
`;

const EmailText = styled('p')`
  text-transform: lowercase;
  margin-top: 40px;
  font-size: 1rem;
  font-weight: 900;
  color: #333;
`;

export const Styled = {
  EmailText,
  Contact,
  ContactContainer,
  Social,
  SocialIcons,
};
