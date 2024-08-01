const data = new Map();

function addData({ date, numSales, location }) {
  data.set(date, { date, numSales, location });
}

function getData() {
  return Array.from(data.values());
}

const initialData = [
  { date: '2023-11-01', numSales: 100, location: 'locationA' },
  { date: '2023-11-02', numSales: 120, location: 'locationB' },
  { date: '2023-11-03', numSales: 150, location: 'locationA' },
  { date: '2023-11-04', numSales: 80, location: 'locationB' },
  { date: '2023-11-05', numSales: 90, location: 'locationA' },
  { date: '2023-11-06', numSales: 110, location: 'locationB' },
  { date: '2023-11-07', numSales: 200, location: 'locationA' },
  { date: '2023-11-08', numSales: 130, location: 'locationB' },
  { date: '2023-11-09', numSales: 140, location: 'locationA' },
  { date: '2023-11-10', numSales: 160, location: 'locationB' }
];

initialData.forEach((entry) => addData(entry));

module.exports = {
  addData,
  getData,
};
