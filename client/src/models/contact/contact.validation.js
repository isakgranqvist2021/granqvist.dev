"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchema = void 0;
const email_1 = require("../email");
const contactSchema = (data) => {
    const { email, name, message } = data;
    if (!email)
        return {
            message: 'Please enter an email',
            reason: 'string.empty',
            field: 'email',
        };
    if (!(0, email_1.validateEmail)(email))
        return {
            message: 'Please a valid email address',
            reason: 'string.invalid',
            field: 'email',
        };
    if (!email.trim().length)
        return {
            message: 'Please enter an email',
            reason: 'string.empty',
            field: 'email',
        };
    if (!name)
        return {
            message: 'Please enter your name',
            reason: 'string.empty',
            field: 'name',
        };
    if (!name.trim().length)
        return {
            message: 'Please enter your name',
            reason: 'string.empty',
            field: 'name',
        };
    if (!message)
        return {
            message: 'Please enter a message',
            reason: 'string.empty',
            field: 'message',
        };
    if (!message.trim().length)
        return {
            message: 'Please enter a message',
            reason: 'string.empty',
            field: 'message',
        };
    return null;
};
exports.contactSchema = contactSchema;
