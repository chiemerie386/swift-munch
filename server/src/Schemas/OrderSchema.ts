// const mongoose = require('mongoose');
import mongoose from "mongoose"

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    name: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
   resturant: { type: String, required: true, trim: true },
   meal: { type: String, required: true, trim: true },
//    orders: {type: String, default: "0"}
}, { timestamps: true });

module.exports =  mongoose.model('orders', OrderSchema);
