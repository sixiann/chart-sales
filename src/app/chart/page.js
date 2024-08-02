"use client";
import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import SwitchToggle from "./SwitchToggle";
import { Heading } from "@radix-ui/themes";

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
    <div className="bg-background h-screen px-5 lg:px-40 flex flex-col justify-center items-center">
      <div className="px-5 w-full flex flex-row justify-between items-center">
        <Heading size="8" className="mb-3">
          Live Sales
        </Heading>
        <button
          className="px-5 h-10 rounded-md font-semibold leading-none bg-secondary text-shadow focus:outline-none focus:bg-primary hover:bg-accent transition duration-200 ease-in-out hidden sm:block"
          onClick={() => (window.location.href = "/input")}
        >
          Add a sale
        </button>

      </div>

      <LineChart chartData={chartData} showLocation={showLocation} />
      <SwitchToggle
        showLocation={showLocation}
        setShowLocation={setShowLocation}
      />
      <button
          className="px-5 mt-5 h-10 rounded-md font-semibold leading-none bg-secondary text-shadow focus:outline-none focus:bg-primary hover:bg-accent transition duration-200 ease-in-out block sm:hidden"
          onClick={() => (window.location.href = "/input")}
        >
          Add a sale
        </button>
    </div>
  );
}
