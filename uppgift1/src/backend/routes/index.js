const express = require('express');
const router = express.Router();

const students = require('./students.js');

// Methods
router.get("/students", students.getStudents);
router.post('/students', students.postStudent);
router.delete('/students/:id', students.deleteStudentById);

module.exports = router;