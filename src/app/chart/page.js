"use client";
import React, { useEffect, useState } from "react";
import { Heading } from "@radix-ui/themes";
import LineChart from "./LineChart";
import SwitchToggle from "./SwitchToggle";
import Button from "../components/Button";

const maxDays = 10;

export default function Home() {
  const [chartData, setChartData] = useState([]);
  const [showLocation, setShowLocation] = useState(false);

  //set up websocket to receive charts
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      //newChartData is sorted based on insertion order, pop from left to remove earlier data
      let newChartData = message.data;
      while (newChartData.length > maxDays) {
        newChartData.shift();
      }
      setChartData(newChartData);
    };
  }, []);

  return (
    <div className="bg-background h-screen px-5 lg:px-40 flex flex-col justify-center items-center">
      <div className="px-5 w-full flex flex-row justify-between items-center">
        <Heading size="8" className="mb-3">
          Live Sales
        </Heading>
        <Button
          className="hidden sm:block"
          text="Add a sale"
          handleClick={() => (window.location.href = "/input")}
        />
      </div>

      <LineChart chartData={chartData} showLocation={showLocation} />
      <SwitchToggle
        showLocation={showLocation}
        setShowLocation={setShowLocation}
      />
      <Button
        className="block sm:hidden mt-3"
        text="Add a sale"
        handleClick={() => (window.location.href = "/input")}
      />
    </div>
  );
}
