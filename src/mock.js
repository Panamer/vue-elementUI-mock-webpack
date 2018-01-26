const express = require('express');
const router = express.Router();
const Mock = require('mockjs')
var Random = Mock.Random;
router.get('/data', (req, res) => {
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
module.exports = router;
