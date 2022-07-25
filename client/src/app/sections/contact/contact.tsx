import { Text } from 'components';

import { Styled } from './contact.styled';

export const Contact = () => {
	return (
		<Styled.Contact id='Contact' aria-label='Contact section' tabIndex={4}>
			<Styled.ContactContainer>
				<Styled.Social aria-label='Social media icons'>
					<Text
						variant='h3'
						text='You can reach me through my social channels'
						data-aos='fade-left'
					/>

					<Styled.SocialIcons data-aos='fade-up'>
						<a
							aria-label='Instagram link'
							href='https://www.instagram.com/isakgranqvist2021/'
							title='Instagram'>
							<img src='/static/icons/instagram.svg' alt='Instagram Icon' />
						</a>
						<a
							aria-label='Linkedin link'
							href='https://www.linkedin.com/in/isak-granqvist-b1217a207/'
							title='Linkedin'>
							<img src='/static/icons/linkedin.svg' alt='Linkedin Icon' />
						</a>
						<a
							aria-label='Github link'
							href='https://github.com/isakgranqvist2021'
							title='Github'>
							<img src='/static/icons/github.svg' alt='Github Icon' />
						</a>
					</Styled.SocialIcons>

					<Styled.EmailText data-aos='fade-up'>
						contact@isakgranqvist.com
					</Styled.EmailText>
				</Styled.Social>
			</Styled.ContactContainer>
		</Styled.Contact>
	);
};
