if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

app.get('/', (request, response) => {
  response.status(200).send('App root route running');
});

app.get('/users', (req, res) => {
  knex('users')
    .select('*')
    .then(users => {
      let responseData = users.map(user => ({
        firstName: user.f_name,
        lastName: user.l_name,
        username: user.username,
      }));
      res.status(200).send(responseData);
    });

});

app.post('/users', (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  knex('users')
    .insert({
      f_name: firstName,
      l_name: lastName,
      email: email,
      username: username,
      password: password,
    }, ['username'])
    .then(result => res.json({ msg: `First: ${firstName} last: ${lastName} added \n${result}` }));
});

module.exports = app;