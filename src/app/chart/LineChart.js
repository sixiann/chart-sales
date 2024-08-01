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
  TimeScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Sales Data Line Chart',
    },
  },
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day',
      },
      title: {
        display: true,
        text: 'Date',
      },
      ticks: {
        source: 'data', // Use the data labels as ticks
        maxRotation: 0, // No rotation for x-axis labels
        minRotation: 0, // No rotation for x-axis labels
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
};

export default function LineChart({ salesData = [] }) { 
  const labels = salesData.map(item => item.date);
  const datasetData = salesData.map(item => ({
    x: item.date,
    y: item.numSales
  }));

  const data = {
    labels: labels, 
    datasets: [
      {
        label: 'Number of Sales',
        data: datasetData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
