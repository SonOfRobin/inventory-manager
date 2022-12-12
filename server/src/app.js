if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}
const { randomBytes } = require('node:crypto');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
    .select('f_name', 'l_name')
    .then(users => {
      console.log(users);
      let responseData = users.map(user => ({
        firstName: user.f_name,
        lastName: user.l_name,
      }));
      res.status(200).send(responseData);
    });

});

app.get('/guest', (req, res) => {
  knex('items')
    .join('users', 'users.id', 'items.user')
    .select('f_name', 'l_name', 'items.id', 'item_name', 'description', 'quantity')
    .then(items => {
      console.log(items);
      let responseData = items.map(item => ({
        id: item.id,
        firstName: item.f_name,
        lastName: item.l_name,
        itemName: item.item_name,
        description: item.description,
        quantity: item.quantity,
      }));
      res.status(200).send(responseData);
    });

});

app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  knex('items')
    .select('*')
    .where('user', id)
    .then(items => {
      const data = items.map((item) => item);
      res.status(200).send(data);
    });
});

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, username, } = req.body;
  const plain = req.body.password;
  bcrypt.hash(plain, saltRounds, (err, hash) => {
    knex('users')
      .insert({
        f_name: firstName,
        l_name: lastName,
        email: email,
        username: username,
        password: hash,
      }, ['username'])
      .then(result => res.json({ msg: `First: ${firstName} last: ${lastName} added \n${result}` }));
  });
});

app.post('/login', async (req, res) => {
  const { username } = req.body;
  const plain = req.body.password;
  knex('users')
    .select('username', 'password', 'id')
    .where('username', username.toLowerCase())
    .then(result => {
      if (result[0]) {
        console.log(result[0]);
        console.log(`${plain} =? ${result[0].password}`);
        bcrypt.compare(plain, result[0].password, (err, isMatch) => {
          if (isMatch) {
            console.log(isMatch);
            const token = randomBytes(256);
            res.status(200).send({ auth: token.toString('hex'), id: result[0].id });
          }
          else {
            res.status(401).send(result);
          }
        });
      }
      else {
        res.status(401).send(null);
      }
    });
});

app.post('/user/create-item', async (req, res) => {
  const { user, item_name, description, quantity } = req.body;
  knex('items')
    .insert({
      user: user,
      item_name: item_name,
      description: description,
      quantity: Number.parseInt(quantity),
    }, ['id', 'item_name'])
    .then(result => res.json({ msg: `item_name: ${item_name} of quantity (${quantity})  has been added \n${JSON.stringify(result)}` }));
});

app.put('/user/update-item', async (req, res) => {
  const { id, item_name, description, quantity } = req.body;
  knex('items')
    .where('id', id)
    .update({
      item_name: item_name,
      description: description,
      quantity: Number.parseInt(quantity),
    }, ['id', 'item_name'])
    .then(result => res.json({ msg: `Item: ID:${id}-${item_name} has been updated \n${JSON.stringify(result)}` }));
});

app.delete('/user/delete-item/:id', async (req, res) => {
  const { id } = req.params;
  knex('items')
    .where('id', id)
    .del()
    .then(result => res.json({ msg: `Item: ID:${id} has been deleted \n${JSON.stringify(result)}` }));
});

module.exports = app;