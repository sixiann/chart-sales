import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const options = (showLocation, locations) => ({
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: "Sales Data Line Chart",
    },
    datalabels: {
        display: showLocation,
        formatter: (_, context) => {
            const dataIndex = context.dataIndex;
            return locations[dataIndex];
          },
        align: 'top',
        color: 'black',
        font: {
          weight: 'bold',
        },
      },
  },
  scales: {
    x: {
      type: "category",
      title: {
        display: true,
        text: "Date",
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Number of Sales",
      },
    },
  },
});

export default function LineChart({ chartData = [], showLocation}) {
  // Sort sales data by date from oldest to most recent
  const sortedData = [...chartData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Prepare data for the chart
  const data = {
    labels: sortedData.map((item) => item.date), // Dates as labels for x-axis
    datasets: [
      {
        label: "Number of Sales",
        data: sortedData.map((item) => ({
          x: item.date, // Dates as x-axis values
          y: item.numSales,
        })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const locations = sortedData.map(item => item.location);

  return (
    <div>
      <Line options={options(showLocation, locations)} data={data} />
    </div>
  );
}
