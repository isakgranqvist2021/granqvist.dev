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
exports.POST = exports.GET = void 0;
const serverAddr = process.env.REACT_APP_SERVER_ADDR + '/api';
const GET = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { endpoint, signal } = options;
    try {
        const response = yield fetch(serverAddr + endpoint, {
            method: 'GET',
            signal,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return yield response.json();
    }
    catch (err) {
        return Promise.reject({
            message: err.message,
            success: false,
            data: null,
        });
    }
});
exports.GET = GET;
const POST = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { endpoint, signal, body } = options;
    try {
        const response = yield fetch(serverAddr + endpoint, {
            method: 'POST',
            signal,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return yield response.json();
    }
    catch (err) {
        return Promise.reject({
            message: err.message,
            success: false,
            data: null,
        });
    }
});
exports.POST = POST;
