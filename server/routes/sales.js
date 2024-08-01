const express = require('express');
const router = express.Router();
const { addData, getData } = require('../lib/salesData'); 

function validateSalesData(salesData){
    const {date, numSales} = salesData;

    if (!date || new Date(date) > new Date()) {
        return 'Date cannot be in the future.';
    }

    if (typeof numSales !== 'number' || numSales < 0 || numSales > 500) {
        return 'Number of sales must be between 0 and 500.';
    }
    
    return null;
}

router.post('/', (req, res) => {
  const salesData = req.body.salesData;

  const validationError = validateSalesData(salesData);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  addData(salesData);
  console.log(getData());
  res.status(200).json({ message: 'Sales data received', data: salesData });
});

module.exports = router;
