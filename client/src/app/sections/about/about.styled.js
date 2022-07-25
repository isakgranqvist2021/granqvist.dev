"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const components_1 = require("components");
const About = (0, styled_components_1.default)('div') `
	padding: 100px 0;
	min-height: 75vh;
	display: flex;
	align-items: center;
	background-color: #333;

	h2,
	p {
		color: #fff;
	}
`;
const AboutContainer = (0, styled_components_1.default)(components_1.Container) `
	display: flex;
	height: 100%;

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 3rem;
	}
`;
const FlexItem = (0, styled_components_1.default)('div') `
	flex-grow: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	svg {
		width: 300px;
		height: 300px;
		max-width: 100%;
		fill: #ffffff;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		svg {
			margin-bottom: 2rem;
		}
	}
`;
exports.Styled = { About, AboutContainer, FlexItem };
