//store the data as hashmap to easily update sales data by date
//javascript map preserves insertion order
const data = new Map();

function addData({ date, numSales, location }) {
  data.set(date, { date, numSales, location });
}

function getData() {
  return Array.from(data.values());
}

const initialData = [
  { date: '2023-11-01', numSales: 10, location: 'locationA' },
  { date: '2023-11-02', numSales: 20, location: 'locationB' },
  { date: '2023-11-03', numSales: 30, location: 'locationA' },
  { date: '2023-11-04', numSales: 40, location: 'locationB' },
  { date: '2023-11-05', numSales: 50, location: 'locationA' },
  { date: '2023-11-06', numSales: 60, location: 'locationB' },
  { date: '2023-11-07', numSales: 70, location: 'locationA' },
  { date: '2023-11-08', numSales: 80, location: 'locationB' },
  { date: '2023-11-09', numSales: 90, location: 'locationA' },
  { date: '2023-11-10', numSales: 100, location: 'locationB' }
];

initialData.forEach((entry) => addData(entry));

module.exports = {
  addData,
  getData,
};
