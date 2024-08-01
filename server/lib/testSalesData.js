const { addData, getData, getDates } = require('./salesData'); // Adjust the path if needed

// Function to log data and dates
function logResults() {
  console.log('Current Sales Data:', getData());
  console.log('Current Dates:', getDates());
}

// Adding initial data
console.log('Adding initial data...');
addData({ date: '2022-11-01', numSales: 100, location: 'locationA' });
addData({ date: '2021-11-02', numSales: 120, location: 'locationB' });
addData({ date: '2024-11-03', numSales: 150, location: 'locationA' });
logResults();

console.log('Adding more data...');
addData({ date: '2020-11-04', numSales: 80, location: 'locationB' });
addData({ date: '2020-11-05', numSales: 90, location: 'locationA' });
addData({ date: '2020-11-06', numSales: 110, location: 'locationB' });
addData({ date: '2020-11-07', numSales: 200, location: 'locationA' });
logResults();

// console.log('Adding more data to exceed maxDays...');
// addData({ date: '2023-11-08', numSales: 130, location: 'locationB' });
// addData({ date: '2023-11-09', numSales: 140, location: 'locationA' });
// addData({ date: '2023-11-10', numSales: 160, location: 'locationB' });
// addData({ date: '2023-11-11', numSales: 170, location: 'locationA' }); // Should trigger FIFO
// logResults();
