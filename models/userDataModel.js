const mongoose = require("mongoose");

const userDataSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users",
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    gender:{
        type:String,required:true,
    },
    bloodgroup:{
        type:String,required:true,
    },
    diseases:{
        type:String,required:true,
    },
    age:{
        type:Number,required:true,
    },
    address:{
        type:String,required:true,
    },
    zipcode:{
        type:String,required:true,
    },
    place:{
        type:String,required:true,
    },
    country:{
        type:String,required:true,
    },
    code:{
        type:String,required:true,
    },
    phoneno:{
        type:Number,required:true,
    },
    email:{
        type:String,required:true,
    },
    title:{
        type:String,required:true,
    },
    profileimageurl:{
        type:String,
    },
});

module.exports = mongoose.model("userData",userDataSchema);