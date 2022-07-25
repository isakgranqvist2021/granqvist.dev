"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtitles = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const subtitle1 = (0, styled_components_1.default)('p') `
	margin: 1.8rem 0;
	font-size: 1.3rem;
	font-weight: 500;
	max-width: 50ch;
	color: #333;

	@media (max-width: 360px) {
		font-size: 1rem;
	}

	@media (max-width: 325px) {
		font-size: 1rem;
	}
`;
const subtitle2 = (0, styled_components_1.default)('p') ``;
const subtitle3 = (0, styled_components_1.default)('p') `
	font-size: 1.1rem;
	font-weight: 400;
	color: #f5f5f5;
`;
exports.Subtitles = {
    subtitle1,
    subtitle2,
    subtitle3,
};
