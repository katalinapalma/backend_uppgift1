const express = require('express');
const app = express();
// const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// environment variable PORT or 3000 if unset
// change by executing 'export PORT=2000' in bash before starting
// const port = process.env.PORT || 3000;
const port = 2000;

const students = [
  {id: 1, name: 'dj'},
  {id: 2, name: 'dj2'},
  {id: 3, name: 'dj3'}
]


app.get('/', (req, res) => {
  res.send({'Hello': 'World!!!'});
});

app.get('/students', (req, res) => {
  res.send(students);
});

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if(!student) res.status(404).send('Student with the given id was not found');
  res.send(student);
});
  // res.send(req.params.id);

// app.post('/api', (req, res) {
//   const newStudent = {
//     id: students.length + 1,
//     name: req.body.name,
//   };
//   students.push(newStudent);
//   res.send(newStudent)
// });

// Start up server and begin listen to requests
const listener = app.listen(port, () => {
  console.info(`Server is listening on port ${listener.address().port}.`);
});