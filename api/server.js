const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3080;

const users = ['a'];

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  console.log(`login called....${JSON.stringify(req.body) }`);
  res.send({
    token: 'test123'
  });
});

app.get('/', function (req, res) {
  res.send('gcic api');
});

app.get('/api/users', (req, res) => {
  console.log('api/users called...');
  res.json(users);
});

app.post('/api/user', (req, res)=> {
  const user = req.body.user;
  console.log('Adding user::::::::', user);
  users.push(user);
  res.json('user addedd');
});


app.listen(port, () => {
  console.log(`Server listening on port::${port}`);
});