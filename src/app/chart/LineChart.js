import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Sales Data Line Chart',
    },
  },
  scales: {
    x: {
      type: 'category', // Use category scale for x-axis
      title: {
        display: true,
        text: 'Date',
      },
    },
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: {
        display: true,
        text: 'Number of Sales',
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.raw} sales`;
        },
      },
    },
  },
};

export default function LineChart({ chartData = [] }) {
  // Sort sales data by date from oldest to most recent
  const sortedData = [...chartData].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Prepare data for the chart
  const data = {
    labels: sortedData.map(item => item.date), // Dates as labels for x-axis
    datasets: [
      {
        label: 'Number of Sales',
        data: sortedData.map(item => ({
          x: item.date, // Dates as x-axis values
          y: item.numSales,
        })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
