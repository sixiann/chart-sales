const express = require('express');
const cors = require('cors');
const authenticate = require('./middleware/auth');
const { setupWebSocket } = require('./utils/websocket')

const app = express();
app.use(express.json());
app.use(cors());

const salesRoutes = require('./routes/sales');
app.use('/api/sales', authenticate, salesRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

setupWebSocket(server); 
