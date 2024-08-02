import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  // Legend,
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
  // Legend,
  ChartDataLabels
);

export const options = (showLocation, locations) => ({
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
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
        font:{
          weight: 'bold',
        }
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Number of Sales",
        font:{
          weight: 'bold',
        }
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
        borderColor: "#2ee2d1",
        backgroundColor: "#26BAAC",
      },
    ],
  };
  const locations = sortedData.map(item => item.location);

  return (
      <Line 
      options={options(showLocation, locations)} 
      data={data} />
  );
}
