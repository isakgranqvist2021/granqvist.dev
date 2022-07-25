"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Container = (0, styled_components_1.default)('section') `
	width: 75%;
	margin: 0 auto;

	@media (max-width: 600px) {
		width: 90%;
	}
`;
exports.Styled = { Container };
