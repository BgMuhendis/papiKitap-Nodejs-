const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const UserSchema= new Schema({
    url:{
        type: String,
        required: true,
        trim:true,
        unique:true,
    },
    name:{
        type: String,
        required:true,
        trim:true,
        unique:true

    },

},{collection:"images", timestamps:true});


module.exports=mongoose.model("image",UserSchema);

