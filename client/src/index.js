"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const app_1 = require("./app");
const config_1 = require("./config");
react_dom_1.default.render(<react_1.default.StrictMode>
		<app_1.App />
	</react_1.default.StrictMode>, document.getElementById('root'));
(0, config_1.reportWebVitals)();
