"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const PrivacyPolicy = (0, styled_components_1.default)('div') `
	padding: 3rem;

	ul {
		padding: 1rem 2rem 0 2rem;

		li {
			margin-bottom: 5px;
		}
	}
`;
const Header = (0, styled_components_1.default)('header') `
	color: gray;
	font-size: 0.9rem;
	padding: 20px 0;
`;
const Section = (0, styled_components_1.default)('section') `
	padding: 20px 0;

	h2 {
		margin-bottom: 10px;
	}
`;
exports.Styled = { PrivacyPolicy, Header, Section };
