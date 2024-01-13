const mongoose = require('mongoose');

const start=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/studentsReg')
        console.log('connected to Db')
    }
    catch(err){
        console.log(err);
        console.log('Error connecting to Db')
    }
}
start()

