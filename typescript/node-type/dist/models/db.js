"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db = mongoose_1.default.connect('mongodb://mesto:MK1972mk11130113@localhost:27017/works?authSource=works')
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));
exports.default = db;
