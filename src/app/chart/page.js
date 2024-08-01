"use client";
import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
const maxDays = 10;

export default function Home() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      let newChartData = message.data;
      while (newChartData.length > maxDays) {
        newChartData.shift(); 
      }
      setChartData(newChartData);
      console.log(chartData);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };
  }, []);

  return (
    <div>
      <h2>Live Sales Data</h2>
      <LineChart salesData={chartData}/>
      <ul>
        {chartData.map((dataPoint, index) => (
          <li key={index}>
            Date: {dataPoint.date}, Number of Sales: {dataPoint.numSales}
          </li>
        ))}
      </ul>
    </div>
  );
}
