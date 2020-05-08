const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const db = require('./models');

const app = express();

const port = process.env.PORT || 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.models = db.models;
  next();
});

app.use(cors())
app.use('/', routes);

app.get('/', (req, res) => {
  res.send("Please type /students as parameter to see all students.")
})

db.connectDb().then(() => {
  const listener = app.listen(port, () => {
    console.info(`Server is listening on port ${listener.address().port}.`);
  })
});