import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { Heading } from "@radix-ui/themes"

const InputForm = ({setIsSubmit}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      salesData: {
        date: formData.get("date"),
        numSales: parseInt(formData.get("numSales"), 10),
        location: formData.get("location"),
      },
    };

    try {
      const response = await axios.post("http://localhost:5000/api/sales", data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 123abc",
        },
      });

      setIsSubmit(true);
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Heading>Add sales</Heading>
      <Form.Field className="grid mb-2.5" name="date">
        <div className="flex items-baseline justify-between">
          <Form.Label className="font-medium leading-[35px]">Date</Form.Label>
          <Form.Message className="text-md opacity-80 text-red-600 font-bold" match="valueMissing">
            Please select a date
          </Form.Message>
          <Form.Message className="text-md opacity-80 text-red-600 font-bold" match={(value) => {
            const today = new Date().toISOString().split("T")[0];
            return value > today;
          }}>
            Please select a valid date
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="date"
            name="date"
            className="w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </Form.Control>
      </Form.Field>
  
      {/* Number of Sales Field */}
      <Form.Field className="grid mb-2.5" name="numSales">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-text font-medium leading-[35px]">Number of Sales</Form.Label>
          <Form.Message className="text-md opacity-80 text-red-600 font-bold" match="valueMissing">
            Please enter the number of sales
          </Form.Message>
          <Form.Message className="text-sm opacity-80" match="rangeOverflow">
            Sales must be less than 500
          </Form.Message>
          <Form.Message className="text-sm opacity-80" match="rangeUnderflow">
            Sales must be at least 0
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="number"
            name="numSales"
            min="0"
            max="500"
            className="w-full h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </Form.Control>
      </Form.Field>
  
      {/* Location Field */}
      <Form.Field className="grid mb-2.5" name="location">
        <div className="flex items-baseline justify-between">
        <Form.Label className="text-text font-medium leading-[35px]">Location</Form.Label>
        <Form.Message className="text-sm opacity-80" match="valueMissing">
            Please select a location
          </Form.Message>
        </div>
        <Form.Control asChild>
          <select
            name="location"
            className="w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          >
            <option value="" disabled>Select a location</option>
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
          className="w-full mt-7 h-10 rounded-md font-semibold leading-none bg-background text-shadow focus:outline-none focus:bg-primary hover:bg-accent transition duration-200 ease-in-out"
        >
          Submit
        </button>
      </Form.Submit>
    </Form.Root>
  );
  
};

export default InputForm;
