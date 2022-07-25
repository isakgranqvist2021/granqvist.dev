"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const Modal = {
    Container: (0, styled_components_1.default)('div') `
		position: fixed;
		inset: 0;
		z-index: 16;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
		pointer-events: none;
		transition: all 300ms ease;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		${(props) => props.open &&
        (0, styled_components_1.css) `
				opacity: 1;
				pointer-events: all;
			`}
	`,
    Body: (0, styled_components_1.default)('div') `
		width: 100%;
		height: 100%;
		background-color: #fff;
		transition: all 300ms ease;
		transform: translateY(200px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 50%;
		height: 70%;

		@media (max-width: 1100px) {
			width: 60%;
		}

		@media (max-width: 900px) {
			width: 75%;
		}

		@media (max-width: 900px) {
			width: 90%;
			height: 90%;
		}

		${(props) => props.open &&
        (0, styled_components_1.css) `
				transform: translateY(0);
			`}
	`,
    Header: (0, styled_components_1.default)('div') `
		padding: 1rem;
		background-color: rgb(207, 48, 48);
		color: #fff;
		display: flex;
		justify-content: space-between;
	`,
    Content: (0, styled_components_1.default)('div') `
		padding: 1rem;
		flex-grow: 1;
		overflow: auto;
	`,
    Footer: (0, styled_components_1.default)('div') `
		padding: 1rem;
	`,
};
exports.Styled = { Modal };
