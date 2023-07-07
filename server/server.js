require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productsRouter = require('./routes/products');

// Express Setup
const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productsRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, 
                 { useNewUrlParser: true, useUnifiedTopology: true, retryWrites: true, w: 'majority' });
const db = mongoose.connection;
db.once('open', () => {
  console.log("Successfully connected to the database");
});

// Listen on port 5000
app.listen(5000, () => {
    console.log('Server is running on Port: 5000');
});
