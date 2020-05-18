const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
  },
  address: {
    street: String,
    city: String, 
    zipcode: String,
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;