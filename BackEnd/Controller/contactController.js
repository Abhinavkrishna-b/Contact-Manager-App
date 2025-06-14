const asyncHandler = require('express-async-handler');
const getContact = (req,res)=>{
    res.status(200).json({msg : "You are in the Contact Page"});
}
const createContact = asyncHandler(async(req,res)=>{
    console.log("The Data is: ",req.body);
    const {name,age,contact}=req.body;
    if(!name || !age || !contact){
        res.status(400);
        throw new Error("All fields required.")
    }
    res.status(201).json({msg : "Create contact"});     
})
const getContacts = asyncHandler(async(req,res)=>{
    res.status(200).json({msg : `Get contact for ${req.params.id}`});
})
const updateContact =asyncHandler( async(req,res)=>{
    res.status(200).json({msg : `Update contact ${req.params.id}`})
})
const deleteContact =asyncHandler(async(req,res)=>{
    res.status(200).json({msg : `Delete contact ${req.params.id}`})
})

module.exports = {
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact,
};