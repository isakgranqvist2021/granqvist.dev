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
const button = (0, styled_components_1.css) `
	border-width: 1px;
	border-style: solid;
	padding: 0.8rem 1.5rem;
	font-size: 0.75rem;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: 700;
	letter-spacing: 1.1px;
	font-family: 'Arial';
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
	min-width: 100px;

	${(props) => props.disabled &&
    (0, styled_components_1.css) `
			pointer-events: none;
		`}

	@media (max-width: 600px) {
		width: 100%;
	}
`;
const primary = (0, styled_components_1.default)('button') `
	${button};

	background-color: #cf3030;
	border-color: #cf3030;
	color: #fff;

	&:hover {
		background-color: transparent;
		color: #cf3030;
	}

	${(props) => props.outlined &&
    (0, styled_components_1.css) `
			background-color: transparent;
			border-color: #cf3030;
			color: #cf3030;

			&:hover {
				background-color: #cf3030;
				color: #fff;
			}
		`}
`;
const secondary = (0, styled_components_1.default)('button') `
	${button};

	background-color: #fff;
	border-color: #fff;
	color: #333;

	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	${(props) => props.outlined &&
    (0, styled_components_1.css) `
			background-color: transparent;
			border-color: #fff;
			color: #fff;
		`}
`;
exports.Styled = { primary, secondary };
