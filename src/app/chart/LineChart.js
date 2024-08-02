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
import ChartDataLabels from "chartjs-plugin-datalabels";

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
  //this makes tooltips appear when mouse is not directly over point
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    //location labels (toggled by showLocation)
    datalabels: {
      display: showLocation,
      formatter: (_, context) => {
        const dataIndex = context.dataIndex;
        return locations[dataIndex];
      },
      align: "bottom",
      color: "black",
      font: {
        weight: "bold",
      },
    },
  },
  scales: {
    x: {
      type: "category",
      title: {
        display: true,
        text: "Date",
        font: {
          weight: "bold",
        },
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Number of Sales",
        font: {
          weight: "bold",
        },
      },
    },
  },
});

export default function LineChart({ chartData = [], showLocation }) {
  // Sort sales data by DATE from oldest to most recent to show nicely on graph
  const sortedData = [...chartData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  //no. of sales on y axis and dates on x axis
  const data = {
    labels: sortedData.map((item) => item.date),
    datasets: [
      {
        label: "Number of Sales",
        data: sortedData.map((item) => ({
          x: item.date,
          y: item.numSales,
        })),
        borderColor: "#2ee2d1",
        backgroundColor: "#26BAAC",
      },
    ],
  };
  const locations = sortedData.map((item) => item.location);

  return <Line options={options(showLocation, locations)} data={data} />;
}
