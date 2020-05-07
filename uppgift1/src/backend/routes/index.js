const express = require('express');
const router = express.Router();

const students = require('./students.js');

// Methods
router.get('/students', students.getStudents);
router.get('/students/:id', students.getStudentsById);
router.post('/students', students.postStudent);
router.delete('/students/:id', students.deleteStudentById);
router.put('/students/:id', students.putStudent);

module.exports = router;