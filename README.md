# Sales Data Dashboard

This project is a full-stack application that displays a line chart of sales data by date, broken down by location. It receives live data through a WebSocket connection and includes functionality to toggle location visibility. The app ensures that only the last 10 days of data are displayed, replacing the oldest data when new data is received.

## Features
- Display live sales data on a line chart.
- Toggle visibility of sales data locations.
- FIFO mechanism to keep only the last 10 days of data.
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
    cd sales-data-dashboard/backend
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
- **Authentication**: Bearer token `123abc`.
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
