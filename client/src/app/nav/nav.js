"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
const components_1 = require("components");
const nav_constants_1 = require("./nav.constants");
const nav_helpers_1 = require("./nav.helpers");
const nav_styled_1 = require("./nav.styled");
const Nav = () => {
    const { navIsOpen, closeNav, toggleNav } = (0, nav_helpers_1.useNavState)();
    return (<nav_styled_1.Styled.Nav>
			<components_1.Container className='container'>
				<a href='#Home' aria-label='Top of the page link'>
					<nav_styled_1.Styled.Logo aria-label='isakgranqvist.com company logo' src='/static/images/logo.svg' alt='Isak Granqvist Logo'/>
				</a>
				<nav_styled_1.Styled.NavLinks open={navIsOpen}>
					{nav_constants_1.LINKS.map(({ selector, text }) => (<nav_styled_1.Styled.Link aria-label={selector} key={selector} href={selector} onClick={closeNav}>
							{text}
						</nav_styled_1.Styled.Link>))}
				</nav_styled_1.Styled.NavLinks>

				<nav_styled_1.Styled.Bars.Container aria-label='Menu icon' onClick={toggleNav} open={navIsOpen}>
					<nav_styled_1.Styled.Bars.Line open={navIsOpen}/>
					<nav_styled_1.Styled.Bars.Line open={navIsOpen}/>
					<nav_styled_1.Styled.Bars.Line open={navIsOpen}/>
				</nav_styled_1.Styled.Bars.Container>
			</components_1.Container>

			<nav_styled_1.Styled.Backdrop open={navIsOpen} onClick={closeNav}/>
		</nav_styled_1.Styled.Nav>);
};
exports.Nav = Nav;
