const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const crypto = require('crypto');
const emailotpData = require('../model/emailotpData')
router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.use(bodyParser.json());

router.post('/email',async(req,res)=>{
    console.log(req.body.email)
    const newotp = crypto.randomInt(100000, 999999); // 6-digit OTP
    console.log('otp is -')
    console.log(newotp)
    var newItem = {
                    email:req.body.email,
                    otp:newotp
                    }
    // var newInput = new emailotpData(newItem)
    // await newInput.save()
    const updatedDocument = await emailotpData.findOneAndUpdate(
        { email: req.body.email }, // Find document by _id or any other field
        { $set: newItem }, // Update fields
        // { new: true, upsert: true, runValidators: true } // Return the updated document, create if not exists, and run schema validation
        { new: true, upsert: true } // Return the updated document, create if not exists
    );
    console.log('Updated document:', updatedDocument);
    res.status(201).send({message:`Added OTP ${newotp}`})
})

router.post('/otp',async(req,res)=>{
    console.log(req.body.otp)
    const user = await emailotpData.findOne({otp:req.body.otp});
    if(!user){
        res.send({message:'Not found'})
    }else{
        res.send({message:'Congrats!!!'})
    }
})

module.exports = router