const express = require('express');
const authenticate = require('./middleware/auth'); 

const app = express();
app.use(express.json()); 

const salesRoutes = require('./routes/sales');
app.use('/api/sales', authenticate, salesRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});