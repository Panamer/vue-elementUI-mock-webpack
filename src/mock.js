const express = require('express');
const app = express();
const Mock = require('mockjs')
var Random = Mock.Random;
app.get('/data', (req, res) => {
  const mockData = Mock.mock({
    "code": '200',
    "result|5": [{
      "uid|+1": 1,
      "time": Random.date(),
      "email": Random.email()
    }]
  })
  res.json(mockData)
});

app.post('/test', function (req, res) {
  res.send('POST request to the homepage');
});

module.exports = app;
