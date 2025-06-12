const express = require('express');
const router = express.Router();


router.route('/')
.get((req,res)=>{
    res.status(200).json({msg : "You are in the Contact Page"});
})
.post((req,res)=>{
    res.status(201).json({msg : "Create contact"});
})

router.route('/:id').get((req,res)=>{
    res.status(200).json({msg : `Get contact for ${req.params.id}`});
})

router.route('/:id').put((req,res)=>{
    res.status(200).json({msg : `Update contact ${req.params.id}`})
})

router.route('/:id').delete((req,res)=>{
    res.status(200).json({msg : `Delete contact ${req.params.id}`})
})

module.exports = router;