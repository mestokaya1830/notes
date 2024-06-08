"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
require("dotenv/config");
app.use(express_1.default.json());
app.use(express_1.default.static('dist'));
console.log('Hello');
app.listen(process.env.PORT, function () { return console.log('Server is running...'); });
