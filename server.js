const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const mockUsers = [
  { name: 'Mark' },
  { name: 'Jill' }
];

app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: 'successfully get users',
    users: mockUsers
  });
});

app.get('/users/:id', function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "successfully get one user",
    user: req.params.id
  });
});

const mockLoginInfo = {
  username: 'vominhtri',
  password: 'superSecret'
};

app.post('/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (username === mockLoginInfo.username && password == mockLoginInfo.password) {
    res.json({
      success: true,
      message: 'username and password match',
      token: 'encripted token'
    });
  } else {
    res.json({
      success: false,
      message: 'username and password do not match'
    });
  }
});

app.listen(8000, function () {
  console.log('server is running');
})