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
exports.postContact = exports.getProjects = void 0;
const http_1 = require("services/http");
const getProjects = (signal) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, http_1.GET)({
        endpoint: '/projects',
        signal,
    });
});
exports.getProjects = getProjects;
const postContact = (body, signal) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, http_1.POST)({
        endpoint: '/contact',
        body,
        signal,
    });
});
exports.postContact = postContact;
