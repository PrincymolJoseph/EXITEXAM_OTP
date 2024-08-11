const mongoose = require('mongoose')
const emailotpSchema = mongoose.Schema({
    email:String,
    otp:String,
})
const emailotpData = mongoose.model('emailotp',emailotpSchema)
module.exports = emailotpData