"use client";
import * as Form from "@radix-ui/react-form";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Form.Root className="w-[460px] py-10 bg-primary p-6 rounded-lg shadow-lg">
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
        className="w-full inline-flex items-center justify-center rounded-md text-base text-text bg-secondary placeholder:text-text placeholder:text-opacity-50 focus:ring-0 focus:outline-none focus:ring-accent focus:ring-2"
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
              min="0"
              max="500"
              className="w-full inline-flex items-center justify-center rounded-md text-base text-text bg-secondary 
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
              className="w-full inline-flex items-center justify-center rounded-md text-base text-text bg-secondary ]
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
