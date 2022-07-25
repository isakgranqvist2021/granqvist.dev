"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Spinner = (0, styled_components_1.default)('div') `
	border: 2px solid #fff;
	border-top: 2px solid rgb(207, 48, 48);
	border-radius: 50%;
	animation: spin 2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
	width: 15px;
	height: 15px;
	margin: 0 auto;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
exports.Styled = { Spinner };
