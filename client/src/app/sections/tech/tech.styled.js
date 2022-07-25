"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Container = (0, styled_components_1.default)('div') `
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	padding: 100px 0;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`;
const GridItem = (0, styled_components_1.default)('div') `
	height: 300px;
	background-image: url(${(props) => props.src});
	background-size: ${(props) => props.backgroundSize || 'cover'};
	background-repeat: no-repeat;
	background-position: center;

	@media (max-width: 680px) {
		height: 200px;
	}
`;
exports.Styled = { Container, GridItem };
