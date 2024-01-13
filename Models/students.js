const mongoose = require('mongoose');
const validator = require('validator');

const studentsSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength: 3
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Email is already present'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email invalid')
            }
        }
    },
    phone:{
        type:Number,
        min:1000000000,
        max:9999999999,
        required:true,
        unique:[true, 'Phone no. already present']
    },
    address:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('student', studentsSchema)

