"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var OrderSchema = new Schema({
    customer: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    resturant: { type: String, required: true, trim: true },
    meal: { type: String, required: true, trim: true },
    status :{type: String, default: "not delivered"}
    //    orders: {type: String, default: "0"}
}, { timestamps: true });
module.exports = mongoose_1.default.model('orders', OrderSchema);
