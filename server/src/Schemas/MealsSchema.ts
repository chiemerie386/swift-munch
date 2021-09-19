// const mongoose = require('mongoose');
import mongoose from "mongoose"

const Schema = mongoose.Schema;

const MealSchema = new Schema({
    name: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
   resturant: { type: String, required: true, trim: true },
   mealPic: { type: String, default: "/images/profilePic.png" },
   orders: {type: String, default: "0"}
}, { timestamps: true });

module.exports =  mongoose.model('meals', MealSchema);
// var Flight = mongoose.model('Flights', FlightSchema);
// export = Flight;