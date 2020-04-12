const express = require('express');
const app = express();

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

app.listen(8000, function () {
  console.log('server is running');
})