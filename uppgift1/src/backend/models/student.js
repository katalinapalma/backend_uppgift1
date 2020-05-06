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
    city: String, 
    street: String,
    zipcode: String,
  }
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

// ta bort detta sen
// const studentSchema = new mongoose.Schema({
//     name: String,
//     username: {
//       type: String,
  //    unique: true,
    // },
    // email: {
    //   type: String,
  //    unique: true,
  //    validator: function(v) {
  //      return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  //    },
//     },
//     address: {
//       street: {
//         type: String,
//         unique: true
//       },
//       city: String,
//       zipcode: String,
//     }
//   });