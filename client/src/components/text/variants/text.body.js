"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bodies = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const body1 = (0, styled_components_1.default)('p') `
	line-height: 1.7;
	font-size: 1.1rem;
	letter-spacing: 1.1px;

	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}
`;
const body2 = (0, styled_components_1.default)('p') ``;
const body3 = (0, styled_components_1.default)('p') ``;
exports.Bodies = { body1, body2, body3 };
