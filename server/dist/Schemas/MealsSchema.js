"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var MealSchema = new Schema({
    name: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    resturant: { type: String, required: true, trim: true },
    mealPic: { type: String, default: "/images/profilePic.png" },
    orders: { type: String, default: "0" }
}, { timestamps: true });
module.exports = mongoose_1.default.model('meals', MealSchema);
// var Flight = mongoose.model('Flights', FlightSchema);
// export = Flight;
