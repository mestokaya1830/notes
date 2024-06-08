"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require("./models/db");
const usersSC_1 = __importDefault(require("./models/usersSC"));
require("dotenv/config");
app.use(express_1.default.json());
app.use(express_1.default.static('dist'));
app.get('/users', async (req, res) => {
    const result = await usersSC_1.default.find({});
    res.status(200).json(result);
});
app.use((req, res) => {
    res.status(404).send('Page Not Found!');
});
app.use((error, req, res, next) => {
    res.status(500).json({ error });
    next();
});
app.listen(process.env.PORT, () => console.log('Server is running...'));
