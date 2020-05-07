//get a student with their name or get all students
getStudents = (req, res, next) => {
  let query;
  if(req.query.name){
    query = req.models.Student.findOne({ 'name': req.query.name });
  }else{
    query = req.models.Student.find();
  }
  query.exec()
    .then(students => res.send(students))
    .catch(error => next(error));
};

//get student with id
getStudentsById = (req, res, next) => {
  req.models.Student.findById(req.params.id).then((student) => {
    return res.send(student)
  }).catch((error) => {
    next(error)
  })
};

//create a new student
postStudent = (req, res, next) => {
  req.models.Student.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      city: req.body.address.city,
      street: req.body.address.street,
      zipcode: req.body.address.zipcode,
    }
  }).then((student) => {
    return res.status(201).send(student)
  }).catch((error) => {
    next(error)
  })
};

//to update/change a students information
putStudent = (req, res, next) => {
  req.models.Student.updateOne({_id: req.params.id},
    {
      name: req.body.name,
      email: req.body.email,
      address: {
        city: req.body.address.city,
        street: req.body.address.street,
        zipcode: req.body.address.zipcode,
      },
    },{
      new: true,
      upsert: true,
      runvalidators: true,
    }).then((status) => {
      console.log("status: ", status)
      if (status.upserted)
        res.status(201)
      else if (status.nModified)
        res.status(200)
      else 
        res.status(204)
    res.send()
    }).catch((error) => next(error))
};

//delete a specific student
deleteStudentById = (req, res, next) => {
  req.models.Student.findByIdAndDelete(
      req.params.id
  ).then((student) => {
      if (student)
          return res.status(200).send(`${student.name} has been deleted`)
      res.sendStatus(204)
  }).catch((error) => {
      next(error)
  })
};

module.exports = {
  getStudents: getStudents,
  getStudentsById: getStudentsById,
  postStudent: postStudent,
  deleteStudentById: deleteStudentById,
  putStudent: putStudent,
} 