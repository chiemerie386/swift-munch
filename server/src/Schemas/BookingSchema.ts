// const mongoose = require('mongoose');
import mongoose from "mongoose"

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
   gender: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    flightId: { type: String, required: true },
}, { timestamps: true });

module.exports =  mongoose.model('bookings', BookingSchema);
// var Flight = mongoose.model('Flights', FlightSchema);
// export = Flight;