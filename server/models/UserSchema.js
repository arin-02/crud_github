const mongoose = require('mongoose')


const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    phonenumber:String,
    gender:String

})

const usermongoose=mongoose.model('Usercollection', UserSchema);
module.exports = usermongoose; 