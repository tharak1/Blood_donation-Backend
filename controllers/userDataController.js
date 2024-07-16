const asyncHandler = require("express-async-handler");
const userData = require("../models/userDataModel");

const getAllUserData = asyncHandler(async(req,res)=>{
    let filter = {};
    console.log(req.query.bloodgroup);
    if(req.query.bloodgroup){
        filter = {bloodgroup:req.query.bloodgroup};
    }
    console.log(filter);
    const userDatas = await userData.find(filter);
    res.status(200).json(userDatas);
});

const getUserData = asyncHandler(async(req,res)=>{
    const userD = await userData.find({user_id:req.user.id});
    res.status(200).json(userD);
});


const createUserData = asyncHandler(async(req,res)=>{
    const {firstname,lastname,gender,bloodgroup,diseases,age,address,zipcode,place,country,code,phoneno,email,title} = req.body;
    const createdUserData = await userData.create({user_id : req.user.id , firstname,lastname,gender,bloodgroup,diseases,age,address,zipcode,place,country,code,phoneno,email,title});
    res.status(200).json(createdUserData)
});

const updateUserData = asyncHandler(async(req,res)=>{
    const updatedUserData = await userData.findByIdAndUpdate(
        {user_id : req.user.id},
        req.body,{new:true}
    );
    res.status(200).json(updatedUserData);
});

const updateUserProfile = asyncHandler(async(req,res)=>{
    const updatedUserData = await userData.findByIdAndUpdate(
        {user_id : req.user.id},
        req.body,{new:true}
    );
    res.status(200).json(updatedUserData);
});


module.exports = {getAllUserData,createUserData,updateUserData,getUserData,updateUserProfile};