const studentsModel= require('../Models/students');

const getStudents=async(req,res)=>{
    try{
        const getStudents=await studentsModel.find()
        res.status(200).json(getStudents)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

const getStudentById=async(req,res)=>{
    try{
        const {id}=req.params
        const studentWithId = await studentsModel.findById(id)
        res.status(200).json(studentWithId)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

const postStudent=async(req,res)=>{
    const student = req.body
    const newStudent = new studentsModel(student)
    try{
        const result = await newStudent.save()
        res.status(200).json(result)
    }catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}

const deleteStudentById=async(req,res)=>{
    try{
        const {id}=req.params
        const studentWithId = await studentsModel.findByIdAndDelete(id)
        res.status(200).json(studentWithId)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

const updateStudentById=async(req,res)=>{
    const {id}=req.params
    const updates=req.body
    try{
        const studentWithId = await studentsModel.findByIdAndUpdate({_id:id},updates, {new:true})
        return res.status(200).json(studentWithId)
    }catch(err){
        console.log(err)
        return res.status(400).json(err)
    }
}

module.exports={
    updateStudentById,
    deleteStudentById,
    postStudent,
    getStudentById,
    getStudents
}