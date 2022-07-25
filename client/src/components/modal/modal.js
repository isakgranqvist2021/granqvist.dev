"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const components_1 = require("components");
const modal_styled_1 = require("./modal.styled");
const Modal = (props) => {
    const { open, title, body, footer, onClose } = props;
    const onPreventClose = (e) => {
        e.stopPropagation();
    };
    return (<modal_styled_1.Styled.Modal.Container open={open} onClick={onClose}>
			<modal_styled_1.Styled.Modal.Body open={open} onClick={onPreventClose}>
				{!!title && (<modal_styled_1.Styled.Modal.Header>
						<h3>{title}</h3>

						<components_1.Icon onClick={onClose} icon='close' clickable/>
					</modal_styled_1.Styled.Modal.Header>)}
				<modal_styled_1.Styled.Modal.Content>{body}</modal_styled_1.Styled.Modal.Content>
				{!!footer && <modal_styled_1.Styled.Modal.Footer>{footer}</modal_styled_1.Styled.Modal.Footer>}
			</modal_styled_1.Styled.Modal.Body>
		</modal_styled_1.Styled.Modal.Container>);
};
exports.Modal = Modal;
