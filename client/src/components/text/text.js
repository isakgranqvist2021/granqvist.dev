"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const text_styled_1 = require("./text.styled");
const Text = (props) => {
    const { variant = 'body1', color, text, children } = props;
    const Element = text_styled_1.Styled[variant];
    return <Element color={color}>{text || children}</Element>;
};
exports.Text = Text;
