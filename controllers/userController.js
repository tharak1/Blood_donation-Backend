const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const getUsers = asyncHandler(async(req,res) =>{
    const users = await User.find()
    res.status(200).json(users);
});

const registerUser = asyncHandler(async (req,res) =>{
    const {username , email , password}= req.body;
    if(!username || !email || !password ){
        res.status(200).json({error:"all fields are manditory"});
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(200).json({error:"user already exists"});
    }

    const hashPassword = await bcrypt.hash(password,10);
    console.log("hashed password ",hashPassword);

    const user = await User.create({
        username,email,password : hashPassword,
    });
    if(user){
        res.status(201).json(user);
    }else{
        res.status(200).json({error:"something went wrong"});
    }
    
});

const loginUser = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(200).json({error:"all fields are manditory"});
    }
    const user = await User.findOne({email});    
    if(user && (await bcrypt.compare(password,user.password))){
            const accessToken = jwt.sign(
                {
                    user : {
                        username : user.username,
                        email : user.email,
                        id : user.id,
                    }
                },
                process.env.ACCESS_TOKEN_SECERT,
            );
            res.json(accessToken);
    }else{
        res.status(200).json({error:"user not found or email or password dont match"});
    }
    
});


const currentUser = asyncHandler(async (req,res) =>{
    res.json(req.user);
});

module.exports = {registerUser,loginUser,currentUser,getUsers};