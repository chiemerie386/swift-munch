// //The require(‘mongoose’) call above returns a Singleton object. 
// //It means that the first time you call require(‘mongoose’), it 
// //is creating an instance of the Mongoose class and returning it. 
// //On subsequent calls, it will return the same instance that was 
// //created and returned to you the first time because of how module 
// //import/export works in ES6.

// const mongoose = require("mongoose");
// // import mongoose from "mongoose"
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useUnifiedTopology', true);

// class Database {

//     constructor() {
//         this.connect();
//     }

//     connect() {
//         mongoose.connect("mongodb+srv://Admin:adming@liveproject.tynfk.mongodb.net/Flight-Booking?retryWrites=true&w=majority")
//         .then(() => {
//             console.log("database connection successful");
//         })
//         .catch((err:Error) => {
//             console.log("database connection error " + err);
//         })
//     }
// }

// export = new Database();

// import { threadId } from "worker_threads";

require('dotenv').config;
const mongoose = require("mongoose");
// import mongoose from "mongoose"
let th = "mongodb+srv://Admin:Admin@task9.l8ypz.mongodb.net/test?retryWrites=true&w=majority"
let bb = process.env.MONGO_URI
mongoose.connect("mongodb+srv://Admin:admin@liveproject.tynfk.mongodb.net/Food-App?retryWrites=true&w=majority",  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
}).then(()=> console.log("connected to database lets see"))
.catch(()=>console.log("not connected" + process.env.MONGO_URI))

mongoose.connection.on("error", (err:any) => {
    console.log(`DB connection error: ${err.message}`);
    });


    module.exports = mongoose;

