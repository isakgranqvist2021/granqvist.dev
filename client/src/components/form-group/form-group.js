"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroup = void 0;
const form_group_styled_1 = require("./form-group.styled");
const FormGroup = (props) => {
    const { children } = props, rest = __rest(props, ["children"]);
    return <form_group_styled_1.Styled.FormGroup {...rest}>{children}</form_group_styled_1.Styled.FormGroup>;
};
exports.FormGroup = FormGroup;
