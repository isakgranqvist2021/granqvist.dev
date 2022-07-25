"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Label = (0, styled_components_1.default)('label') `
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	text-transform: uppercase;
	color: #fff;
	font-weight: 600;
	font-size: 0.9rem;
`;
exports.Styled = { Label };