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
exports.Titles = exports.title = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.title = (0, styled_components_1.css) `
	font-weight: 900;
	color: #333;
	text-transform: capitalize;
	letter-spacing: 1.5px;
	color: #3f3f3f;
`;
const h1 = (0, styled_components_1.default)('h1') `
	${exports.title};

	font-size: 4.4rem;

	@media (max-width: 960px) {
		font-size: 3.6rem;
	}

	@media (max-width: 800px) {
		font-size: 3.2rem;
	}

	@media (max-width: 760px) {
		font-size: 3rem;
	}

	@media (max-width: 680px) {
		font-size: 2.5rem;
	}

	@media (max-width: 600px) {
		font-size: 2rem;
	}

	@media (max-width: 420px) {
		font-size: 1.85rem;
	}

	@media (max-width: 360px) {
		font-size: 1.65rem;
	}

	@media (max-width: 325px) {
		font-size: 1.45rem;
	}
`;
const h2 = (0, styled_components_1.default)('h2') `
	${exports.title};

	font-size: 3.5rem;
	margin-bottom: 1rem;
	font-weight: 900;
	letter-spacing: 1px;
	color: #333;
	text-transform: lowercase;

	@media (max-width: 900px) {
		font-size: 2.5rem;
	}

	@media (max-width: 400px) {
		font-size: 2rem;
	}

	@media (max-width: 320px) {
		font-size: 1.8rem;
	}
`;
const h3 = (0, styled_components_1.default)('h3') `
	${exports.title};

	font-size: 2rem;
	margin: 1.5rem 0 0.8rem 0;
	font-weight: 700;
	color: rgb(255, 255, 255);

	@media (max-width: 450px) {
		font-size: 1.7rem;
	}

	@media (max-width: 350px) {
		font-size: 1.5rem;
	}

	@media (max-width: 315px) {
		font-size: 1.35rem;
	}
`;
const h4 = (0, styled_components_1.default)('h4') `
	${exports.title};
`;
const h5 = (0, styled_components_1.default)('h5') `
	${exports.title};
`;
const h6 = (0, styled_components_1.default)('h6') `
	${exports.title};
`;
exports.Titles = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
};
