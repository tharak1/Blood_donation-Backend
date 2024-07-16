const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    phno:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    map:{
        type:String,
    },

});

module.exports = mongoose.model("Hospitals",hospitalSchema);