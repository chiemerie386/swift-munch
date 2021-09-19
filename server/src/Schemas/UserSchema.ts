// const mongoose = require('mongoose');
import mongoose from "mongoose"

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
//    gender: { type: String, required: true, trim: true },
//     phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    // flightId: { type: String, required: true },
}, { timestamps: true });

module.exports =  mongoose.model('users', UserSchema);
// var Flight = mongoose.model('Flights', FlightSchema);
// export = Flight;
