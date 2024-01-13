const express=require('express')
const router = express.Router()
const {
    updateStudentById,
    deleteStudentById,
    postStudent,
    getStudentById,
    getStudents
}= require('../controllers/students.js')

router.route('/').post(postStudent).get(getStudents)
router.route('/:id').get(getStudentById).delete(deleteStudentById).patch(updateStudentById)

module.exports=router