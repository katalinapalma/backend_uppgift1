const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    validator: function(v) {
      return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    }
  },
  address: {
    street: String,
    city: String, 
    zipcode: String,
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;