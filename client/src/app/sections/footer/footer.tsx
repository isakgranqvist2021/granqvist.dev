import { Styled } from './footer.styled';
import { FooterProps } from './footer.types';

export const Footer = (props: FooterProps) => {
	const { onPrivacyClick } = props;

	return (
		<Styled.Footer>
			<Styled.FooterContent>
				<p aria-label='Copyright text'>&copy; isakgranqvist.com 2021</p>
				<Styled.LinkGroup>
					<a onClick={onPrivacyClick} aria-label='Privacy policy link'>
						Privacy Policy
					</a>
				</Styled.LinkGroup>
			</Styled.FooterContent>
		</Styled.Footer>
	);
};
