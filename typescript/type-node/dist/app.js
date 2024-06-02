"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static('dist'));
app.use((0, helmet_1.default)());
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve('dist/index.html'));
});
app.get('/users', (req, res) => {
    res.status(200).json({ result: 'Hello' });
});
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});
app.use((error, req, res, next) => {
    console.log(error);
    next();
});
app.listen(3000, () => console.log('Server is running...'));
