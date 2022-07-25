"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavState = void 0;
const react_1 = require("react");
const useNavState = () => {
    const [navIsOpen, setNavIsOpen] = (0, react_1.useState)(false);
    const closeNav = () => setNavIsOpen(false);
    const toggleNav = () => setNavIsOpen(!navIsOpen);
    return { navIsOpen, closeNav, toggleNav };
};
exports.useNavState = useNavState;
