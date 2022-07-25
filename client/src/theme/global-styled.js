"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;
const styled_components_1 = require("styled-components");
exports.GlobalStyles = (0, styled_components_1.createGlobalStyle) `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, html {
        width: 100%;
        overflow-x: hidden; 
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
     }

    input,
    textarea,
    select {
        font-family: Arial, Helvetica, sans-serif;
    }   

    p {
        line-height: 1.4;
    }
`;
