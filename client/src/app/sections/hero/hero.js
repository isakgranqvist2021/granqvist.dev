"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const react_1 = require("react");
const aos_1 = __importDefault(require("aos"));
const components_1 = require("components");
const hero_styled_1 = require("./hero.styled");
const Hero = () => {
    const onClickHandler = (hash) => {
        window.location.hash = hash;
    };
    (0, react_1.useEffect)(() => {
        aos_1.default.init({
            duration: 2000,
        });
    }, []);
    return (<hero_styled_1.Styled.Hero id='Home' aria-label='Hero section' tabIndex={0}>
			<hero_styled_1.Styled.HeroContainer>
				<hero_styled_1.Styled.HeroContent>
					<components_1.Text variant='h1'>
						High Quality Software
						<br /> At Affordable Prices
					</components_1.Text>

					<components_1.Text variant='subtitle1'>
						I build professional websites, modern mobile applications and
						reliable server software. <components_1.Link href='#Contact'>Contact me</components_1.Link>{' '}
						for a quote or further information.
					</components_1.Text>
					<hero_styled_1.Styled.HeroActions>
						<components_1.Button aria-label='Bring me to contact' outlined data-aos='fade-right' onClick={() => onClickHandler('#Contact')}>
							Get in touch
						</components_1.Button>
						<components_1.Button aria-label='Bring me to technologies' data-aos='fade-left' onClick={() => onClickHandler('#Technology')}>
							Technology
						</components_1.Button>
					</hero_styled_1.Styled.HeroActions>
				</hero_styled_1.Styled.HeroContent>
			</hero_styled_1.Styled.HeroContainer>
			<hero_styled_1.Styled.Phone src='/phone.svg' aria-label='Smartphone icon'/>
			<hero_styled_1.Styled.Artboard src='/artboard.svg' aria-label='Webpage image with icons'/>
		</hero_styled_1.Styled.Hero>);
};
exports.Hero = Hero;
