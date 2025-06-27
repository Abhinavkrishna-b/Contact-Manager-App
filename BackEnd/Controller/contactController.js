const asyncHandler = require('express-async-handler');
const Contacts = require("../models/contactSchema");


const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contacts.find({user_id:req.user.id});
    res.status(200).json(contact);
})

const createContact = asyncHandler(async(req,res)=>{
    console.log("The Data is: ",req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields required.")
    }

    const contact = await Contacts.create({
        name,
        email,
        phone,
        user_id:req.user.id,
        //In object literals, if the property key and the variable name are the same, ES6 allows the use of a shorthand syntax to define object properties.
    })
    res.status(201).json(contact);     
})
const getContacts = asyncHandler(async(req,res)=>{
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact);
})
const updateContact =asyncHandler( async(req,res)=>{
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("You don't have the permission");
    }

    const updatedContact = await Contacts.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true }
);
    res.status(200).json(updatedContact);
})
const deleteContact =asyncHandler(async(req,res)=>{
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("You don't have the permission");
    }
    await Contacts.deleteOne({ _id: contact._id });
    res.status(200).json(contact);
})

module.exports = {
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact,
};