"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Features = void 0;
const react_1 = require("react");
const aos_1 = __importDefault(require("aos"));
const components_1 = require("components");
const solutions_styled_1 = require("./solutions.styled");
const Features = () => {
    (0, react_1.useEffect)(() => {
        aos_1.default.init({
            duration: 2000,
        });
    }, []);
    return (<solutions_styled_1.Styled.Features id='Solutions' aria-label='My solutions' tabIndex={1}>
			<components_1.Container>
				<solutions_styled_1.Styled.Grid>
					<solutions_styled_1.Styled.Card data-aos='fade-right'>
						<solutions_styled_1.Styled.CardIcon aria-label='Business building icon'>
							business
						</solutions_styled_1.Styled.CardIcon>
						<components_1.Text text='Backend Development' variant='h3'/>
						<components_1.Text variant='subtitle3'>
							Do you need reliable software to power your business
							infrastructure? I utilize popular tools like TypeScript, C# and Go
							to make that happen.
						</components_1.Text>
					</solutions_styled_1.Styled.Card>
					<solutions_styled_1.Styled.Card data-aos='fade-up'>
						<solutions_styled_1.Styled.CardIcon aria-label='Storefront icon'>
							storefront
						</solutions_styled_1.Styled.CardIcon>
						<components_1.Text text='Frontend Development' variant='h3'/>
						<components_1.Text variant='subtitle3'>
							Do you want a modern, fast and user friendly user interface? I
							build modern user interfaces with tools like React and Angular.
						</components_1.Text>
					</solutions_styled_1.Styled.Card>
					<solutions_styled_1.Styled.Card data-aos='fade-left' aria-label='Cloud icon'>
						<solutions_styled_1.Styled.CardIcon>cloud</solutions_styled_1.Styled.CardIcon>
						<components_1.Text text='Cloud Solutions' variant='h3'/>
						<components_1.Text variant='subtitle3'>
							Are you looking to scale your software infrastructure with tools
							provided by Google or Amazon? Then I would be glad to help you.
						</components_1.Text>
					</solutions_styled_1.Styled.Card>
				</solutions_styled_1.Styled.Grid>
			</components_1.Container>
		</solutions_styled_1.Styled.Features>);
};
exports.Features = Features;
