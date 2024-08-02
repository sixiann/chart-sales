"use client";
import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import SwitchToggle from "./SwitchToggle";
const maxDays = 10;

export default function Home() {
  const [chartData, setChartData] = useState([]);
  const [showLocation, setShowLocation] = useState(false);

  //set up websocket to receive charts
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      let newChartData = message.data;
      while (newChartData.length > maxDays) {
        newChartData.shift();
      }
      setChartData(newChartData);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };
  }, []);

  return (
    <div>
      <h2>Live Sales Data</h2>
      <SwitchToggle
        showLocation={showLocation}
        setShowLocation={setShowLocation}
      />

      <LineChart 
        chartData={chartData} 
        showLocation={showLocation} 
      />
    </div>
  );
}
