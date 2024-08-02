# Sales Data Dashboard

This project is a full-stack application that displays a line chart of sales data by date, broken down by location. It receives live data through a WebSocket connection and includes functionality to toggle location visibility. The app ensures that only the last 10 points of data received are displayed, dropping the oldest inserted data when new data is received. If data for an existing day is received, it will be replaced with the new data, but if it is not in the most recently added 10 points of data, the change will not show up on the live chart.

## Features
- Display live sales data on a line chart.
- Toggle visibility of sales data locations.
- FIFO mechanism on frontend to keep only the last 10 points of sales data received. 
- Backend Express server with data ingestion and validation.
- Authentication middleware for secure data submission. 
- Form for data input with validation.

## Tech Stack
- Frontend: Next.js, React, Tailwind CSS, Radix UI, react-chartjs-2
- Backend: Express, WebSocket

## Installation

### Prerequisites
- Node.js
- npm or yarn

### Running the project

1. Clone the repository:
    ```bash
    git clone https://github.com/sixiann/chart-sales.git
    cd chart-sales
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    cd server
    npx nodemon server.js
    ```
    The backend server will be running on `http://localhost:5000`.

4. Start the frontend client:
    ```bash
    npm run dev
    ```
    The frontend client will be running on `http://localhost:3000`
    
    Open `http://localhost:3000/chart` to view the sales data chart.

    Open `http://localhost:3000/input` to input sales data.

## API

### POST /sales

- **Description**: Ingest sales data.
- **Authentication**: Bearer token `123abc`. For the purposes of the demo, the bearer token is included in API requests from the frontend.
- **Request Body**:
    ```json
    {
      "salesData": {
        "date": "2023-11-21",
        "numSales": 100,
        "location": "locationA"
      }
    }
    ```
- **Validation**:
  - Date must not be in the future.
  - Number of sales must be between 0 and 500.

## Frontend Pages

### /chart
Displays the chart with live sales data.

### /input
Form to input sales data.