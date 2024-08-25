const mongoose = require("mongoose")

const connectDb = ()=>{
    mongoose.connect("mongodb+srv://saitharakreddyv59:tharak@tharak.k1lxca6.mongodb.net/vishesh").then(()=>console.log("database connected")).catch((err)=>console.log(err));
    // const connect =  mongoose.connect("mongodb://127.0.0.1:27017/vishesh");
    //     console.log("database connection is established ");
}

module.exports = connectDb;