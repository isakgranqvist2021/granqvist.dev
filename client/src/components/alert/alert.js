"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const alert_styled_1 = require("./alert.styled");
const Alert = (props) => {
    const { alert, onClose } = props;
    return (<>
			{alert && (<alert_styled_1.Styled.Alert severity={alert.severity}>
					<p>{alert.message}</p>
					<span onClick={onClose}>
						<span className='material-icons-outlined'>close</span>
					</span>
				</alert_styled_1.Styled.Alert>)}
		</>);
};
exports.Alert = Alert;
