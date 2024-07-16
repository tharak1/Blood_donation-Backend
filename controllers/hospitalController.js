const asyncHandler = require("express-async-handler");
const Hospitals = require("../models/hospitalModel");

const createHospital = asyncHandler(async(req,res)=>{
    const newHospital = await Hospitals.create(req.body);
    res.status(200).json(newHospital)
});

const deleteHospital = asyncHandler(async(req,res)=>{
    const deletedhos = await Hospitals.findByIdAndRemove(req.params.id);
    if(deletedhos){
        res.status(200).json({message:"success"});
    }
});

const getAllHospitals = asyncHandler(async(req,res)=>{
    const hospital = await Hospitals.find();
    res.status(200).json(hospital);
});

module.exports = {createHospital,deleteHospital,getAllHospitals};