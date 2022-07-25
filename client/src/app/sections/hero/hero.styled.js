"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const components_1 = require("components");
const Hero = (0, styled_components_1.default)('div') `
	padding: 310px 0;
	position: relative;

	@media (max-width: 950px) {
		padding: 160px 0;
	}

	@media (max-width: 600px) {
		padding: 50px 0;
	}
`;
const HeroContainer = (0, styled_components_1.default)(components_1.Container) ``;
const HeroContent = (0, styled_components_1.default)('div') `
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	@media (max-width: 600px) {
		padding: 160px 0 100px 0;
	}
`;
const HeroActions = (0, styled_components_1.default)('div') `
	display: flex;
	gap: 20px;

	@media (max-width: 600px) {
		flex-direction: column;
		width: 100%;
	}
`;
const Artboard = (0, styled_components_1.default)('img') `
	position: absolute;
	z-index: -1;
	left: 50%;
	bottom: 0;

	@media (max-width: 950px) {
		display: none;
	}
`;
const Phone = (0, styled_components_1.default)('img') `
	position: absolute;
	z-index: -1;
	bottom: 60%;
	left: 60%;

	@media (max-width: 1600px) {
	}

	@media (max-width: 1600px) {
		bottom: 70%;
	}

	@media (max-width: 950px) {
		bottom: 30px;
		left: 65%;
	}

	@media (max-width: 600px) {
		bottom: 60%;
		left: 70%;
	}

	@media (max-width: 540px) {
		bottom: 70%;
	}
`;
exports.Styled = {
    Hero,
    HeroContainer,
    HeroContent,
    HeroActions,
    Artboard,
    Phone,
};
