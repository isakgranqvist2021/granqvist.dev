"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const footer_styled_1 = require("./footer.styled");
const Footer = (props) => {
    const { onPrivacyClick } = props;
    return (<footer_styled_1.Styled.Footer>
			<footer_styled_1.Styled.FooterContent>
				<p aria-label='Copyright text'>&copy; isakgranqvist.com 2021</p>
				<footer_styled_1.Styled.LinkGroup>
					<a onClick={onPrivacyClick} aria-label='Privacy policy link'>
						Privacy Policy
					</a>
					<a href='https://www.allabolag.se/980107SLKD/verksamhet' aria-label='Business info link'>
						Business Info
					</a>
				</footer_styled_1.Styled.LinkGroup>
			</footer_styled_1.Styled.FooterContent>
		</footer_styled_1.Styled.Footer>);
};
exports.Footer = Footer;
