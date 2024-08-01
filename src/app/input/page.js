"use client";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import axios from "axios";


export default function Home() {
  const [formData, setFormData] = useState({
    date: "",
    numSales: "",
    location: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      "salesData": {
        "date": formData.get("date"),
        "numSales": parseInt(formData.get("numSales"), 10),
        "location": formData.get("location"),
      },
    };

    try {
      const response = await axios.post("http://localhost:5000/api/sales", data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 123abc",
        },
      });

      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Form.Root className="w-[460px] py-10 bg-primary p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <Form.Field className="grid mb-2.5" name="date">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-text text-base font-medium leading-[35px]">
              Date
            </Form.Label>
            <Form.Message
              className="text-text text-sm opacity-80"
              match="valueMissing"
            >
              Please select a date
            </Form.Message>
            <Form.Message
              className="text-text text-sm opacity-80"
              match={(value) => {
                const today = new Date().toISOString().split("T")[0];
                return value > today;
              }}
            >
              Please select a date not in the future
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="date"
              name="date"
              className="w-full h-10 inline-flex items-center justify-center rounded-md text-base text-text bg-secondary placeholder:text-text placeholder:text-opacity-50 focus:ring-0 focus:outline-none focus:ring-accent focus:ring-2"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="grid mb-2.5" name="numSales">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-text text-base font-medium leading-[35px]">
              Number of Sales
            </Form.Label>
            <Form.Message
              className="text-text text-sm opacity-80"
              match="valueMissing"
            >
              Please enter the number of sales
            </Form.Message>
            <Form.Message
              className="text-text text-sm opacity-80"
              match="rangeOverflow"
            >
              Sales must be less than 500
            </Form.Message>
            <Form.Message
              className="text-text text-sm opacity-80"
              match="rangeUnderflow"
            >
              Sales must be at least 0
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="number"
              name="numSales"
              min="0"
              max="500"
              className="w-full h-10  inline-flex items-center justify-center rounded-md text-base text-text bg-secondary 
              placeholder:text-text placeholder:text-opacity-50 focus:ring-0 focus:outline-none focus:ring-accent focus:ring-2"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="grid mb-2.5" name="location">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-text text-base font-medium leading-[35px]">
              Location
            </Form.Label>
            <Form.Message
              className="text-text text-sm opacity-80"
              match="valueMissing"
            >
              Please select a location
            </Form.Message>
          </div>
          <Form.Control asChild>
            <select
              name="location"
              className="w-full h-10 inline-flex items-center justify-center rounded-md text-base text-text bg-secondary 
              placeholder:text-text placeholder:text-opacity-50 focus:ring-0 focus:outline-none focus:ring-accent focus:ring-2"
              required
            >
              <option value="" disabled>
                Select a location
              </option>
              <option value="locationA">Location A</option>
              <option value="locationB">Location B</option>
              <option value="locationC">Location C</option>
              <option value="locationD">Location D</option>
            </select>
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-md px-4 py-0.5 text-base font-medium leading-none h-[35px]
            bg-white text-text shadow-[0_2px_10px_var(--black-a7)] hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent"
            style={{ marginTop: 10 }}
          >
            Submit
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
