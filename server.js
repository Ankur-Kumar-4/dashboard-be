const express = require('express');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', dataRoutes);

// Error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
