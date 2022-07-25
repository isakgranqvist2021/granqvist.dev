"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModalState = void 0;
const react_1 = require("react");
const useModalState = () => {
    const [modalIsOpen, setModalIsOpen] = (0, react_1.useState)(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    (0, react_1.useEffect)(() => {
        const tag = document.querySelector('html');
        if (!tag)
            return;
        tag.style.overflowY = modalIsOpen ? 'hidden' : 'auto';
        return () => {
            tag.style.overflowY = 'auto';
        };
    }, [modalIsOpen]);
    return { modalIsOpen, openModal, closeModal };
};
exports.useModalState = useModalState;
