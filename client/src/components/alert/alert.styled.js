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
const Alert = (0, styled_components_1.default)('div') `
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0.75rem 1rem;
	margin-bottom: 1rem;

	span {
		cursor: pointer;
		transition: all 300ms ease;
	}

	${(props) => (0, styled_components_1.css) `
		${props.severity === 'danger' &&
    (0, styled_components_1.css) `
			background-color: #cf3030;
			color: #fff;
		`}

		${props.severity === 'success' &&
    (0, styled_components_1.css) `
			background-color: #69dd86;
			color: rgb(61, 61, 61);
		`}
	`}
`;
exports.Styled = { Alert };
