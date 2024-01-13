const express = require('express');
require('./db/dbConnect')
const app=express()
const port=process.env.PORT || 5000
const studentRoute=require('./routes/students.js')

app.use(express.json())
app.use('/students/',studentRoute)

app.listen(port,()=>{
    console.log(`connected to port ${port}`);
})