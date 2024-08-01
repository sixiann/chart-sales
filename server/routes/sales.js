const express = require('express');
const router = express.Router();
const { addData, getData } = require('../lib/salesData'); 


router.post('/', (req, res) => {
  const salesData = req.body.salesData;

  addData(salesData);
  console.log(getData());
  res.status(200).json({ message: 'Sales data received', data: salesData });
});

module.exports = router;
