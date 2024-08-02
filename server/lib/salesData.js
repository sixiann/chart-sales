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
  { date: "2023-11-01", numSales: 420, location: "locationA" },
  { date: "2023-11-02", numSales: 300, location: "locationB" },
  { date: "2023-11-03", numSales: 200, location: "locationA" },
  { date: "2023-11-04", numSales: 300, location: "locationB" },
  { date: "2023-11-05", numSales: 100, location: "locationA" },
  { date: "2023-11-06", numSales: 130, location: "locationB" },
  { date: "2023-11-07", numSales: 90, location: "locationA" },
  { date: "2023-11-08", numSales: 120, location: "locationB" },
  { date: "2023-11-09", numSales: 240, location: "locationA" },
  { date: "2023-11-10", numSales: 350, location: "locationB" },
];

initialData.forEach((entry) => addData(entry));

module.exports = {
  addData,
  getData,
};
