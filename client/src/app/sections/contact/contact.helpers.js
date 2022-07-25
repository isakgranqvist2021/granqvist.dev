"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContactState = void 0;
const react_1 = require("react");
const models_1 = require("models");
const services_1 = require("services");
const contact_constants_1 = require("./contact.constants");
const useContactState = () => {
    const [state, setState] = (0, react_1.useState)({
        values: contact_constants_1.INITIAL_FORM_STATE,
        alert: null,
        isLoading: false,
        fieldWithError: null,
    });
    const submit = () => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, models_1.contactSchema)(state.values);
        if (result) {
            return setState((prevState) => (Object.assign(Object.assign({}, prevState), { fieldWithError: result.field, alert: { message: result.message, severity: 'danger' } })));
        }
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { fieldWithError: null, isLoading: true })));
        const response = yield (0, services_1.postContact)(state.values);
        setState((prevState) => ({
            values: response.success ? contact_constants_1.INITIAL_FORM_STATE : prevState.values,
            isLoading: false,
            fieldWithError: null,
            alert: {
                message: response.message,
                severity: response.success ? 'success' : 'danger',
            },
        }));
    });
    const setValue = (key, value) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { values: Object.assign(Object.assign({}, prevState.values), { [key]: value }) })));
    };
    const clearAlert = () => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { alert: null })));
    };
    return Object.assign(Object.assign({}, state), { submit,
        setValue,
        clearAlert });
};
exports.useContactState = useContactState;
