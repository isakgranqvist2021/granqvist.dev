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
const nav_constants_1 = require("./nav.constants");
const Nav = (0, styled_components_1.default)('nav') `
	background-color: rgb(207, 48, 48);
	height: 80px;
	position: fixed;
	top: 0;
	z-index: 10;
	width: 100%;

	.container {
		height: inherit;
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: ${nav_constants_1.MOBILE_NAV_BREAKPOINT}) {
		}
	}

	@media (max-width: ${nav_constants_1.MOBILE_NAV_BREAKPOINT}) {
		padding: 0 1rem;
	}
`;
const NavLinks = (0, styled_components_1.default)('div') `
	@media (max-width: ${nav_constants_1.MOBILE_NAV_BREAKPOINT}) {
		position: fixed;
		background: rgb(255, 255, 255);
		top: 0;
		left: 0;
		height: 100%;
		overflow: hidden;
		width: 0;
		transition: all 300ms ease;
		z-index: 15;
		display: flex;
		flex-direction: column;

		ul {
			display: flex;
			flex-direction: column;
		}

		${(props) => props.open &&
    (0, styled_components_1.css) `
				width: 280px;

				@media (max-width: 321px) {
					width: 225px;
				}
			`}
	}
`;
const Link = (0, styled_components_1.default)('a') `
	color: #fff;
	text-transform: uppercase;
	display: inline-block;
	text-decoration: none;
	font-weight: 600;
	letter-spacing: 1.1px;
	padding: 5px 0;
	transition: all 200ms ease;
	position: relative;

	&::before,
	&::after {
		content: '';
		background-color: #fff;
		height: 2px;
		position: absolute;
		width: 0;
		top: 100%;
		transition: all 200ms ease;
	}

	&::before {
		left: 0;
	}

	&::after {
		right: 0;
	}

	&:hover,
	&.is-current {
		&::before,
		&::after {
			width: 50%;
		}
	}

	&:not(:first-of-type) {
		margin-left: 1rem;
	}

	@media (max-width: ${nav_constants_1.MOBILE_NAV_BREAKPOINT}) {
		margin-left: 0 !important;
		padding: 1rem;
		color: #333;

		&:not(:last-of-type) {
			border-bottom: 1px solid #f5f5f5;
		}

		&::before,
		&::after {
			display: none;
		}
	}
`;
const Backdrop = (0, styled_components_1.default)('div') `
	display: none;
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0);
	z-index: 14;
	pointer-events: none;
	transition: all 300ms ease;

	@media (max-width: ${nav_constants_1.MOBILE_NAV_BREAKPOINT}) {
		display: block;

		${(props) => props.open &&
    (0, styled_components_1.css) `
				background-color: rgba(0, 0, 0, 0.568);
				pointer-events: all;
			`}
	}
`;
const Logo = (0, styled_components_1.default)('img') `
	display: block;
	height: 100%;
	max-width: 200px;

	@media (max-width: ${nav_constants_1.MOBILE_NAV_BREAKPOINT}) {
		display: block;
		height: 50%;
	}
`;
const Bars = {
    Container: (0, styled_components_1.default)('div') `
		display: none;
		height: 35px;
		width: 45px;
		flex-direction: column;
		justify-content: space-between;

		@media (max-width: ${nav_constants_1.MOBILE_NAV_BREAKPOINT}) {
			display: flex;
		}
	`,
    Line: (0, styled_components_1.default)('div') `
		height: 3px;
		width: 100%;
		background-color: #fff;
		transition-property: all;
		transition-duration: 300ms;
		transition-timing-function: cubic-bezier(0.6, -0.4, 0.735, 0.045);

		&:nth-of-type(1) {
			transform-origin: top left;
		}

		&:nth-of-type(3) {
			transform-origin: bottom left;
		}

		${(props) => (0, styled_components_1.css) `
			${props.open &&
        (0, styled_components_1.css) `
				&:nth-of-type(2) {
					opacity: 0;
					transform: translateX(100px);
				}

				&:nth-of-type(1) {
					transform: rotate(45deg);
				}

				&:nth-of-type(3) {
					transform: rotate(-45deg);
				}
			`}
		`}
	`,
};
exports.Styled = { Nav, NavLinks, Link, Backdrop, Logo, Bars };
