"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Link = (0, styled_components_1.default)('a') `
	color: rgb(207, 48, 48);
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
exports.Styled = { Link };
