"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const components_1 = require("components");
const Footer = (0, styled_components_1.default)('footer') `
	padding: 20px 0;
	background-color: #333;
	border-top: 1px solid #3d3d3d;
`;
const FooterContent = (0, styled_components_1.default)(components_1.Container) `
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #919191;

	@media (max-width: 480px) {
		flex-direction: column;

		p {
			margin-top: 20px;
		}
	}
`;
const LinkGroup = (0, styled_components_1.default)('div') `
	display: flex;

	a {
		line-height: 1.4;
		color: #919191;
		text-decoration: none;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}

		&:not(:last-of-type) {
			margin-right: 20px;
		}
	}

	@media (max-width: 480px) {
		a {
			display: block;
			margin: 20px 0;
		}
	}
`;
exports.Styled = { Footer, FooterContent, LinkGroup };
