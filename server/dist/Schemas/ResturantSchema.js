"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var ResturantSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    //    gender: { type: String, required: true, trim: true },
    //     phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    resturantName: { type: String, required: true, trim: true },
    resturantLocation: { type: String, required: true, trim: true }
    // flightId: { type: String, required: true },
}, { timestamps: true });
module.exports = mongoose_1.default.model('resturants', ResturantSchema);
