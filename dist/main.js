"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.disable('x-powered-by');
app.use('/public', express_1.default.static(path_1.default.resolve('./public')));
app.get('/', (_, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path_1.default.resolve('./public/index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
